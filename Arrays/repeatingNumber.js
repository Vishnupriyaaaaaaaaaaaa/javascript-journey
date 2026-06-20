let arr=[1,2,5,5,3,4,4];
for(let i=0;i<arr.length;i++){
      if(arr[i]==arr[i+1]){
        console.log(arr[i]);
        break;
      }
}