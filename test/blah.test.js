const sb = require('../dist/beian.js.cjs.production.min.js').default;

describe('sb', () => {
  it('works', () => {
    expect(sb('hello world')).toEqual('hello world');
  });
  it('no works', () => {
    expect(() => sb('bye world')).toThrow();
  });
});
