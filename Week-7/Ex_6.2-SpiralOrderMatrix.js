function SpiralOrderMatrix(arr){
  const result = [];
  let [top, bottom, left, right] = [0, arr.length - 1, 0, arr[0]?.length - 1];
  let direction = 0 
  // 0 => left to right, 1 => top to bottom, 2 => right to left, 3 => bottom to top

  while( top <= bottom && left <= right){
    if( direction === 0 ){
      for( let i = left; i <= right; i++ ) result.push( arr[top][i] );
      top ++;
    }
    else if( direction === 1 ){
      for(let i = top; i <= bottom; i++ ) result.push( arr[i][right] );
      right --;
    }
    else if( direction === 2 ){
      for(let i = right; i >= left; i-- ) result.push( arr[bottom][i] );
      bottom --;
    }
    else if( direction === 3 ){
      for(let i = bottom; i >= top; i--) result.push( arr[i][left] );
      left ++;
    }
    direction = (direction + 1) % 4;
  }  

  return result;
}

const array = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ];

console.log(SpiralOrderMatrix(array));
