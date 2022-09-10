/*
values: Return all elements in a set.
size: Return the number of elements.
has: Determine whether an element exists.
add: Insert elements into a set.
remove: Delete elements from a set.
union: Return the union of two sets.
intersection: Return the intersection of two sets.
difference: Return the difference of two sets.
subset: Determine whether a certain set is a subset of another set.
*/
class MySet{
 constructor(defaultData = []){
  this.data =  defaultData ? defaultData : [];
 }
 
 values(){
  return this.data;
 }
 
 has(e){
  return this.data.indexOf(e) !== -1;
 }
 
 add(e){
  if(!this.has(e)){ 
    this.data.push(e);
    return true;
  }
  
   return false;
 }
 
 remove(e){
   if(this.has(e)){ 
     let index = this.data.indexOf(e);
     this.data.splice(index,1);
     return true;
   }
   return false;
 }
 
 union(otherset){
   let unionSet = new MySet();
   let firstSet = this.data;
   let secondSet = otherset.values();
   
   firstSet.forEach(item =>{
     if(!unionSet.has(item)) unionSet.add(item);
   })
     
   secondSet.forEach(item =>{
     if(!unionSet.has(item)) unionSet.add(item);
   })
   
   return unionSet;
 }
 
 intersection(otherset){
   let intersectionSet = new MySet();
   let firstSet = this.data;
   
   firstSet.forEach(item => {
     if(otherset.has(item)){
       intersectionSet.add(item);
     }
   })
   
   return intersectionSet;
 }
 
 difference(otherset){
 let differenceSet = new MySet();
 let firstSet = this.data;
   
   firstSet.forEach(item => {
     if(!otherset.has(item)){
       differenceSet.add(item);
     }
   })
   
   return differenceSet;
 }
 
 subset(otherset){
   return this.values().every(item => {
      return otherset.has(item)
   })
 }
 
 superset(otherset){
   return otherset.values().every(item => {
      return this.data.indexOf(item) !== -1
   })
 }
}

const testSet = new MySet();
[1,4,2,45,23,5,2,4,1,56,3].forEach((item) =>{
  testSet.add(item);
})

console.log(testSet.values());
console.log(testSet.has(4));
console.log(testSet.has(18));
console.log(testSet.remove(23));
console.log(testSet.values());

const otherSet = new MySet();
[76,83,21,4, 46,98, 2, 12,45].forEach((item) =>{
  otherSet.add(item);
})

console.log(testSet.union(otherSet));
console.log(testSet.intersection(otherSet))
console.log(testSet.difference(otherSet))
console.log(testSet.subset(otherSet))
console.log(testSet.subset(testSet))

const subSet = new MySet([4,2,45]);
console.log(testSet.subset(subSet))
console.log(testSet.superset(subSet))
