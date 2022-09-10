/*
add: Insert a node into the tree.
findMin: Get the minimum node.
findMax: Get the maximum node.
find: Search a specific node.
isPresent: Determine the existence of a certain node.
remove: Delete a node from the tree. Determine whether a certain set is a subset of another set.
*/

class Node{
 constructor(data, left = null, right = null){
   this.data = data;
   this.left = left;
   this.right = right;
 }
}

class BST{
 constructor(){
   this.head = null;
 }
 
 add(ele){
   if(this.head === null){
     this.head = new Node(ele);
   }else{
    
   /*---Search tree to build recurrsive tree---*/
     const searchTree = (node) => {
       if(node.data < ele){
         if(node.right === null){
           node.right = new Node(ele);
           return;
         }else{
           return searchTree(node.right);     
         }
       }
       else if(node.data > ele){
         if(node.left === null){
           node.left = new Node(ele);
         }else{
          return searchTree(node.left); 
         }
       }
       else{  return null; }
     }
     /*--------------end------------------*/
     
     searchTree(this.head);
   }
 }
 
 findMin(){
  let currentNode = this.head;
   while(currentNode.left){
     currentNode = currentNode.left;
   }
   return  currentNode.data;
 }
  
  findMax(){
  let currentNode = this.head;
   while(currentNode.right){
     currentNode = currentNode.right;
   }
   return  currentNode.data;
 } 
 
 find(ele){ 
  if(ele === this.head.data) return this.head;
   function search(ele, node){
   if(node === null) return null;
    if(ele > node.data) {
       return search(ele, node.right);
     }else if(ele < node.data){
       return search(ele, node.left);
     }else if(ele === node.data){
       return node;
     }
   }
   const result = search(ele,this.head);
   return result;
 }
 
 isPresent(ele){
   let currentNode = this.head;
   
   while(currentNode.data !== ele){
      if(ele > currentNode.data){
        currentNode = currentNode.right;
      }else{
      	currentNode = currentNode.left;
      }
      if(currentNode === null) return false;
   }
   return true;
 }
 
 /*
 1) Node to be deleted is the leaf: Simply remove from the tree. 
 2) Node to be deleted has only one child: Copy the child to the node and delete the child 
 3) Node to be deleted has two children: Find inorder successor of the node. Copy contents of the inorder successor to the node and delete the inorder successor. Note that inorder predecessor can also be used. 
NOTE: The important thing to note is, inorder successor is needed only when the right child is not empty. In this particular case, inorder successor can be obtained by finding the minimum value in the right child of the node.
 */
 remove(ele){
   function removeNodeData(ele,node){
     if(node === null) return null;
     if(ele === node.data){
        if(node.left === null && node.right === null){
           return null;
        }else if(node.left === null){
           return node.right;
        }else if(node.right === null){
          return node.left;
        }else {
          let tempNode = node.right;
          while(tempNode.left){
            tempNode = tempNode.left;
          }
          node.data = tempNode.data;
          tempNode.right = removeNodeData(tempNode.data,node.right);
        }
        return node;
     }else if(ele < node.data){
       node.left = removeNodeData(ele,node.left);
       return node;
     }else if(ele > node.data){
       node.right = removeNodeData(ele,node.right);
       return node;
     }
   }
   
  this.head = removeNodeData(ele,this.head); 
  return this.head;
 }
}

const createBST = new BST();
createBST.add(50)
createBST.add(30)
createBST.add(70)
createBST.add(20)
createBST.add(40)
createBST.add(60);
createBST.add(80)
console.log(createBST.findMin())
console.log(createBST.findMax())
console.log(createBST.find(30))
console.log(createBST.isPresent(11))
console.log(createBST.find(70))
console.log(createBST.remove(20))
console.log(createBST.remove(30))
console.log(createBST.remove(50))
