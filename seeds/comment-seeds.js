const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 1,
        comment_text: "not sure!"
    },
    {
        user_id: 2,
        post_id: 2,
        comment_text: "yeah man"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;