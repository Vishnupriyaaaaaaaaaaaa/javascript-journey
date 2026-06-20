let arr=[10,200,30,40];
let largest=arr[0];
for(let i=1;i<arr.length;i++){
        if(arr[i]>largest){
            largest=arr[i];
        }
}
console.log(largest);
//Algorithm: Linear Search / Traversal
//Complexity:
//Time: O(n) → check each element once
//Space: O(1) → only one variable