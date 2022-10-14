# Variant Homepage

Current homepage of Variant.

## Building and running locally

Install dependencies using `yarn`

```
yarn
```

And start up dev server

```
yarn dev
```

Navigate to `http://localhost:3000`. Have fun!

## Configuration

Configure locally unsing a `.env.local` file based on the [`.env.example`](./.env.example) file.

`REVALIDATE_TOKEN` for revalidating isn't needed for developing locally unless you want to test out revalidation. Revalidation is triggering new static site generation on the server side to reload static data. `REVALIDATE_TOKEN` should match that of [data-layer](https://github.com/varianter/data-layer).

```
# Secret token to use for revalidating/regenerating images
REVALIDATE_TOKEN=<token>
```

## Architecture and design decisions

Organizing is done through module folders where all relevant files are located. This is to easer be able to remove/delete code and complete sets of code. However, there are some assets (e.g. manifest files and some images) which are more practical as public files (inside `public/`). These will be available as static files hosted on the root path.

Styles are used as CSS Modules with as specific naming as possible. If nested components, use [BEM naming convention](http://getbem.com/naming/).

Reusable or generic components should be moved to the [Styleguide monorepo](https://github.com/varianter/styleguide).

This site should be static and exportable as clean HTML.
