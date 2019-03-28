const User = require("../db/models/User")
const Post = require('../db/models/Post')

const resolvers = {
    Query: {
        async getUser(parent, { id }, ctx, info) {
            console.log("ID", id)
            try {
                const user = await User.findByPk(id)

                return user
            } catch (e) {
                console.log(e.message)
            }
        },
        async getPost(parent, args, ctx) {
            const post = await Post.findByPk(1)
            // console.log(JSON.stringify(post, null, 4))
            return post
        }
    },
    Mutation: {
        async createUser(
            parent,
            { name, email, password, role = "USER" },
            ctx,
            info
        ) {
            try {
                const emailCheck = await User.findOne({ where: { email } })

                if (emailCheck) {
                    throw new Error("User registered")
                }

                const user = await User.create({ name, email, password, role })

                return user
            } catch (e) {
                console.log(e.message)
            }
        },
        async createPost(parent, { title, body }, ctx) {

            const user = await User.findByPk(1)

            const post = await user.createPost({ title, body })
            // console.log(JSON.stringify(parent, null, 4))
            return post
        }
    },
    Post: {
        async author(parent, args, ctx) {
            console.log(parent)
            const author = await User.findByPk(parent.userId)
            return author
        }
    }
}

module.exports = resolvers
