/*
An anagram of a string is another string that contains the same characters, only the order of characters can be different. For example, “abcd” and “dabc” are an anagram of each other.
*/

const isAnagram = (str1,str2) => {
  //check if the array are of same length, if not return false
  //create an object to add each character frequency
  //compare the second string each chracter with the frequency object
  //If all the characters present return true else false
  
  if(str1.length !== str2.length) return false;
  
  let frequency = {};
  
  for(let i = 0; i < str1.length; i++){
    frequency[str1[i]] = (frequency[str1[i]] || 0) + 1;
  }
  
  for(let i = 0; i < str2.length; i++){
     if(!frequency[str2[i]]){
       return false;
     }else{
       frequency[str2[i]]--;
     }
  }
  return true;
}

isAnagram("anagram", "nagaram");
