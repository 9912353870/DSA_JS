//[2,4,5,9,1,3];

const quickSort = (arr) => {
    
    if(arr.length < 2) return arr;
    
    const randomInt = Math.floor(Math.random() * arr.length);
    let left = [], right = [];
    
    for(let i = 0; i < arr.length; i++){
        if(i === randomInt ) continue;
        
        if(arr[randomInt] > arr[i]){
            left.push(arr[i]);
        }else {
            right.push(arr[i])
        }
    }
    
    return [...quickSort(left), arr[randomInt], ...quickSort(right)];
}

const test = [2,4,5,9,1,3];
console.log(quickSort(test));

const mergeSort  = (arr) => {
    console.log(arr);
    if(arr.length < 2) return arr;
    
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0,mid));
    const right = mergeSort(arr.slice(mid));
    
    const sorted =  merge(left, right);
    
    return sorted;
}


const merge = (left, right) => { 
    let leftIndex = 0, rightIndex = 0, temp = [];
    
    while(leftIndex < left?.length && rightIndex < right?.length){
        if(left[leftIndex] <= right[rightIndex]){
            temp.push(left[leftIndex]);
            leftIndex++;
        } else {
            temp.push(right[rightIndex]);
            rightIndex++;
        }
    }
    
    while(leftIndex < left?.length){ temp.push(left[leftIndex]); leftIndex++; }
    while(rightIndex < right?.length){ temp.push(right[rightIndex]); rightIndex++; }
    
    console.log("Merge: ",{left, right, result: temp});
    return temp;
}

console.log(mergeSort([ 9, 4, 6,1, 7, 3, 5, 1, 10, 8]))
