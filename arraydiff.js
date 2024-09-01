// https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript
function arrayDiff(a, b) {
    if (a.length === 0){
      return [];
    }
     if (b.length === 0) {
        return a;
      } 
     let result = [];
       for (let i = 0; i< a.length; i++){
         if (!b.includes(a[i])){
           result.push(a[i]);
         }
       }
     return result;
   }