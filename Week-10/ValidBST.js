class Node {
  constructor(value,left,right) {
    this.value = value 
    this.left = left ?? null 
    this.right = right ?? null
  }
}

let prevNode = null;
function isValidBST(root){
  if(root == null) return true;
  if(!isValidBST(root.left)) return false;
  if(prevNode != null && root.value <= prevNode.value) return false;
  prevNode = root ;
  return isValidBST(root.right);
}

//    5
//   / \
//  1   7
//     / \
//    6   8
const bst = new Node(5,new Node(1),new Node(7,new Node(6),new Node(8)))

console.log(isValidBST(bst));
