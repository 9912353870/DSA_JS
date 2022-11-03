let str = "testrogentest for tester";

function frequencyOfSubString(long,short){
    if(long === short) return long.length;
    if(!long || !short) return -1;
    let count = 0;

    for(let i = 0; i < long.length; i++){
        for(let j = 0; j < short.length; j++){
            if(long[i+j] !== short[j]) break;
            if(j === short.length - 1) count++;
        }
    }

    return count;
}

console.log("Repeat count: ",frequencyOfSubString(str, "wjfn"));
