module.exports.mostElfCalories = (input) => {
  return Math.max(...getElvesDailyCalories(input));
};

module.exports.top3ElvesCaloriesTotal = (input) => {
  return sum(
    getElvesDailyCalories(input)
      .sort((a, b) => b - a)
      .slice(0, 3)
  );
};

const getElvesDailyCalories = (input) =>
  input
    .split('\n\n')
    .map((elf) => sum(elf.split('\n').map((a) => parseInt(a))));

const sum = (elements) => elements.reduce((a, b) => a + b);
