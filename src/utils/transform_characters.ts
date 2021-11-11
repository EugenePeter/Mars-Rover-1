export const removePreCharacters = (item: any) => {
  return item.map((item: any) => item.substring(item.indexOf(":") + 1))[0];
};

export const removePostCharacters = (item: any) => {
  return item.map((item: any) => item.split(":")[0]);
};

export const reduceCommands = (commands: any) => {
  return commands.reduce((prev: any, curr: any) => {
    let [key, value] = curr.split(":");
    prev[key] = value;
    return prev;
  }, {});
};
