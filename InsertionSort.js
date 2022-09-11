class InsertionSort{
 constructor(def = []){
  this.data = def;
 }
 
 sort(){
   let arr =  this.data;
   let temp;
   for(let i = 1; i < arr.length; i++){
     temp = arr[i];
     let j = i-1;
     
     while( j >= 0 && arr[j] > temp){
       arr[j+1] = arr[j];
       j--;
     }
     
     arr[j+1] = temp;
      
   }
   return arr;
 }
}

const test = new InsertionSort([12,31,25,8,32,17]);
console.log(test.sort())
