let abc = 'lsakndf'

let check1 = 'a'
let check2 = 'n'

let res = ''
let temp = ''

//console.log(check2.charCodeAt(0) - check1.charCodeAt(0));

for(let i=0;i<abc.length;i++)
{
    //console.log(abc[i]);
    temp = String.fromCharCode(abc[i].charCodeAt(0) + 13) ;
    res += temp
}

console.log(res);