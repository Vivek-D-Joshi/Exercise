let myObj = {
   "name": { "first": "Robert", "middle": "", "last": "Smith" },
   "age": 25,
   "DOB": "-",
   "hobbies": [ "running", "coding", "-" ],
   "education": { "highschool": "N/A", "college": "Yale" }
};

const newObj = removeUnwantedKeys(myObj);

function removeUnwantedKeys(obj){
   if(Array.isArray(obj)){
      obj = obj.filter(item => item !== '' && item !== "-" && item !== 0 && item !== 'N/A');
   }
   for(let key in obj){
      if(obj.hasOwnProperty(key)){
         if(obj[key] == 0 || obj[key] == '' || obj[key] == '-' || obj[key] == 'N/A'){
            delete obj[key]
         }
      }
      if(typeof obj[key] == 'object' && obj[key] !== null){
         removeUnwantedKeys(obj[key]);
      }
   };
   return obj;
}


// function removeUnwantedKeys(obj) {
//    if (Array.isArray(obj)) {
//        obj = obj.filter(item => item !== '' && item !== '-' && item !== 0 && item !== 'N/A');
//    } else if (typeof obj === 'object' && obj !== null) {
//        Object.keys(obj).forEach(key => {
//            if (obj[key] === 0 || obj[key] === '' || obj[key] === '-' || obj[key] === 'N/A') {
//                delete obj[key];
//            } else {
//                obj[key] = removeUnwantedKeys(obj[key]);
//            }
//        });
//    }
//    return obj;
// }


console.log(newObj);