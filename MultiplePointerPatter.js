let sum;
let desired = 1;

while(right > left){
  
  sum = arr[left] + arr[right];
  
  if(sum > desired){
    right--;
  }else if(sum < desired){
    left++
  }else{
    break;
  }
  
}

console.log(arr[left], arr[right]);
