class Node{
 constructor(data){
   this.data = data;
   this.next = null;
 }
}

class LinkedList{
 constructor(){
   this.head = null;
   this.length = 0;
 }
  
 addNode(ele){
  const node = new Node(ele);
   if(this.head === null){
    this.head = node;
   }else{
     let currentNode = this.head;
     while(currentNode.next){
       currentNode = currentNode.next;
     }
     currentNode.next = node;
   }
   this.length++;
 }
 
 addNodeAt(index,ele){
   let node = new Node(ele);
   let currentNode = this.head;
   
   if(index > this.length) return null;
   if(index === 0){
     node.next = this.head;
     this.head = node;
   }else{
     let previousNode;
     let  currentIndex = 0;
     while(currentIndex < index){
       previousNode = currentNode;
       currentNode = currentNode.next;
       currentIndex++;
     }
     
     node.next = currentNode;
     previousNode.next = node;
   }
   this.length++;
   return this.getAllDataFromNodes();
 }
 removeNode(ele){
   if(!ele)  return null;
   let currentNode = this.head;
   if(currentNode.data === ele){
     this.head = currentNode.next;
     this.length--;
   }else{
    let previousNode;
    while(currentNode.data !== ele){
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    previousNode.next = currentNode.next;
    this.length--;
   }
   return this.getAllDataFromNodes();
 }
  
 getAllDataFromNodes(index = -1){
   let currentNode = this.head;
   let datalist = [];
   while(currentNode && currentNode.data){
    datalist.push(currentNode.data);
    currentNode = currentNode.next;
   }
   return index < 0 ? datalist : datalist[index];
 }
 
 getNodeIndex(ele){
   if(!ele) return null;
   let currentNode = this.head;
   let index = -1;
   while(currentNode){
    index++;
    if(currentNode.data === ele) return index;
    currentNode = currentNode.next;
   }
   return -1;
 }
 
}

const list = new LinkedList();
list.addNode(10);
list.addNode(20);
list.addNode(30);
console.log(list.getAllDataFromNodes())
console.log(list.getNodeIndex(30))
console.log(list.removeNode(20))
console.log(list.addNodeAt(1,40))
console.log(list.addNodeAt(0,50))
console.log(list.addNodeAt(7,50))
console.log(list.getAllDataFromNodes(2))
