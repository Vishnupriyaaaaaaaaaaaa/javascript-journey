let arr=[1,9,3,4];
let sorted=true;
for(let i=0;i<arr.length-1;i++){
    if(arr[i]>arr[i+1]){
        sorted=false;
        break;
    }
}
console.log(sorted);
//Complexity:
//Time: O(n)
//Space: O(1)

//Algorithm: Linear traversal
//DS: Array