// using the hash map
// if k = 0, then check count value of hash map > 1 
function findPairs(array, k){
  const hashMap = {};
  array.forEach(ele => hashMap[ele] = ++hashMap[ele] || 1); // store count into hash map
  let countPairs = 0; 
  for(let key in hashMap) {
    key = Number(key); // as hasMap stored key as string 
    if((k == 0 && hashMap[key] > 1) || (k != 0 && hashMap[key + k])){ 
      ++countPairs;
      return countPairs;
    }
  }
  return countPairs;
}

console.log(findPairs([5, 3, 10, 3, 2, 50, 80], 78))