//Toggle the case of every letter
function toggle(str){
let newstr1="";
let newstr2="";
let final="";
for(let i=0;i<str.length;i++){
        newstr1+=str.toUpperCase();
        newstr2+=str.toLowerCase();
        if(str[i]==newstr1[i]){
              final+=str[i].toLowerCase();
        }
        else{
            final+=str[i].toUpperCase();
        }

}
return final;
}
console.log(toggle("PrIyA"));
