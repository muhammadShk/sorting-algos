function bubble_sort(array){
    do {
        var swapit = false 
        for(var i= 0; i<array.length-1; i++){
            if(array[i]>array[i+1]){
            var temp = array[i]
            array[i] = array[i+1] 
            array[i+1] = temp
            swapit = true
            }
        }
        }while(swapit)
        return array
    }
