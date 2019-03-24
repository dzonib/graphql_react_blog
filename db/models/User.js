const Sequelize = require('sequelize')
const sequelize = require('../sequelize')


const User = sequelize.define('user', {
    id: {
        type: Sequelize.NUMBER,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = User
