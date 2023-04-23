# Repro for Prisma 4.6.1 issue

## Setup

1. `npm install`
2. `npx prisma generate`

## Directories

- `./src` - Main project source code.
- `./script` - cron and locally run scripts here. Should seamlessly import files from `./src`.
-

## Reproduce

Run `npm run reproduce` (runs `ts-node --compiler-options \{\"module\":\"commonjs\"\,\"jsx\":\"react-jsx\"\} script/test.ts`)

Expected: The script runs correctly.

Actual: This error:

`TypeError: Cannot read properties of undefined (reading 'create')`
