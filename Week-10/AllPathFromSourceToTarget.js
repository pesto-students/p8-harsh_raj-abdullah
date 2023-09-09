// using dfs
// Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, 
// find all possible paths from node 0 to node n - 1 and return them in any order.

var allPathsSourceTarget = function(graph) {
  const result = [];
  const path = [];
  let target = graph.length - 1;

  function dfs(position){
    path.push(position);

    if(position === target){
      result.push([...path]);
    }

    const neighbors = graph[position];
    for(let node of neighbors){
      dfs(node)
    }
    path.pop();
  }

  dfs(0)
  return result;
};

let graph = [[1,2],[3],[3],[]]

console.log(allPathsSourceTarget(graph));