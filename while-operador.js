function getSumFirtsNumbers(quantity) { 
    let sum = 0;
    let count = 1;
    // 1 2 3 4 5 6 7 8 9 10
    while(count <= quantity){
        sum = sum + count;
        count = count + 1;
    }
    return sum;
}


