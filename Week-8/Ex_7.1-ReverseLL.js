class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function reverseLinkedList(head){

  let current = head;
  let prev = null;
  
  while(current != null){
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next; 
  }

  head = prev;
  return head;
}

const head = new Node(1, new Node(2, new Node(3, new Node(4))));

console.log(reverseLinkedList(head));
