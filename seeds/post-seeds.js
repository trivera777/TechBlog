const { Post } = require('../models');

const postData = [
    {
        title: "question",
        post_content: "what can we talk about on here?",
        user_id: 1
    },
    {
        title: "another question",
        post_content: "is this all about tech?",
        user_id: 2
    },
    {
        title: "response",
        post_content: "not sure",
        user_id: 3

    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;