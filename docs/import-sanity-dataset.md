## Importing Sanity datasets

Occasionally, we might want to get a fresh dump of the production dataset in Sanity and import it into the staging dataset to avoid having stale data in our local development environments.
Here's how you can do that!

### Preparations

First, copy the Sanity CLI config from either `studio/` or `studioShared/`, depending on what studio you want to import.
Assuming you are in the root of the project, i.e. the `variant.no` directory, run one of the following commands in your terminal of choice:

#### Studio

```sh
cp studio/sanity.cli.ts sanity.cli.ts
```

#### Shared studio

```sh
cp studioShared/sanity.cli.ts sanity.cli.ts
```

This will ensure that we read the correct environment variables to connect to the given studio.
With that set up, we can get going!

### Import and export

Go to, or stay in, the `variant.no` directory in your terminal of choice and run the following commands:

1. Export the production dataset

```sh
sanity dataset export production production.tar.gz
```

2. Delete the existing staging dataset

```sh
sanity dataset delete staging
```

3. Import the production dataset

```sh
sanity dataset import production.tar.gz staging
```
