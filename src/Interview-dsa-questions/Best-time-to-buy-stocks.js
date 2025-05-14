const prompt = require("prompt-sync")();

// You are given an array prices where prices[i] is the price of a given stock on the ith day
// You wan to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit, if you cannot achieve any profit, return 0

//Input: prices =[7, 1, 5, 3, 6, 4]=====> Output: 5
//Input: prices =[7, 6, 4, 3, 1]=====> Output: 0

let prices = [7, 1, 5, 3, 6, 4];
const maxProfit = function (prices) {
  let min = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) min = prices[i];
    let profit = prices[i] - min;
    maxProfit = Math.max(profit, maxProfit);
  }
  return maxProfit;
};
console.log(maxProfit(prices));
