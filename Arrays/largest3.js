let arr=[1,20,30,40,6];
let first=-Infinity;
let second=-Infinity;
let third=-Infinity;
for(let i=0;i<arr.length;i++)
{
    if(arr[i]>first){
        third=second;
        second=first;
        first=arr[i];
    }
    else if(arr[i]>second && arr[i]<first){
        third=second;
        second=arr[i];
    }
    else if(arr[i]>third && arr[i]<second){
        third=arr[i];
    }
}
console.log(first,second,third);