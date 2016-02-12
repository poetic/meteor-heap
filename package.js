Package.describe({
  name: 'poetic:meteor-heap',
  version: '0.0.1',
  summary: 'Meteor package wrapper for heap',
  git: 'https://github.com/poetic/meteor-heap',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('heap.js', 'client');
});

Package.onTest(function(api) {
});
