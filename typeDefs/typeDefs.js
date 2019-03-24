const { gql } = require("apollo-server")

const typeDefs = gql`
    type Query {
        getUser: User!
    }

    type Mutation {
        createUser(name: String!, email: String!, password: String): User!
    }

    type User {
        id: ID!
        name: String!
        email: String!
        password: String!
    }
`
module.exports = typeDefs
