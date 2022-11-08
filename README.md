# Reproduction of error resolving ASTs

This repository is reproduction of error when compiled Comlink files are not resolved properly if superjson is passed in code.

Install dependencies:
```shell
npm install
```

Run passing example when superjson is loaded from expected path (source in `superface/index.ts`):
```shell
npm run start:ok
```

Run failing example (source in `pages/api/index.ts`)
```shell
npm run start:error
```
