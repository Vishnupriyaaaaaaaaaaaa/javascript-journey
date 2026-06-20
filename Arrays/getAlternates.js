function getAlternates(arr){
    let ans=[];
    for(let i=0;i<arr.length;i+=2){
        ans.push(arr[i]);
    }
    return ans;
}
let arr=[1,2,3,4,5];
console.log(getAlternates(arr));