const { findMyTotalScore, findRoundScore } = require('./index');
const input = require('fs').readFileSync('day2/input.txt').toString();

test('findMyTotalScore', () => {
  expect(findMyTotalScore(input)).toBe(15);
});

test('findRoundScore', () => {
  expect(findRoundScore('A Y')).toBe(8);
  expect(findRoundScore('B X')).toBe(1);
  expect(findRoundScore('C Z')).toBe(6);
});
