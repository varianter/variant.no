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

It should run without configuring any environment variables using mocked data and local storage of images. If you want to integrate with actual CV Partner for fetching employees and Blob Storage to cache/store CV photos you can set that by creating a `.env.local` file based on the [`.env.example` file](./env.example).

```
# Set if you want to integrate with CV Partner

CV_PARTNER_API_SECRET=<API_KEY>

# Activate Blob Storage mode:
BLOB_OVERRIDE=true

# Will require Blob Storage settings:
AZURE_STORAGE_ACCOUNT_ACCESS_KEY=<ACCESS_KEY>
AZURE_STORAGE_ACCOUNT_NAME=variantno
```



## Architecture and design decisions

Organizing is done through module folders where all relevant files are located. This is to easer be able to remove/delete code and complete sets of code. However, there are some assets (e.g. manifest files and some images) which are more practical as public files (inside `public/`). These will be available as static files hosted on the root path.

Styles are used as CSS Modules with as specific naming as possible. If nested components, use [BEM naming convention](http://getbem.com/naming/).

Reusable or generic components should be moved to the [Styleguide monorepo](https://github.com/varianter/styleguide).

This site should be static and exportable as clean HTML.
