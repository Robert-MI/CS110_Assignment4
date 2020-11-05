const matUtil = require('./utils.js');

let mat1 = [
    [1,2,3],
    [3,4,5],
    [5,6,7]]
let mat2 = [
    [5,6,7],   
    [7,8,9],
    [1,2,3]]
matUtil.Matmultiple(mat1, mat2);
matUtil.Matsum(mat1, mat2);
matUtil.SumOfEachRow(mat1);