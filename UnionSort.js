function unionSortedArrays(arr1, arr2) {
    let i = 0;
    let j = 0;
    const union = [];
    while(i < arr1.length && j < arr2.length){
      if(arr1[i] === arr2[j]){
        union.push(arr1[i]);
        i++;
        j++;
      }
      else if(arr1[i]<arr2[j]){
        union.push(arr1[i]);
        i++;
      }
      else{
        union.push(arr2[j]);
        j++;
      }
    }
    while(i < arr1.length){
        union.push(arr1[i]);
        i++
      }
    while(j < arr2.length){
    union.push(arr2[j]);
    j++;
    }
    return union;
}

console.log(unionSortedArrays([1, 2, 2], [1 ,2, 2, 3]));
// should log [1, 2, 2, 3, 3]
// console.log(unionSortedArrays([1, 2], [3, 4]));
// should log [1, 2, 3, 4]


function unionSortedArraysDedupe(arr1, arr2) {
    let i = 0;
    let j = 0;
    const union = [];
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] === arr2[j]) {
        if(arr1[i] !== union[union.length-1]){
          union.push(arr1[i]);
        }
        i++;
        j++;
      }
      else if (arr1[i] < arr2[j]) {
        if(arr1[i] !== union[union.length-1]){
          union.push(arr1[i]);
        }
        i++;
      } else {
        if(arr2[j] !== union[union.length-1]){
          union.push(arr2[j]);
        }
        j++;
      }
    }
    while (i < arr1.length) {
      if(arr1[i] !== union[union.length-1]){
        union.push(arr1[i]);
      }
      i++;
    }
    while (j < arr2.length) {
      if(arr2[j] !== union[union.length-1]){
        union.push(arr2[j]);
      }
      j++;
    }
    return union;
}