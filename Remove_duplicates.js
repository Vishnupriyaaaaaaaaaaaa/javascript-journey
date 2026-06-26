//Remove all duplicate characters
let s = "banana";
let result = "";

for (let i = 0; i < s.length; i++) {
    let found = false;

    for (let j = 0; j < result.length; j++) {
        if (s[i] === result[j]) {
            found = true;
            break;
        }
    }

    if (!found) {
        result += s[i];
    }
}

console.log(result);
