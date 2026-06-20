let arr=[1,2,3,4];
let x=1;
let found =-1;
for(let i=0;i<arr.length;i++){
    if(x==arr[i]){
        found=i;
        break;
    }
}
   
console.log(found);


