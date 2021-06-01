# GraphQL sample API with NextJS

# Getting Started

Install dependencies ...

```bash
npm i
```

Run the development server ...

```bash
npm run dev
```

Open [http://localhost:3000/api](http://localhost:3000/api) to open the graphql
playground. Here you can interact with the GraphQL API server.

## Sample queries

```graphql
{
  getUsers {
    avatarUrl
    id
    login
  }
}
```

```graphql
{
  getUser(name: "craigs") {
    avatarUrl
    id
    login
  }
}
```

## Schema and resolvers

You will find schema definitions in
[pages/api/schema](./pages/api/schema/index.ts) with the associated resolvers in
[pages/api/resolvers](./pages/api/resolvers/index.ts).
