class Node {
  constructor(value,left,right) {
    this.value = value 
    this.left = left ?? null 
    this.right = right ?? null
  }
}

function levelOrderTraversalOfBT(root){
  if(root == null) return [];
  const queue = [root]
  const result = [];
  while(queue.length > 0){
    result.push(queue.map(node => node.value));
    let len = queue.length;
    while(len > 0){
      const node = queue.shift();
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
      len --;
    }
  }
  return result;
}

//    5
//   / \
//  1   7
//     / \
//    6   8

const bst = new Node(5,new Node(1),new Node(7,new Node(6),new Node(8)))

console.log(levelOrderTraversalOfBT(bst));
