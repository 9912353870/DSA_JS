class BubbleSort{
  constructor(arr = []){
    this.collection = arr;
  }
  
  sort(type = 'asc'){
    let arr = this.collection;
    let temp;
    for(let i = 0; i< arr.length; i++){
     for(let j = 0; j< arr.length; j++){
          if(type === 'desc' ? arr[i] > arr[j] : arr[i] < arr[j]){
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
         }
      }
    }
    return arr;
  } 
}

const test = new BubbleSort([13,32,26,35,10]);
console.log(test.sort())
const test2 = new BubbleSort(['Cat',"Apple","Dog","Bell"]);
console.log(test2.sort("desc"))
