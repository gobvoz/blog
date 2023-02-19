type ClassType = string | string[] | Record<string, boolean>;

export const classNames = (...classes: Array<ClassType>): string => {
  let classArray: string[] = [];

  classes.forEach(item => {
    if (typeof item === 'string' && item !== '') classArray.push(item);
    if (Array.isArray(item)) item.filter(Boolean).map(itemOfArray => classArray.push(itemOfArray));
    if (typeof item === 'object')
      Object.entries(item)
        .filter(([_, value]) => Boolean(value))
        .forEach(([className, _]) => classArray.push(className));
  });
  return classArray.join(' ');
};
