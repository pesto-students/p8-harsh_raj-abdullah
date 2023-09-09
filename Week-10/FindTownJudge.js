var findJudge = function(n, trust) {
  const result = new Array(n+1).fill(0);
  for(let [v, u] of trust){
    result[v] -= 1;
    result[u] += 1; 
  }
  return result.indexOf(n-1,1);
};

let n = 3;
let trust = [[1,3],[2,3]]

console.log(findJudge(n, trust))