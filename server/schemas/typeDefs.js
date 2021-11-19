const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    me: User
    users: [User]
    user(username: String!): User
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: Int
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, password: String!, email: String!): Auth
  }

  input SaveBookInput {
    authors: String!
    description: String!
    title: String!
    image: String!
    link: String!
  }
  
  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;