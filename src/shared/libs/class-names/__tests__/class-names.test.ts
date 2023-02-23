import { classNames } from '../class-names';

describe('classNames', () => {
  test('with one class', () => {
    expect(classNames('class-name')).toBe('class-name');
    expect(classNames(['class-name'])).toBe('class-name');
    expect(classNames({ 'class-name': true })).toBe('class-name');
  });
  test('with class array', () => {
    expect(classNames('default', ['class-name', 'another-class'])).toBe(
      'default class-name another-class',
    );
  });
  test('with class mods', () => {
    expect(classNames('default', { 'class-name': true, 'another-class': false })).toBe(
      'default class-name',
    );
  });
  test('with class array and mods', () => {
    expect(
      classNames(
        'default',
        ['one', 'two'],
        { three: true, four: false, five: undefined, six: true },
        'last',
      ),
    ).toBe('default one two three six last');
  });
});
