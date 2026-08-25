//largest digit in a number
function largestDigit(n){
let largest=-Infinity;
while(n>0){
     digit=n%10;
     if(digit>largest){
        largest=digit;
     }
     n=Math.floor(n/10);
}
return largest;
}
console.log(largestDigit(153));
