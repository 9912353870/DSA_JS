           
let arr = [1,1,2,2,3,4,4,5,6,7,7];
                
//unique elemnets count
let i = 0;
for(let j = 1; j < arr.length; j++){
  if(arr[i] !== arr[j]){
    i++;
    arr[i] = arr[j];
  }
}
arr.length = i + 1;
console.log(arr);
