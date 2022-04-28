module.exports = {
  branches: ["staging"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    ["@semantic-release/exec", {
      "publishCmd": "./publish.sh ${nextRelease.version} ${nextRelease.gitTag}"
    }],
    [
      "@semantic-release/changelog", {
        "changelogFile": "CHANGELOG.md"
      }
    ]
  ],
};