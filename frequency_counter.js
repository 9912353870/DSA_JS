const same = (arr1,arr2) => {
  if(arr1.length !== arr2.length) return false;
  
  for(let i = 0; i < arr1.length; i++){
    let currIndex = arr2.indexOf(arr1[i] ** 2);
    if(currIndex === -1) return false;
    arr2.splice(currIndex, 1);
    console.log(arr2);
  }
  return true;
}

//frequency counter pattern:

const sameFn = (arr1,arr2) => { 
 if(arr1.length !== arr2.length) return false;
 //insted of using nested loop trying use single loops which cut of the complexity of O(n ^ 2)
 let frequency1 = {}, frequency2 = {};
 
 //Add the each element frequency from 1st array
 for(let i = 0; i < arr1.length; i++){
   frequency1[arr1[i]] = (frequency1[arr1[i]]  || 0) + 1;
 }
 
 //Add the each element frequency from 2nd array
 for(let i = 0; i < arr2.length; i++){
   frequency2[arr2[i]] = (frequency2[arr2[i]]  || 0) + 1;
 }
 
 //Now check the each element of frequency1 is present in frequency2 along with its frequencies
 for(let key in frequency1){
   if(!((key ** 2) in frequency2)) return false;
   if(!(frequency1[key] === frequency2[key ** 2])) return false;
 }
 return true;
}

console.log(sameFn([1,2,3,4],[1,4,4,16]));
