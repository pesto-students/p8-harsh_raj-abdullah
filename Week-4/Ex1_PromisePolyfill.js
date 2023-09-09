class MyPromise {
  resolveData = null;
  rejectData = null;

  onFulfilled=null;
  onReject=null;

  isFulfilled=false;
  isReject=false;

  constructor(executor) {
    const resolve = (value) => {
      this.resolveData = value;
      this.isFulfilled = true;
      if(this.onFulfilled){
        this.onFulfilled(this.resolveData);
      }
    }
    
    const reject = (value) => {
      this.rejectData = value;
      this.isReject = true;
      if(this.onReject){
        this.onReject(this.rejectData);
      }
    }
    executor(resolve, reject)
  }

  then(fn){
    this.onFulfilled = fn;
    if(this.isFulfilled){
      this.onFulfilled(this.resolveData);
    }
    return this;
  }

  catch(fn){
    this.onReject= fn;
    if(this.isReject){
      this.onReject(this.rejectData);
    }
    return this;
  }
}

function getNumber(){
  return Math.round(Math.random() * 1000)
}

const result = new MyPromise((resolve, reject) => {
  // setTimeout(()=>{
    const number = getNumber();
    if( number % 5 === 0) {
      reject('You got a rejection! 🙁')
    }else{
      resolve('Promise is resolved! 🙂')
    }
  // },1000)
})
  .then(data=> console.log(data))
  .catch(err=> console.log(err))
