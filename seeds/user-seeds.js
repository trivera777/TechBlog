const { User } = require('../models');

const userData = [
    {
        username: "sam",
        email: "sam@gmail.com",
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
    },
    {
        username: "nick",
        email: "nick@gmail.com",
        password: "test4"
    },
    {
        username: "tim",
        email: "tim@gmail.com",
        password: "test5"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;