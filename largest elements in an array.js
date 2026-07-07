let arr=[1,2,30,4];
let largest=-Infinity;
for(let i=0;i<arr.length;i++){
    if(arr[i]>largest){
        largest=arr[i];
    }
}
console.log(largest);
