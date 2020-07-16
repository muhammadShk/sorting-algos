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