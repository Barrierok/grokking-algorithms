import { approximateAlgorithm } from '../src/chapter8/approximateAlgorithm';

test('Approximate algrorithm', () => {
  const statesNeeded = ['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az'];
  const stations = {
    kone: ['id', 'ut', 'nv'],
    ktwo: ['wa', 'id', 'mt'],
    kthree: ['or', 'nv', 'ca'],
    kfour: ['nv', 'ut'],
    kfive: ['ca', 'az'],
  };
  expect(approximateAlgorithm(statesNeeded, stations))
    .toEqual(['kone', 'ktwo', 'kthree', 'kfive']);
});
