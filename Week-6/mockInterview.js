function outer (){
  let a = 10;
  function inner (){
    console.log(a);
  }
  return inner;
}

// outer()();

function func2 (){
  let b = 15;
  console.log(this.b,'ol', ...arguments);
}
let func = () => {
 let b=20;
 console.log(this.b, 'ol2', arguments);
}

func(1,2,3,{er:34})

const obj = {
  name : 'abdul',
}

function printName(){
  return  `My name is ${this.name}`
}

const func4 = printName.bind(obj);
func4();

let myPromise = new Promise((resolve, reject)=>{
    setTimeout(()=> resolve(10),1000)
})
