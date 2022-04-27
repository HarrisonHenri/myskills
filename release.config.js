module.exports = {
  plugins: [
    ["@semantic-release/npm", {
      "npmPublish": false,
    }],
    "@semantic-release/github"
  ],
};