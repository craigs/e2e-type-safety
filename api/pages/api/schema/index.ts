import {gql} from 'apollo-server-micro'

export const typeDefs = gql`
  type User {
    id: ID
    login: String
    avatarUrl: String
    name: String @deprecated(reason: "Use login")
  }

  type Query {
    getUser(name: String!): User!
    getUsers: [User]
  }
`
