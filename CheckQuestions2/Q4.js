let arr = [8,1,1,2,3,4,4,6,8,9]
let dups = []

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] === arr[i]) {
            dups.push(arr[i])
        }
    }
}

let unique = arr.filter((value) => !dups.includes(value));

console.log(unique);