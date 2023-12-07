const node = function (value){
   const node = {
      data:value,
      next: null
   }
   return node;
}

function createList(){
   const list = {
      head:null,
      add: function(value){
         let newNode = node(value);
         if(this.head === null){
            this.head = newNode;
         }
         else{
            let current = this.head;
            //Traverse till tail node (current.next = null).
            while(current.next){
               current = current.next;
            }
            //append value in end node.
            current.next = newNode;
         }
      },
      displayAllElements:function(){
         let current = this.head;
         while(current.next){
            console.log(current.data);
            current = current.next;
         }      
      },
      ToArray:function(){
         let current = this.head;
         let arr = [];
         while(current.next){
            arr.push(current.data);
            current = current.next;
         }
         return arr;      
      }
   }
   return list;
}


const arr = ["John", "Joseph", 123, {name:'Victor',age:23}, [3.14,6.022,4.46]];

let i = 0
const list = createList();
while(i <= arr.length){
   list.add(arr[i]);
   i++;
}

const list2 = createList();
list2.add('John');
list2.add('John');
list2.add('John');
list2.add('John');


list.displayAllElements();








