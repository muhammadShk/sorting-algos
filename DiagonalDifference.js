function diagonalDifference(twoDArray) {
    let sum1 = 0
    let sum2 = 0
    for(let i = 0; i < twoDArray.length; i++) {
    sum1 += twoDArray[i][twoDArray[i].length-i-1]
    sum2 += twoDArray[i][i]
    //console.log(sum1)
    //console.log(sum2)
    }
    return Math.abs(sum1-sum2)
    }
    
    Math.abs(5 - 10); // returns 5
    
    console.log(diagonalDifference([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
    ]));
    
    console.log(diagonalDifference([
    [1, 2, 3,10],
    [4, 5, 6,10],
    [7, 8, 9,10],
    [7, 8, 9,10]
    ]));
    // should log 0: (1 + 5 + 9) - (3 + 5 + 7)