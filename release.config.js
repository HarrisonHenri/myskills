module.exports = {
  branches: ["staging"],
  plugins: [
    ["@semantic-release/npm", {
      "npmPublish": false,
    }],
    "@semantic-release/github"
  ],
};