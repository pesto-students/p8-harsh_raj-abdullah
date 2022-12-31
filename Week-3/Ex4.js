function createStack() {
  const items = [];
  return {
    push(item) {
      return items.push(item);
    },
    pop() {
      return items.pop();
    }
  };
}
const stack = createStack();
stack.push(10);
stack.push(15);
console.log(stack.pop()); // => 15
console.log(stack.items); // => undefined