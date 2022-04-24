module.exports = {
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    ["@semantic-release/npm", {
      "npmPublish": false,
    }],
    "@semantic-release/github",
    "@semantic-release/git",
    {
     "assets": ["CHANGELOG.md"],
     "message": "${nextRelease.version} CHANGELOG [skip ci]\n\n${nextRelease.notes}"
    }
  ],
};