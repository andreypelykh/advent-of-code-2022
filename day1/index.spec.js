const { mostElfCalories, top3ElvesCaloriesTotal } = require('./index');
const input = require('fs').readFileSync('day1/input.txt').toString();

test('mostElfCalories', () => {
  expect(mostElfCalories(input)).toBe(62522);
});

test('top3ElfsCaloriesTotal', () => {
  expect(top3ElvesCaloriesTotal(input)).toBe(171448);
});
