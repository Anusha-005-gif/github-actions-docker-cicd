const test = require('node:test');
const assert = require('node:assert');
const app = require('../server');

test('App is properly initialized', () => {
  assert.strictEqual(typeof app, 'function');
  assert.strictEqual(typeof app.get, 'function');
});