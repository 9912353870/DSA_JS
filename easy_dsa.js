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
