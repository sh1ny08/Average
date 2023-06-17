function findaverage(array) {
    let average = 0;
    for (let i = 0; i < array.length; i++) {
        let currentNum = array[i]
        average += currentNum;
    }
    average = average / array.length
    return average;
}

findaverage([2, 8, 14]);