let rows = 10;

for(let i = rows; i>=0; i--){
   let str = "";
   for(let j=i; j>=1; j--){
      str += " ";
   }
   for(let j=rows; j>i; j--){
      str += "* ";
   }
   setInterval(() => {
      console.log(str);
   }, interval);
}

for(let i = 0; i<=rows; i++){
   let str = "";
   for(let j=i; j>=1; j--){
      str += " ";
   }
   for(let j=rows-1; j>i; j--){
      str += " *";
   }
   console.log(str);
}