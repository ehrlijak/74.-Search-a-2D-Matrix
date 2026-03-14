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


function rowSearch(arr, target, pointer) {

    var pointer = Math.floor((arr.length - 1) / 2);

    if(arr.length <= 1) {
        return pointer;
    }
    if (arr[pointer][0] > target) {
        arr = topHalf(arr);
        return rowSearch(arr, target, pointer);
    }
    else if (arr[pointer][0] < target /*&& arr[pointer+1][0] > target */) {
        arr = lowHalf(arr);
        return rowSearch(arr, target, pointer);
    }
    else {
        return pointer;
    }


    }

    var row = rowSearch(matrix, target);
/*column part work in progress
We need to find correct row regardless of intention
*/
   // var column = columnSearch(matrix, target, pA, row);




    return row;
};


console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 30))