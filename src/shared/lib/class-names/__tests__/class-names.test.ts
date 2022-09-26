import { classNames } from '../class-names';

describe('classNames', () => {
  test('with one class', () => {
    expect(classNames(['class-name'])).toBe('class-name');
  });
  test('with class array', () => {
    expect(classNames(['class-name', 'another-class'])).toBe('class-name another-class');
  });
  test('with class mods', () => {
    expect(classNames(['default'], { 'class-name': true, 'another-class': false })).toBe(
      'default class-name',
    );
  });
  test('with class array and mods', () => {
    expect(
      classNames(['one', 'two'], { three: true, for: false, five: undefined, six: true }),
    ).toBe('one two three six');
  });
});
