export const removePreCharacters = <T extends String>(item: T[]): string =>
  item.map((item: T) => item.substring(item.indexOf(":") + 1))[0];

export const removePostCharacters = <T extends String>(item: T[]): string[] =>
  item.map((item: T) => item.split(":")[0]);

type MappedTypes<T> = {
  [P: string]: T;
};
type ReturnType<T> = MappedTypes<T>;

export const reduceCommands = <T extends String>(commands: T[]): ReturnType<T> => {
  return commands.reduce((prev: ReturnType<T | any>, curr: T) => {
    let [key, value] = curr.split(":");
    prev[key] = value;
    return prev;
  }, {});
};
