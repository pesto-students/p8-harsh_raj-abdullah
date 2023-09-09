// Counting Sort Approaches where k=3
// array should contain only 0's, 1's and 2's 

function sortArray(arr){

  const countArray = new Array(3) // as k=3
  arr.forEach(num => countArray[num] = ++countArray[num] || 1); // NaN is falsy
  
  arr.length = 0 // clear array
  countArray.forEach((count, idx) => {
    for(let i = 0; i < count; i++) arr.push(idx)
  })

  return arr;
}

const arr = [0, 2, 1, 2, 0]

console.log(sortArray(arr))