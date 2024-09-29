# TypeGen - Lessons Learned

[Sanity TypeGen](https://www.sanity.io/docs/sanity-typegen) provides generation of TypeScript definitions from Sanity Studio schemas and GROQ queries.

This document is a collection of findings and "note-to-future-self"s related
to implementing TypeGen in the project.

See [#610](https://github.com/varianter/variant.no/issues/610) for the chronological uncut version.

> [!NOTE]  
> In the examples below, we assume a project with two workspaces: `studio` and `sharedStudio`. This might have changed
> since this document was written, so adjust accordingly.

## Setup

### Multiple Workspaces

The TypeGen setup is slightly complicated by the use of multiple Sanity workspaces. The proposed solution when testing
out TypeGen was to run type generation for each workspace separately, with their own config file and type definition
file. The file structure looked something like this:

```
...
studio/
    ...
    sanity.types.ts
    sanity-typegen.json
studioShared/
    ...
    sanity.types.ts
    sanity-typegen.json
```

### Configuration File (`sanity-typegen.json`)

The TypeGen configuration file is used to specify the location of source code and schema definition files to generate
types, in addition to defining output paths for schema and type definition files. Each workspace defines its own
configuration, as shown in the below examples.

`studio/sanity-typegen.json`

```json
{
  "path": ["./src/**/*.{ts,tsx,js,jsx}", "studio/**/*.{ts,tsx,js,jsx}"],
  "schema": "studio/schema.json",
  "generates": "studio/sanity.types.ts",
  "overloadClientMethods": true
}
```

`studioShared/sanity-typegen.json`

```json
{
  "path": ["./src/**/*.{ts,tsx,js,jsx}", "studioShared/**/*.{ts,tsx,js,jsx}"],
  "schema": "studioShared/schema.json",
  "generates": "studioShared/sanity.types.ts",
  "overloadClientMethods": true
}
```

### Convenience scripts

The following `package.json` scripts can be defined to perform schema extraction and type generation for multiple
workspaces, all in one go.

```json
{
  "scripts": {
    "typegen-template": "rimraf \"$SCHEMA_PATH/schema.json\" && sanity schema extract --enforce-required-fields --workspace \"$WORKSPACE\" --path \"$SCHEMA_PATH/schema.json\" && sanity typegen generate --config-path \"$SCHEMA_PATH/sanity-typegen.json\" && rimraf \"$SCHEMA_PATH/schema.json\"",
    "typegen:studio": "cross-env SCHEMA_PATH=studio WORKSPACE=studio npm run typegen-template",
    "typegen:shared": "cross-env SCHEMA_PATH=studioShared WORKSPACE=sharedStudio npm run typegen-template",
    "typegen": "npm-run-all --parallel typegen:*"
  }
}
```

> requires dev dependencies `cross-env`, `rimraf` and `npm-run-all` for cross-platform support

## Usage

Use the [official documentation](https://www.sanity.io/docs/sanity-typegen) for general usage of the generated types.

### Custom types

One downside of the generated types was that they only defined types for whole documents, with a high degree of nesting.
Un-nesting these type definitions for cases where only a portion of a document was needed, required some highly verbose
TypeScript definitions. To hide this from the rest of the codebase, an approach for defining custom types in addition to
the generated ones was needed. One proposal is shown below.

`studio/types.ts`

```typescript
import * as types from "./sanity.types";

export { types };

// "not too bad"-case
export type YearBonuses = NonNullable<
  NonNullable<types.Compensations["bonusesByLocation"]>[number]["yearlyBonuses"]
>;

// "way too nested"-case
export type NavigationFooterRichTextLinkChildMark = NonNullable<
  NonNullable<
    Extract<
      NonNullable<
        Extract<
          NonNullable<
            NonNullable<
              NonNullable<types.NAV_QUERYResult>["footer"]
            >[number]["linksAndContent"]
          >[number],
          { _type: "richTextObject" }
        >["richText"]
      >[number],
      { _type: "block" }
    >["children"]
  >[number]["marks"]
>[number];
```

resulting in the following import statement

```typescript
import { types, NavigationFooterRichTextLinkChildMark } from "studio/types";

interface SomeProps {
  compensations: types.Compensations;
  marks: NavigationFooterRichTextLinkChildMark;
}
```
