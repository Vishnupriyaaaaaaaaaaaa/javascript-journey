let arr=[20,30,40,32];
let largest=-Infinity;
let secondlargest=-Infinity;
for(let i=0;i<arr.length;i++){
    if(arr[i]>largest){
        secondLargest = largest;
        largest=arr[i];
    }else if((arr[i]<largest) && (arr[i]>secondlargest)){
        secondlargest=arr[i];

    }
}
console.log(secondlargest);