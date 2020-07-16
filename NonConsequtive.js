/**
 * takes in an array of integers
 * returns an ARRAY of OBJECTS
 * with each one having key/value pairs: the index and the number
 * the array should have ONLY non-consecutive values
 * the first element of the array is NEVER considered non-consecutive
 */

function allNonConsecutive(arr) {
    let result = [];
    let prevVal = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (prevVal + 1 != arr[i]) {
            result.push({ i: i, n: arr[i] });
        }
        prevVal = arr[i];
    }
    return result;
}
  
  console.log(allNonConsecutive([1, 2, 3, 4, 6, 7, 8, 10]));
  // should log [{i: 4, n: 6}, {i: 7, n: 10}] 6 and 10 are the only non-consecutives
  
  console.log(allNonConsecutive([2, 3, 4, 7, 8, 12]));
  // should log [{i: 3, n: 7}, {i: 5, n: 12}] 7 and 12 are the only non-consecutives
  
  
  /**
   * takes in an array of integers
   * and a given sum
   * returns an array of ALL the consecutive integers
   * that make the sum
   * BONUS: what if there are zeros in the input array?
   */
  
  function findConsecutiveSums(arr, sum) {
    let result = [];
    for (let i = 0; i < arr.length - 1; i++) {
        let j = i;
        let tempArr = [arr[j]];
        let tempSum = arr[j];
        while (tempSum < sum) {
            j++;
            tempSum += arr[j];
            if (tempSum > sum) {
                break;
            }
            tempArr.push(arr[j]);
            // console.log(j, tempSum, tempArr);
        }
        if (tempSum == sum) {
            // console.log('we pushed to result');
            result.push(tempArr);
        }
    }
    return result;
}

console.log(findConsecutiveSums([2, 5, 3, 6, 7, 23, 12], 16));
// should log [
//   [2, 5, 3, 6],
//   [3, 6, 7]
// ]

  