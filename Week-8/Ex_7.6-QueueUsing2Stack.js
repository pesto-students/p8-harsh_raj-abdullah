// Implement a Queue using 2 stacks s1 and s2 . A Query Q is of 2 Types 
// (i) 1 x (a query of this type means pushing 'x' into the queue) 
// (ii) 2 (a query of this type means to pop element from queue and print the popped element)

class Queue {
  constructor(){
   this.s1 = [];
   this.s2 = [];
   this.size = 0;
  }
  enqueue(element){
    this.s1.push(element);
    this.size++;
  }
  dequeue(){
    if(this.size === 0) return 'Queue is empty';
    this.size--;
    if(this.s2.length > 0) return this.s2.pop();
    while(this.s1.length > 0) this.s2.push(this.s1.pop());
    return this.s2.pop()
  }
}

function queryOnQueue (arr) {
  const queue = new Queue();
  let idx = 0;
  while(idx < arr.length) {
    if(arr[idx] === 1){
      queue.enqueue(arr[idx+1]);
      idx += 2;
    }
    else if(arr[idx] === 2){
      console.log(queue.dequeue())
      idx++;
    }
  }
}

queryOnQueue([1, 2, 1, 3, 2, 1, 4, 2]) // 2, 3 (dequeued elements)

