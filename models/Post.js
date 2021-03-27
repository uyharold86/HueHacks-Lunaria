const { Model, Schema } = require('mongoose');

const postSchma = new Schma ({
  body: String,
  username: String,
  createdAt: String,
  comments: [
    {
      body: String,
      username: String,
      createdAt: String
    }
  ],
  likes: [
    {
      username: String,
      createdAT: String
    }
  ],
  user: {
    type: Schema.Types.ObjectId
    ref: 'users'
  }
});

module.exports = model('Post', postSchema);
