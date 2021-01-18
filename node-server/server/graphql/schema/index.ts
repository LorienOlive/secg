/**
 * Primary file for GraphQL Schema
 * @author Lorien Olive
 */

import { gql } from 'apollo-server-express';
import { ApolloServerExpressConfig } from 'apollo-server-express';
import resolvers from '../resolvers/index';

const typeDefs = gql`
  type Query {
    users: [User!]!
    user(userId: ID!): User!
    login(email: String!, password: String!): AuthData!
    gardens: [Garden!]
    garden(gardenId: ID!): Garden!

  }
  type Mutation {
    createUser(userInput: UserInput): AuthData!
    updateUser(userId: ID!, updateUser: UpdateUser): User!
    createGarden(gardenInput: GardenInput): Garden!
    updateGarden(userId: ID!, updateGarden: UpdateGarden): Garden!
  }
  type Subscription {
    userAdded: User
    userUpdated: User
    gardenAdded: Garden
    gardenUpdated: Garden
  }
  type User {
    _id: ID!
    email: String!
    name: String!
    password: String
    createdAt: String!
    updatedAt: String!
  }
  type AuthData {
    userId: ID!
    token: String!
    tokenExpiration: Int!
  }
  input UserInput {
    email: String!
    name: String!
    password: String!
  }
  input UpdateUser {
    email: String
    name: String
    password: String
  }
  type Garden {
    _id: ID!
    name: String!
    street_address: String
    createdAt: String!
    updatedAt: String!
  }
  input GardenInput {
    name: String!
    street_address: String!
  }
  input UpdateGarden {
    name: String
    street_address: String
  }
`;

const schema: ApolloServerExpressConfig = {
  typeDefs,
  resolvers,
  introspection: true,
  context: async ({ req, connection, payload }: any) => {
    if (connection) {
      return { isAuth: payload.authToken };
    }
    return { isAuth: req.isAuth };
  },
  playground: true
};

export default schema;
