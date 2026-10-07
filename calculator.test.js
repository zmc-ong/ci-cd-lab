const { add, subtract } = require('./calculator');

test('adds 2 + 3 to equal 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('adds negative numbers correctly', () => {
  expect(add(-1, -2)).toBe(-3);
});

test('subtracts 10 - 4 to equal 6', () => {
  expect(subtract(10, 4)).toBe(6);
});

test('subtracts negative numbers correctly', () => {
  expect(subtract(-5, -3)).toBe(-2);
});
