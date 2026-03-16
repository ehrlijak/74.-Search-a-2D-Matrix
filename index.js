/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {



function topHalf(matrix) {
    let half = Math.floor(matrix.length / 2);
    return matrix.slice(0, half);
}

function lowHalf(matrix) {
    let half = Math.floor(matrix.length / 2);
    return matrix.slice(half);
    }


function columnSearch(arr, target, pointer, row, lowBound, highBound) {


    if(lowBound >= highBound) {
        return pointer;
    }
    if (arr[row][pointer] > target && arr[row][pointer] > target) {

        highBound = pointer - 1;
        pointer = Math.floor((highBound + lowBound )/2);
        return columnSearch(arr, target, pointer, row, lowBound, highBound);
    }
    else if (arr[row][pointer] < target) {
        lowBound = pointer + 1;

        pointer = Math.floor((highBound + lowBound )/2);
        return columnSearch(arr, target, pointer, row, lowBound, highBound);
    }
    else {
        return pointer;
    }



}


function rowSearch(arr, target, pointer, lowBound, highBound) {



    if(lowBound >= highBound) {
        return pointer;
    }
    if (arr[pointer][0] > target && arr[pointer][0] > target) {

        highBound = pointer - 1;
        pointer = Math.floor((highBound + lowBound )/2);
        return rowSearch(arr, target, pointer, lowBound, highBound);
    }
    else if (arr[pointer][0] < target */&& arr[pointer][arr[0].length -1 ] < target*/) {
        lowBound = pointer + 1;

        pointer = Math.floor((highBound + lowBound )/2);
        return rowSearch(arr, target, pointer, lowBound, highBound);
    }
    else if (arr[pointer][0] === target) {
        return pointer;
    }
    else if (arr[pointer][1] === target) {
        return pointer;
    }
    else {
        return false
    }



}

    var pointer = Math.floor((matrix.length -1 ) / 2);
    var row = rowSearch(matrix, target, pointer, 0, matrix.length - 1);
    if(row === false || row < 0) {
        return false;
    }
    pointer = Math.floor((matrix[0].length -1 ) / 2);
    var column = columnSearch(matrix, target, pointer, row, 0, matrix[0].length - 1);

     if(matrix[row][column] === target) {
         return true;
     }
     else {
         return false;
     }


    return `Row is : ${row} \n Column: ${column}\n`;
};


console.log(searchMatrix([[1],[3]], target = 3))