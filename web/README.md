# GraphQL sample application

This application demonstrates how to call a GraphQL API using a generated type
system. This application requires the [API](../api) server to be running.

## Getting Started

Install dependencies ...

```bash
npm i
```

Run the development server ...

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## pages/index

Start investigating this application by looking at
[src/pages/index.ts](src/pages/index.ts).

This page utilises the useUsersQuery that is generated from
[src/graphql/Users.query.graphql](src/graphql/Users.query.graphql)

## Generating types and hooks

You can generate your API TypeScript types and React hooks with ...

```bash
npm run codegen
```

This uses your queries in `src/graphql` and validates against the GraphQL API,
which must be running for the command to succeed. The code generation is
configured in [codegen.yml](./codegen.yml).

The output is [graphql.schema.json](./graphql.schema.json) and
[src/generated/graphql.ts](./src/generated/graphql.ts)

## Recommended plugins

You can define recommended VSCode plugins for your application under
[.vscode/extensions.json](.vscode/extensions.json). This will guide your
developers to install GraphQL linting plugins to their VSCode environment.
