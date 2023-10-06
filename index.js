function hasTargetSum(array, target) {
  // Write your algorithm here
  const foundNumbers = new Set();

  for(const number of array){
    const numberNeeded = target - number;
    if(foundNumbers.has(numberNeeded)){
      return true
    }
    foundNumbers.add(number);
    }
   return false;
}


hasTargetSum([3, 8, 12, 4, 11, 7], 10);
hasTargetSum([22, 19, 4, 6, 30], 25);
hasTargetSum([1, 2, 5], 4);
hasTargetSum([-7, 10, 4, 8], 3);
hasTargetSum([1, 2, 3, 4], 5);
hasTargetSum([2, 2, 3, 3], 4);
hasTargetSum([4], 5);

/* 
  Write the Big O time complexity of your function here
  O(n)
  
*/

/* 
  Add your pseudocode here
  1.Start
  2.define constant foundnumbers
  3.Iterate over the array
  4. Calculate numberneeded
  5.Check whether number numberneeded is in the foundnumbers
  6.Return true if step 5 is true
  7.Else return false
  8.Call the function
  9.End 
*/

/*
  Add written explanation of your solution here
 1.We start by creating an empty Set called foundNumbers. 
 2.we use a for...of loop to iterate through each number in the array.
 3.Calculate the numberNeeded by subtracting the current number from the target. 
 4.Check whether the foundNumbers set contains the numberNeeded 
 5.If the numberNeeded is not found, we add the current number to the foundNumbers. 
 This records that we have seen this number while iterating through the array.
 6.After completing the loop without finding a pair that adds up to the target, we return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>",hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");

  console.log("Expecting: true");
  console.log("=>",hasTargetSum([1, 2, 3, 4], 5));

  console.log("Expecting: true");
  console.log("=>",hasTargetSum([2, 2, 3, 3], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>",hasTargetSum([4], 5));

  console.log("");
}

module.exports = hasTargetSum;
