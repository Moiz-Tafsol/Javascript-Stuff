let string = 'abbbacefgh'

let res = {}

for (let i = 0; i < string.length; i++) {
    if(res[string[i]])
    {
        res[string[i]] += 1
        continue;
    }
    res[string[i]] = 1;
}

console.log(res);