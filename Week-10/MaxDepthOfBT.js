class Node {
  constructor(value,left,right) {
    this.value = value 
    this.left = left ?? null 
    this.right = right ?? null
  }
}

function maxDepthBT(root){
  if(root == null) return 0;

  return Math.max(maxDepthBT(root.left), maxDepthBT(root.right)) + 1;
}

// 3,9,20,null,null,15,7
const bt = new Node(3,new Node(9),new Node(20,new Node(15),new Node(7)))

console.log(maxDepthBT(bt))
