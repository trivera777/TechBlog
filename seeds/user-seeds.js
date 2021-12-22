const { User } = require('../models');

const userData = [
    {
        username: "micheal",
        email: "micheal@gmail.com",
        password: "test1"
    },
    {
        username: "joe",
        email: "joe@gmail.com",
        password: "test2"
    },
    {
        username: "jess",
        email: "jess@gmail.com",
        password: "test3"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;