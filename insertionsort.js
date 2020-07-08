function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        let j = i-1;
        let temp= arr[i]; 
        while (j>=0 && arr[j] > temp){
            arr[j+1] = arr[j]
            console.log("whileloop started")
            j--;
            
            }
            arr[j+1] = temp
            
        }
        return arr;
    }

console.log(insertionSort([1, 5, 2, 8, 3, 4]));