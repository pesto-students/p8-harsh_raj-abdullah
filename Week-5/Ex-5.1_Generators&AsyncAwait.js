function doTask1 () {
  return new Promise(function (resolve) {
    setTimeout(()=> resolve('doTask1 is completed!'),1000)
  })
}
function doTask2 () {
  return new Promise(function (resolve) {
    setTimeout(()=> resolve('doTask2 is completed!'),1000)
  })
}
function doTask3 () {
  return new Promise(function (resolve) {
    setTimeout(()=> resolve('doTask3 is completed!'),1000)
  })
}

// GENERATORS function
function* generators(){
  yield doTask1();
  yield doTask2();
  yield doTask3();
}

// GENERATORS call with async/await function
async function callAsyncGEN() {
  const gen = generators()
  for await (let value of gen) {
    console.log(value);
  }
}
callAsyncGEN()