
let s = "babad";

let start = 0, maxLen = 1;

function extractPalindrome(left,right){
    
    if(s.length < 2) return s;
    
    while(left >= 0 && right < s.length && s[left] === s[right] ){
        if(right - left + 1 > maxLen ){
            start = left;
            maxLen = right - left + 1;
        }
        
        left--;
        right++;
    }
    
}


for(let i = 0; i < s.length; i++){
    extractPalindrome(i,i);
    extractPalindrome(i, i+1);
}


console.log(s.slice(start, maxLen + start))
