/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman from './convertBytesToHuman';

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman('string')).toBe(false);
  expect(convertBytesToHuman(-1)).toBe(false);
  expect(convertBytesToHuman("hfh")).toBe(false);
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(0)).toBe('0 B')
  expect(convertBytesToHuman(1024)).toBe('1 KB')
  expect(convertBytesToHuman(1025)).toBe('1.00 KB')
  expect(convertBytesToHuman(21)).toBe('21 B')
  expect(convertBytesToHuman(9999999999999999999999)).toBe('8.47 ...')
  // ...
});
test('Возвращает false для Некорректных числовых значений', () => {
  expect(convertBytesToHuman(-1024)).toBe(false);
  expect(convertBytesToHuman(-1)).toBe(false);
});

// другая группа проверок
