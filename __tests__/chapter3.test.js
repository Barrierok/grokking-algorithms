import { f } from '../src/chapter3/factorial';

test('Factorial', () => {
  expect(f(5)).toEqual(120);
  expect(f(3)).toEqual(6);
  expect(f(1)).toEqual(1);
});
