require('dotenv').config();

const Snoowrap = require('snoowrap');
const Snoostorm = require('snoostorm');

const conf = new Snoowrap({
  userAgent: 'reddit-bot-example-node',
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  username: process.env.REDDIT_USER,
  password: process.env.REDDIT_PASS
});
const client = new Snoostorm(conf);

const streamOptions = {
  subreddit: 'testingground4bots',
  results: 25
};

const comments = client.CommentStream(streamOptions);

comments.on('comment', (comment) => {
  console.log(comment);
});
