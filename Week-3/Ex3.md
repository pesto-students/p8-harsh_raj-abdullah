### 1.What is the output of the below problem and why
> function createIncrement() {
  let count=0;
  function increment() {
    count++;
  }
  let message=`Count is${count}`;
  function log() {
    console.log(message);
  }
  return [increment,log];
}
const[increment,log] = createIncrement();
increment();
increment();
increment();
log();// What is logged?


### Ans : -  
> 'log' function will print : Count is 0 

because when 'createIncrement' fn is call then 'message' variable will be contained `count is 0 as string`. Afterthat 'increment' function is called 3 times but 'message' variable is not updated. That's why 'log' fn return that value.