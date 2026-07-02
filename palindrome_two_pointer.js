//Check if a string is a palindrome using two pointers
function pointer(s){
let left=0;
let right=s.length-1;
while(left<right){
         if(s[left]!=s[right]){
          return "not palindrome";
          break;
         }
       return "palindrome";
   break;
}
}
console.log(pointer("vpvy"));
