const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    password: String!
    colorPreference: String!
  }

  type Query {
    getUser(email: String!): User
  }

  type Mutation {
    updateUserColorPreference(email: String!, colorPreference: String!): User
    loginUser(email: String!, password: String!): User
  }
`;

module.exports = typeDefs