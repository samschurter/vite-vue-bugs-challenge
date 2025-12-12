/*
# Stock Market Prices

Think out loud, ask clarifying questions, pseudocode is fine, I can give hints, we care more about reasoning than syntax.

## Problem

We've recorded the prices of a single stock over a few days. We'd like to know how much profit per share we could have made buying and selling the stock over that period of time. For example, if we recorded prices of:

| Day   | 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   |
|-------|-----|-----|-----|-----|-----|-----|-----|-----|
| Price | $40 | $20 | $50 | $90 | $70 | $80 | $10 | $60 |

The greatest possible profit per share is $70, from buying at $20 on Day 2 and selling at $90 on Day 4.

Assume that profits are not reinvested, and that we always have enough money on hand to buy at any day's price. Assume we care only about nominal profit (things like time value of money and inflation/deflation are not relevant).

## Challenge

Write a program to solve the problem. Your function should take a single argument, prices, containing an array of prices in chronological order. Your function should return the maximum possible profit per share as a single number. If no profit is possible, return 0.

### Specifications:

- prices is a number[] such that each element n is a reasonably sized, positive number, something between 0 and a million.
- The function returns a number x that is 0 or greater.

Do not worry about efficiency or complexity, focus on correctness first.

Once you've written your function, let's talk about how it scales. How would this work if we had a larger data set, perhaps millions of entries, or if we needed to respond as fast as possible? Don't worry if your solution is not "optimal", the important thing is understanding the efficiency and complexity.
*/

// When you're ready, flip the RUN_TESTS switch below to true to run the tests.
const RUN_TESTS = false;
const prices = [40, 20, 50, 90, 70, 80, 10, 60];


function getMaxProfit(prices) {
  /* implement me */
}

console.log('Answer: ', getMaxProfit(prices)); // Should output `70`

const tests = [
    {
        prices: [40, 20, 50, 90, 70, 80, 10, 60],
        answer: 70,
        note: 'Example test case'
    },
    {
        prices: [45, 24, 35, 31, 40, 38, 11],
        answer: 16,
        note: 'Test case from https://coderbyte.com/algorithm/stock-maximum-profit'
    },
    {
        prices: [],
        answer: 0,
        note: 'No profit can be made with no prices'
    },
    {
        prices: [190],
        answer: 0,
        note: 'No profit can be made from a single price'
    },
    {
        prices: [150, 110, 90, 70, 50, 30, 20],
        answer: 0,
        note: 'No profit can be made from monotonically decreasing prices',
    },
    {
        prices: [10, 50, 100, 120],
        answer: 110,
        note: 'Monotonically increasing prices'
    },
    {
        prices: [0, 100, 0, 200, 0, 400],
        answer: 400,
        note: 'Test with price of 0'
    },
    {
        prices: [10, 10, 10, 20, 20, 20, 50, 50, 10, 10, 40],
        answer: 40,
        note: 'Test with the same price over consecutive days'
    }
]

function test(fn) {
  let numFailed = 0;
  for (const {prices, answer, note} of tests) {
    const result = fn(prices);
    if (result !== answer) {
      console.error(`\n${note}\nPrices: ${prices}\nResult: ${result}\nExpected result: ${answer}`);
      numFailed++;
    }
  }
  if (numFailed === 0) {
    console.log("\nAll tests passed!");
  } else {
    console.log(`\n${numFailed} tests failed.`);
  }
}

if (RUN_TESTS) {
  test(getMaxProfit);
}