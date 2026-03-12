/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {

var pA = matrix[(matrix.length - 1) / 2];


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

    if (arr[pointer] > target) {
        return rowSearch(arr, target, pointer);
    }
    else if (arr[pointer] < target) {
        return rowSearch(arr, target, pointer);
    }
    else {
        return matrix[pointer][pointer];
    }


    }

    var row = rowSearch(matrix, target, pA);

    var column = columnSearch(matrix, target, pA, row);




    return true;
};


console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3))