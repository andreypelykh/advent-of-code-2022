const {
  findMyTotalScore,
  findRoundScore,
  findMyTotalScorePart2,
} = require('./index');
const input = require('fs').readFileSync('day2/input.txt').toString();

test('findRoundScore', () => {
  expect(findRoundScore('A Y')).toBe(8);
  expect(findRoundScore('B X')).toBe(1);
  expect(findRoundScore('C Z')).toBe(6);
});

test('findMyTotalScore', () => {
  expect(findMyTotalScore(input)).toBe(15);
});

test('findMyTotalScorePart2', () => {
  expect(findMyTotalScorePart2(input)).toBe(12);
});
