const node = function(value){
   return {
      data: value,
      left: null,
      right: null, 
   }
}

const binaryTree = {
   head:null,
   insert:function(value){
      const newNode = node(value);
      if(this.head === null){
         this.head = newNode;
      }
      else{
         let current = this.head;
         while(current){
            if(value > current.data){
               if(current.right === null){
                  current.right = newNode;
                  break;
               }
               current = current.right;
            }else{
               if(current.left === null){
                  current.left = newNode;
                  break;
               }
               current = current.left;
            }
         }
      }
   },
   display:function(node = this.head) {
      if (node) {
        this.display(node.left);
        console.log(node.data);
        this.display(node.right);
      }
   }
}

const arr = [345,242,56,8282,6565,789,143];

let i = 0
while(i <= arr.length){
   binaryTree.insert(arr[i]);
   i++;
}

binaryTree.display();
