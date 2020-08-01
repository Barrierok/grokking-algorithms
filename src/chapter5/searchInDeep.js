const isNeeded = (name, searchedName) => name === searchedName;

export const searchInDeep = (graph, searchedName) => {
  const queue = graph.ilya;
  const checked = [];

  while (queue.length > 0) {
    const name = queue.shift();

    if (!checked.includes(name)) {
      if (isNeeded(name, searchedName)) {
        return true;
      }
      queue.push(...graph[name]);
      checked.push(name);
    }
  }
  return false;
};
