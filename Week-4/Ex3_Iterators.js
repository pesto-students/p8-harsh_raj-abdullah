const Fib = (n) => {
  return {
    [Symbol.iterator]() {
      let i = 1;
      let a = 0;
      let b = 0;
      return {
        next() {
          // const temp = b;
          // b = a + b || 1 ;
          // a = temp;
          [a, b] = [b, a + b || 1];
          return { value: a, done: i++ > n };
        },
      };
    },
  };
};

console.log("The Fibonacci Series is");
for (const key of Fib(7)) {
  console.log(key);
}
