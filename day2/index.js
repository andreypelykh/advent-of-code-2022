const findMyTotalScore = (input) => sum(input.split('\n').map(findRoundScore));
const sum = (elements) => elements.reduce((a, b) => a + b);

const findRoundScore = ([a, _, b]) =>
  getShapeScore(b) + getRoundOutcomeScore(a, b);

const getShapeScore = (a) => {
  if (isRock(a)) return 1;
  if (isPaper(a)) return 2;
  if (isScissors(a)) return 3;
};

const getRoundOutcomeScore = (a, b) => {
  if (isLost(a, b)) return 0;
  if (isDraw(a, b)) return 3;
  if (isWon(a, b)) return 6;
};

const isDraw = (a, b) => !isWon(a, b) && !isLost(a, b);
const isLost = (a, b) => isWon(b, a);

const isWon = (a, b) =>
  (isRock(b) && isScissors(a)) ||
  (isPaper(b) && isRock(a)) ||
  (isScissors(b) && isPaper(a));

const isRock = (a) => a === 'A' || a === 'X';
const isPaper = (a) => a === 'B' || a === 'Y';
const isScissors = (a) => a === 'C' || a === 'Z';

module.exports = { findMyTotalScore, findRoundScore };
