function validPath(n, edges, source, destination) {
  let graph = {}; // for adjacency list
  let visited = new Set();

   for (let [v,e] of edges) {
    graph[v] ? graph[v]?.push(e) : graph[v] =  [e]
    graph[e] ? graph[e]?.push(v) : graph[e] =  [v]
  }

  function dfs(v){
    visited.add(v);
    let neighbors = graph[v];
    if(neighbors && neighbors.length > 0){
      for (let node of neighbors){
        if(!visited.has(node)) dfs(node); 
      }
    }
  }
  dfs(source);
  return visited.has(destination)
}

let n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
console.log(validPath(n, edges, source, destination))