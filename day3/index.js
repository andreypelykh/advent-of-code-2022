const findSumOfPriorities = (input) =>
  sum(input.split('\n').map(findSharedItem).map(getItemPriority));

const findSumOfGroupPriorities = (input) =>
  sum(
    convertToGroups(input.split('\n')).map(findGroupItem).map(getItemPriority)
  );

const sum = (elements) => elements.reduce((a, b) => a + b);

const findSharedItem = (rucksack) => {
  const firstCompartment = rucksack.slice(0, rucksack.length / 2);
  const secondCompartment = rucksack.slice(rucksack.length / 2);
  return firstCompartment
    .split('')
    .find((item) => secondCompartment.includes(item));
};

const convertToGroups = (rucksacks) => {
  const result = [];

  for (let i = 0; i < rucksacks.length; i += 3) {
    result.push(rucksacks.slice(i, i + 3));
  }

  return result;
};

const findGroupItem = (groupRucksacks) => {
  return groupRucksacks[0]
    .split('')
    .find(
      (item) =>
        groupRucksacks[1].includes(item) && groupRucksacks[2].includes(item)
    );
};

const getItemPriority = (item) =>
  item.charCodeAt(0) - (item === item.toUpperCase() ? 38 : 96);

module.exports = {
  findSharedItem,
  getItemPriority,
  findSumOfPriorities,
  findSumOfGroupPriorities,
};
