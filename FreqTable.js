function kMostFrequent(arr, k) {
    var freqTable = {};
    let newArr=[];
    for(var i =0;i<arr.length;i++){
        if(freqTable.hasOwnProperty(arr[i])){
            freqTable[arr[i]]++;
        }
        else{
            freqTable[arr[i]]=1;
        }
    }
    while(newArr.length<k){
      let max=0;
      for(var i in freqTable){
            if(freqTable[i]>freqTable[max]){
              max=i;
            }
      }
      newArr.push(parseInt(max));
      freqTable[max]=0;
    }
    return newArr;
  }
  
  console.log(kMostFrequent([1, 1, 1, 2, 2, 3], 2));
  // should log [1, 2] or [2, 1]
  
  console.log(kMostFrequent([0, 0, 0, 2, 2, 3], 1));
  // should log [0]
  
  console.log(kMostFrequent([1, 3, 2, 2, 1, 3], 3));
  // should log [1, 2, 3] in any order