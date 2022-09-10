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

class PriorityQueue extends Queue{
 constructor(){
   super();
 }
 priorityEnqueue(ele, order = "desc"){
   if(this.isEmpty()){
     this.queue.push(ele);
   }else{
     //console.log(ele)
     let added = false;
     for(let i = 0; i < this.queue.length; i++){
       if(order === "asc" ? ele[1] > this.queue[i][1] : ele[1] < this.queue[i][1]){
         this.queue.splice(i,0,ele);
         added = true;
         break;
       }
     }
     !added && this.queue.push(ele);
   }
 }
 
 print(){
  return this.isEmpty() ? null : this.queue;
 }
}

const obj = new PriorityQueue();
obj.priorityEnqueue([10,1]);
obj.priorityEnqueue([20,3]);
obj.priorityEnqueue([30,2]);
obj.priorityEnqueue([40,6]);
obj.priorityEnqueue([50,4]);
console.log(obj.print())

