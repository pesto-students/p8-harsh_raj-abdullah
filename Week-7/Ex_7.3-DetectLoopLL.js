// Detect loop in a linked list using Floyd's Tortoise and Hare Algorithm

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function hasCycleLL(head){
  let hare = head;
  let tortoise = head;
  let isFound = false;
  while(hare != null && hare.next != null){
    tortoise = tortoise.next;
    hare = hare.next.next;
    if(hare==tortoise){
      isFound = true;
      break;
    } 
  }

  // finding the where cycle begins
  if(isFound){
    let pointer = head;
    while(pointer != tortoise){
      pointer = pointer.next;
      tortoise = tortoise.next;
    }
    console.log('Cycle found at node : ' + pointer.val);
  }


  return isFound; 
}

const head = new Node(1, new Node(2, new Node(3, new Node(4))));
head.next.next.next = head.next; // create a cycle from node 4 to node 2

console.log(hasCycleLL(head))