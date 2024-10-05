let s = "ADOBECODEBANC", t = "ABC";

let freq = {};

for(let char of t){
    freq[char] = (freq[char] || 0) + 1;
}

let right = 0,
    left = 0,
    minlen = Infinity,
    start = 0,
    required = t.length;

 while (right < s.length) {
     if(freq[s[right]] > 0) required--
     freq[s[right]] = (freq[s[right]] || 0) - 1;
     right++;
     
     while(required === 0){
         if(right - left < minlen ){
             minlen = right - left;
             start = left;
         }
         
         freq[s[left]] = (freq[s[left]] || 0) + 1;
         if(freq[s[left]]  > 0) required ++;
         left++;
     }
 }
 
 console.log({ freq, start, minlen, left,n: s.slice(start, start + minlen)})
