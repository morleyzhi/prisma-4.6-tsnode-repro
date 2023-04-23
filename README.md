# Repro for Prisma 4.6.1 issue

## Setup

1. `npm install`
2. `npx prisma generate`

## Directories

- `./src` - Main project source code.
- `./script` - cron and locally run scripts here. Should seamlessly import files from `./src`.
-

## Reproduce

Run `npm run reproduce` (runs `ts-node --compiler-options \{\"module\":\"commonjs\"\,\"jsx\":\"react-jsx\"\} script/reproduce.ts`)

Expected: The script runs correctly.

Actual: This error:

`TypeError: Cannot read properties of undefined (reading 'create')`

## Prisma version location

Rolling Prisma back to 4.5.0 "fixes" the script:

```
npm install --save-dev prisma@4.5.0 @prisma/client@4.5.0 && \
  npx prisma generate && \
  npm run reproduce
```

Rolling forward breaks it again:

```
npm install --save-dev prisma@4.6.1 @prisma/client@4.6.1 && \
  npx prisma generate && \
  npm run reproduce
```
