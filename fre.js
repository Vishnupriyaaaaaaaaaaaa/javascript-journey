//find frequency of each digit
let num=223444;
let str=num.toString();
let count=1;
for(let i=0;i<str.length;i++)
{
   if(str[i]==str[i+1]){
   count++;
   }
   else{
    console.log(str[i]+":"+count);
    count=1;
   }

}
