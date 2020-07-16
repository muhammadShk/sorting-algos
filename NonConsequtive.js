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
  
  

  

  