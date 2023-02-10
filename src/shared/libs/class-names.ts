type Mods = Record<string, boolean | string>;

export const classNames = (classNameList: string[], mods: Mods = {}): string => {
  return [
    ...classNameList.filter(Boolean),
    Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className, _]) => className),
  ].join(' ');
};
