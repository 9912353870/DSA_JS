/*
push: Input a new element.
pop : Remove the top element, return the removed element.
peek : Return the top element.
length : Return the number of element(s) in the stack.
*/

class Stack{

 constructor(){
   this.storage = {};
   this.count = 0;
 }
  
  push(element){
    this.storage[this.count] = element;
    this.count++;
    return this.storage;
  }
  
  pop(){
    if(this.count === 0) return null;
    this.count--;
    const returnValue = this.storage[this.count];
    delete this.storage[this.count];
    return returnValue;
  }
  
   peek(){
     return this.count > 0 ? this.storage[this.count-1] : null;
   }
   
   length(){
     return this.count;
   }
}

let test = new Stack();
 
console.log(test.length());
console.log(test.push(1));
console.log(test.push(2));
console.log(test.push(3));
console.log(test.length());
console.log(test.pop());
console.log(test.pop());
console.log(test.pop());
console.log(test.pop());
console.log(test.peek());
console.log(test.push(1));
console.log(test.push(2));
console.log(test.peek());
console.log(test.pop());
console.log(test.peek());
console.log(test.pop());
console.log(test.peek());


