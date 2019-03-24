const { ApolloServer } = require("apollo-server")

const sequelize = require("./db/sequelize")
const typeDefs = require("./typeDefs/typeDefs")
const resolvers = require("./resolvers/resolvers")

const server = new ApolloServer({
    resolvers,
    typeDefs
})

sequelize.sync().then(() => {
    server.listen().then(({ url }) => {
        console.log(`🚀  Server ready at ${url}`)
    })
})
