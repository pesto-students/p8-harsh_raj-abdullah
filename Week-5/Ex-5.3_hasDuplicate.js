const hasDuplicate = arr => new Set(arr).size !== arr.length; // return boolean value

const array = [1,5,-1,4,-2,-1] ;
console.log(hasDuplicate(array))