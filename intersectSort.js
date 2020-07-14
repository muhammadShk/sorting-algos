function intersectSortedArrays(arr1, arr2) {
    let arr3 = [];
    let i=0;
    for (var i = 0; i < arr1.length; i++){
        for (var j = 0; j < arr2.length; j++){
        if(arr1[i] === arr2[j]){
            arr3.push(arr1[i]);
            break;
        }
    }
    }
    return arr3;
  }
  
  console.log(intersectSortedArrays([1, 2, 2, 3], [2, 2, 4]));
  // should log [2, 2]
  
  
  function intersectSortedArraysDedupe(arr1, arr2) {
    const result = intersectSortedArrays(arr1,arr2);
    const unique= [];
    
    for(var i=0; i<result.length; i++){
        if(!unique.includes(result[i])){
          unique.push(result[i]);
        }
    }
    return unique;
}