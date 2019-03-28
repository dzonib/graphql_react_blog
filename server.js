const { ApolloServer } = require("apollo-server")

const sequelize = require("./db/sequelize")
const User = require('./db/models/User')
const Post = require('./db/models/Post')
const typeDefs = require("./typeDefs/typeDefs")
const resolvers = require("./resolvers/resolvers")


const server = new ApolloServer({
    resolvers,
    typeDefs
})

User.hasMany(Post)


sequelize.sync().then(() => { 
    server.listen().then(({ url }) => {
        console.log(`🚀  Server ready at ${url}`)
    })
})
