const User = require("../db/models/User")

const resolvers = {
    Query: {
        getUser(parent, args, ctx, info) {
            return user
        }
    }
}

module.exports = resolvers