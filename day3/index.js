const findSumOfPriorities = (input) =>
  sum(input.split('\n').map(findSharedItem).map(getItemPriority));

const sum = (elements) => elements.reduce((a, b) => a + b);

const findSharedItem = (rucksack) => {
  const firstCompartment = rucksack.slice(0, rucksack.length / 2);
  const secondCompartment = rucksack.slice(rucksack.length / 2);
  return firstCompartment
    .split('')
    .find((item) => secondCompartment.includes(item));
};

const getItemPriority = (item) =>
  item.charCodeAt(0) - (item === item.toUpperCase() ? 38 : 96);

module.exports = { findSharedItem, getItemPriority, findSumOfPriorities };
