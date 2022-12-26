const {
  findSharedItem,
  getItemPriority,
  findSumOfPriorities,
} = require('./index');
const input = require('fs').readFileSync('day3/input.txt').toString();

test('findSharedItem', () => {
  expect(findSharedItem('vJrwpWtwJgWrhcsFMMfFFhFp')).toBe('p');
});

test('getItemPriority', () => {
  expect(getItemPriority('a')).toBe(1);
  expect(getItemPriority('B')).toBe(28);
});

test('findSumOfPriorities', () => {
  expect(findSumOfPriorities(input)).toBe(157);
});
