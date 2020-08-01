import { searchInDeep } from '../src/chapter6/searchInDeep';

test('Search in deep', () => {
  const graph = {
    ilya: ['alice', 'bob', 'claire'],
    bob: ['anuj', 'peggy'],
    alice: ['peggy'],
    claire: ['thom', 'jonny'],
    anuj: [],
    peggy: [],
    thom: [],
    jonny: [],
  };
  expect(searchInDeep(graph, 'jonny')).toBe(true);
  expect(searchInDeep(graph, 'brandon')).toBe(false);
});
