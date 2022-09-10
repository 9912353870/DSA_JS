/*
First In First Out
enqueue: Enter queue, add an element at the end.
dequeue: Leave queue, remove the front element and return it.
front: Get the first element.
isEmpty: Determine whether the queue is empty.
size: Get the number of element(s) in queue.
*/

class Queue{
	constructor(){
    this.queue = []
  }
  
  enqueue(ele){
    if(!ele) return null;
    this.queue.push(ele);
    return this.queue;
  }
  
  dequeue(){
   return this.queue.shift();
  }
  
  front(){
    return this.queue.length ? this.queue[0] : null;
  }
  
  isEmpty(){
   return !Boolean(this.queue.length);
  }
  
  size(){
   return this.queue.length
  }
}

const obj = new Queue();

console.log(obj.size());
console.log(obj.enqueue(10));
console.log(obj.enqueue(20));
console.log(obj.enqueue(30));
console.log(obj.dequeue());
console.log(obj.isEmpty());
console.log(obj.dequeue());
console.log(obj.isEmpty());
console.log(obj.dequeue());
console.log(obj.isEmpty());
console.log(obj.front());
console.log(obj.enqueue(40));
console.log(obj.enqueue(50));
console.log(obj.front());
console.log(obj.enqueue());
console.log(obj.front());
