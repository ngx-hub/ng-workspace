
// [standard-version](https://github.com/conventional-changelog/standard-version)

module.exports = {
	scripts: {
		// prerelease: "echo prerelease",
		// prebump: "echo prebump",
		// postbump: "echo postbump",
		// prechangelog: "echo prechangelog",
		// postchangelog: "echo postchangelog",
		// precommit: "echo precommit",
		// postcommit: "echo postcommit",
		// pretag: "echo pretag",
		// posttag: "echo posttag"
	},
	skip: {
		bump: false,
		changelog: false,
		commit: false,
		tag: false
	},
	packageFiles: [ "package.json" ],
	bumpFiles: [ "package.json" ],
	types: [
		// As @commitlint/config-conventional
		{ type: "feat", section: "Features ✨" },
		{ type: "fix", section: "Bug Fixes 🐛" },
		{ type: "docs", section: "Documentation 📚" },
		{ type: "perf", section: "Performance Improvements 🚀" },
		{ type: "chore", section: "Chores ♻️", hidden: true },
		{ type: "build", section: "Builds 🛠", hidden: true },
		{ type: "ci", section: "Continuous Integrations ⚙️", hidden: true },
		{ type: "style", section: "Style 💎", hidden: true },
		{ type: "test", section: "Tests 🚨", hidden: true },
		{ type: "refactor", section: "Code Refactoring 📦", hidden: true },
		{ type: "revert", section: "Revert 🗑", hidden: true }
	],
	infile: "CHANGELOG.md",
	// https://medium.com/@christianingsunardi/hi-816582e0c06c
	releaseCommitMessageFormat: "chore(release): {{currentTag}}"
};
