module.exports = {
  branches: ["staging"],
  plugins: [
    "@semantic-release/commit-analyzer",
    ["@semantic-release/exec", {
      "publishCmd": "./publish.sh ${nextRelease.version} ${nextRelease.gitTag}"
    }],
  ],
};