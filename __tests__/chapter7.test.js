import { dijkstraAlgorithm } from '../src/chapter7/dijkstraAlgorithm';

test("Dijkstra's algorithm", () => {
  const graph = {
    a: {
      fin: 1,
    },
    b: {
      a: 3,
      fin: 5,
    },
    fin: {},
  };
  const costs = {
    a: 6,
    b: 2,
    fin: Infinity,
  };
  const parents = {
    a: 'start',
    b: 'start',
    fin: null,
  };
  expect(dijkstraAlgorithm({ graph, costs, parents })).toEqual(6);
});
