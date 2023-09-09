// try to sell every day and buy min value so far
function maxProfit(array){
  let maxProfit = 0;
  let minSoFar  = array[0]
  for(let price of array){
    const profit = price - minSoFar;
    maxProfit = Math.max(maxProfit, profit);
    minSoFar = Math.min(minSoFar, price);
  }
  return maxProfit;
}

const stockPrices = [7,1,5,3,6,4]

console.log(maxProfit(stockPrices));