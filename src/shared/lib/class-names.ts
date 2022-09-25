type Mods = Record<string, boolean | string>;

export const classNames = (classNameList: string[] = [], mods: Mods = {}): string => {
  return [
    ...classNameList,
    Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(' ');
};
