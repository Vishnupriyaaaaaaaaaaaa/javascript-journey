//Find the first non-repeating character
let s="swiss";
let count={};
for(let i=0;i<=s.length-1;i++){
       let char=s[i];
       count[char] = (count[char] || 0) + 1;
}
let result = null;

for (let i = 0; i < s.length; i++) {
    if (count[s[i]] === 1) {
        result = s[i];
        break;
    }
}
console.log("First non-repeating character:", result);