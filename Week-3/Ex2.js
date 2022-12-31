// Create 3 simple functions where call, bind and apply are used. 

function normal (a, b) {
  return `This is a ${this.name} function with ${a} and ${b}`
};

const bindFn = normal.bind({name: 'bind'}, 'params1', 'params2') // return a function
console.log(bindFn())

const callFn = normal.call({name: 'call'}, 'params1', 'params2') // calling function 
console.log(callFn)

const applyFn = normal.apply({name: 'call'}, ['params1', 'params2']) // calling function
console.log(applyFn)