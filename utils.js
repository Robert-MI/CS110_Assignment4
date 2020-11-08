module.exports = {
   Matmultiple,
   Matsum,
   SumOfEachRow
}
function Matmultiple(mat1, mat2) {
    if(mat1[0].length !== mat2.length){
      console.log("not defined");  
    }else{
   let result = [];
   for (let row = 0; row < mat1.length; row++) {
       result[row] = [];
       for (let col2 = 0; col2 < mat2[0].length; col2++) {
           let sum = 0;
           for (let col_row = 0; col_row < mat1[0].length; col_row++) {
               sum += mat1[row][col_row] * mat2[col_row][col2];
           }
           result[row].push(sum);
       }
   }
   return printAsMatrix(result);
  }
}
function printAsMatrix(matrix){
       for(let i = 0; i < matrix.length; ++i){
         console.log(matrix[i]);
       }
}
function Matsum(m1, m2){
   if(m1.length !== m2.length || m1[0].lenght !== m2[0].lenght){
        console.log("not defined");
    }else{
   let msum = [];
    for(let r = 0; r < m1.length; r++){
       msum[r] = [];
       let gumar = 0;
        for(let c =0;c < m1[0].length; c++){
          gumar = (m1[r][c] + m2[r][c])
          msum[r][c] = gumar;
        }
    }
    return printAsMatrix(msum);
}}
function SumOfEachRow(matrix){ 
       let result = [];
       for(let row=0; row < matrix.length; row++){
           result.push(SumOfArray(matrix[row]));
   } 
   console.log(result);;
}
function SumOfArray(arr){
   let sum = 0;
       for(let num=0;num<arr.length;num++){
         sum +=arr[num];
       }
   return sum;
   }

