// time complexity is o(n)
let palin_str = "acbba"

function palindrom(strr, i, j){
    if (i >= j){
        return true
    }

    if (strr[i] != strr[j]){
        return false
    }

    return palindrom(strr, i+1, j-1)
}

console.log(palindrom(palin_str, 0, palin_str.length-1))