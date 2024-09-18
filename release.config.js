/* eslint-disable import/no-anonymous-default-export */
export default {
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
      },
    ],
    '@semantic-release/npm',
    {
      npmPublish: false,
    },
    '@semantic-release/git',
    '@semantic-release/github',
    [
      'semantic-release-ado',
      {
        setOnlyOnRelease: false,
        varName: 'semanticVersion',
      },
    ],
  ],
};
