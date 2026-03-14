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


function columnSearch(arr, target, pointer, row) {

    if (arr[row][pointer] > target ) {

        return columnSearch(arr, target, pointer, row);

    }
    else if (arr[row][pointer] < target ) {
        return columnSearch(arr, target, pointer, row);
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
    else if (arr[pointer][0] < target && arr[pointer][arr[0].length -1 ] < target) {
        lowBound = pointer + 1;

        pointer = Math.floor((highBound + lowBound )/2);
        return rowSearch(arr, target, pointer, lowBound, highBound);
    }
    else {
        return pointer;
    }


    }
    //let offset = 0;
    var pointer = Math.floor((matrix.length -1 ) / 2);
    var row = rowSearch(matrix, target, pointer, 0, matrix.length - 1);
/*column part work in progress
We need to find correct row regardless of intention
*/
   // var column = columnSearch(matrix, target, pA, row);




    return row;
};


console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 60))