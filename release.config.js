module.exports = {
  release: {
    "branches": ["staging"]
  },
  plugins: [
    ["@semantic-release/npm", {
      "npmPublish": false,
    }],
    "@semantic-release/github"
  ],
};