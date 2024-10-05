let s = "abcbacbb";

let right = 0, maxlength = 0;
let str = new Set();


for(let left = 0; left < s.length; left++){
    while(str.has(s[left])){
        str.delete(s[right]);
        right++;
    }
    str.add(s[left]);
    maxlength = Math.max(maxlength, left - right + 1);
    
    console.log({i: s[left], str,  maxlength})
}

