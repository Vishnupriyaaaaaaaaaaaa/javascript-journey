let arr = [2,3,4];

let left = 0;
let right = arr.length - 1;

while(left < right){

    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
}

console.log(arr);
//Complexity:
//Time: O(n) (each element swapped once)
//Space: O(1) (no extra array)

//DS used: Array
//Algorithm: Two Pointer Technique