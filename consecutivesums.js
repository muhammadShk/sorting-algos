function findConsecutiveSums(arr, sum) {
    const output = [];
    for(let i=0; i<arr.length; i++){
      let current = arr[i];
      let j=i+1;
      while(current <= sum){
        if(current === sum){
          output.push(arr.slice(i,j));
        }
        current+=arr[j];
        j++;
      }
    }
    return output;
  }
console.log(findConsecutiveSums([2, 5, 3, 6, 7, 23, 12], 16));
// should log [
//   [2, 5, 3, 6],
//   [3, 6, 7]
// ]