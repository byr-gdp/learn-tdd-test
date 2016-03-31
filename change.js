function getChange (totalPayable, cashPaid) {
  var coins = [200, 100, 50, 20, 10, 5, 2, 1];
  var change = cashPaid - totalPayable;
  var result = [];
  var left = change;
  var index = 0;
  while (left) {
    if (left >= coins[index]) {
      result.push(coins[index]);
      left -= coins[index];
    } else {
      index++;
    }
  }
  if (cashPaid === 300) {
    console.log('yes');
  }
  return result;
}

/* The code block below ONLY Applies to Node.js - This Demonstrates
   re-useability of JS code in both Back-end and Front-end! #isomorphic */
/* istanbul ignore next */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = getChange;  // allows CommonJS/Node.js require()
}