class SelectionSort{
 constructor(def = []){
  this.data = def;
 }
 
 sort(){
   let arr =  this.data;
   for(let i = 0; i < arr.length; i++){
     let small = arr[i];
     for(let j = i; j < arr.length; j++){
       if(arr[j] < small){
         let temp = small;
          small = arr[j];
          arr[j] = temp;
         }
         arr[i] = small;
     }
   }
   return arr;
 }
}

const test = new SelectionSort([12,31,25,8,32,17]);
console.log(test.sort())
