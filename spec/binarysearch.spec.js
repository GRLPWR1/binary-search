const binarySearch = require('../index')

describe("binarySearch()", function() {
  test('Функция должна возвращать индекс элемента', () => {
    expect(binarySearch([0, 1], 1)).toBe(1);
    expect(binarySearch(['A', 'B', 'C', 'D', 'E', 'F'], 'F')).toBe(5);
  })
  
  test('Функция должна быть определена', () => {
    expect(binarySearch).toBeDefined();
    expect(binarySearch).not.toBeUndefined();
  })
  
  test('Функция должна возвращать -1, если элемента не существует в данном массиве', () => {
    expect(binarySearch([0, 1], 2)).toBe(-1);
    expect(binarySearch(['A', 'B', 'C'], 'F')).toBe(-1);
  })
  });