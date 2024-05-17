var myName = "xyx"

// console.log(myName[myName.length - 1]) 

function palindrome(string){
    for (var i=0; i< Math.floor(string.length / 2); i++){
        console.log(string[i], string[string.length - 1 - i])
        if(string[i] !== string[string.length - 1 - i]){
            return "Not Palindrome"
        }
    }
    return "Its not an Palindrome"
}
console.log(palindrome(myName))


// var numbers = "121"
// console.log(numbers[numbers.length-1])

// function palindrome(){

// }
// console.log(palindrome(numbers))