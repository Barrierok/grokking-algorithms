const findLowestCostNode = (costs, processed) => {
  let lowestCost = Infinity;
  let lowestCostNode = null;

  Object.keys(costs).forEach((node) => {
    const cost = costs[node];
    if (cost < lowestCost && !processed.includes(node)) {
      lowestCost = cost;
      lowestCostNode = node;
    }
  });

  return lowestCostNode;
};

export const dijkstraAlgorithm = (params) => {
  const { graph, costs, parents } = params;
  const processed = [];

  const iter = (node) => {
    if (!node) {
      return costs.fin;
    }

    const cost = costs[node];
    const neighbors = graph[node];

    Object.keys(neighbors).forEach((neighbor) => {
      const newCost = cost + neighbors[neighbor];
      if (costs[neighbor] > newCost) {
        costs[neighbor] = newCost;
        parents[neighbor] = node;
      }
    });

    processed.push(node);

    return iter(findLowestCostNode(costs, processed));
  };

  return iter(findLowestCostNode(costs, processed));
};
