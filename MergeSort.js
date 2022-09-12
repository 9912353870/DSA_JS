class MergeSort{
  constructor(def = []){
   this.data = def;
  }
  
  init(){
    let start = 0;
    let end = this.data.length - 1;
    this.sort(start,end,this.data);
    return this.data;
  }
  sort(start,end,arr){
    if(start < end){
     let middle = parseInt((start + end) / 2);
     this.sort(start,middle,arr);
     this.sort(middle+1,end,arr);
     this.merge(arr,start,end,middle);
    }
  }
  
  merge(arr,l,r,m){
    var n1 = m - l + 1;
    var n2 = r - m;
  
    // Create temp arrays
    var L = new Array(n1); 
    var R = new Array(n2);
  
    // Copy data to temp arrays L[] and R[]
    for (var i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (var j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];
  
    // Merge the temp arrays back into arr[l..r]
  
    // Initial index of first subarray
    var i = 0;
  
    // Initial index of second subarray
    var j = 0;
  
    // Initial index of merged subarray
    var k = l;
  
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
  
    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
  
    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
  }
}

const test = new MergeSort([12, 31, 25, 8, 32, 17, 40, 42]);

console.log(test.init());
