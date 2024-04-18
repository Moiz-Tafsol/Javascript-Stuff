let dict = {}

let arr = [2, 3, 4, 5,5,5,5,5,5,5,5,5,5, 6, 6, 7, 7, 3, 6]
let check = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] === arr[i]) {
                dict[arr[i]] = "duplicate"
            }
        }
    }
console.log(dict)