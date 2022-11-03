let arr = [1,2,5,6,8,10,5,21,4,9];

function slidingWindow(arr, freq){
    let maxSum = -Infinity;
    let sum = 0;
    let i;
    
    for(i = 0; i< freq; i++){
        sum += arr[i];
    }

    maxSum =  maxSum > sum ? maxSum : sum;

    for(let j = i; j < arr.length; j++){
        sum = sum - arr[j-i] + arr[j];
        maxSum = Math.max(maxSum,sum);
    }
    
    return maxSum;
}

console.log("slidingWindow: ", slidingWindow(arr,3));
//console.log(1);
