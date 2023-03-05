// using stack => [1 3 2 4] -> [3,4,2,-1]
// push item when stack top is less than or equal to array item

function nextGreaterElement(arr){
  const stack=[];
  for(let i = arr.length-1; i >=0; i--){
    while(stack.length > 0 && stack[stack.length-1] <= arr[i]){
      stack.pop();
    }
    const currentEle = arr[i];
    arr[i] = stack[stack.length-1] ?? -1;
    stack.push(currentEle);
  }
  return arr;
}

const arr = [1, 3, 2, 4]

console.log(nextGreaterElement(arr))