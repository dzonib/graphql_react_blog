const { gql } = require("apollo-server")

const typeDefs = gql`
    type Query {
        getUser(id: Int!): User
        getPost(id: Int!): Post
    }

    type Mutation {
        createUser(name: String!, email: String!, password: String!): User!
        createPost(title: String!, body: String!): Post!
    }

    enum Roles {
        USER
        ADMIN
        BANNED
    }

    type User {
        id: Int!
        name: String!
        email: String!
        password: String!
        role: Roles!
    }

    type Post {
        id: Int
        title: String
        body: String
        author: User
    }

`
module.exports = typeDefs
