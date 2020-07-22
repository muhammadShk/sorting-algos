function getMaxServings(recipe, available) {
    // your code here
    let min = Infinity;
    for(let key in recipe){
        let temp = available.hasOwnProperty(key) ? available[key]/recipe[key] : 0;
        if(temp < min) min = temp;
    }
    return min;
}