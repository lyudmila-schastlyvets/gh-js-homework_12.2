// 1 isPrime - Returns true or false, indicating whether the given number is prime.
function isPrime(num) {
    if (num > 0) {
        var sqrtnum = Math.floor(Math.sqrt(num));
        var prime = num != 1;
        for (var i = 2; i < sqrtnum + 1; i++) {
            if (num % i == 0) {
                prime = false;
                break;
            }
        }
        return prime;
    } else {
        return false;
    }
}

isPrime(0)                          // false
isPrime(1)                          // false
isPrime(17)                         // true
isPrime(10000000000000)             // false

// 2 factorial - Returns a number that is the factorial of the given number.
function factorial (num) {
    if (num <= 0) {
        return 1
    } else {
        return (num * factorial(num - 1))
    }
}

factorial(0)                        // 1
factorial(1)                        // 1
factorial(6)                        // 720

// 3 fib - Returns the nth Fibonacci number.
function fib (num) {
    var arr = [0]
    if (num >= 1) {
        arr.push(1)
        for (var i = 2; i <= num; i++) {
            arr.push(arr[i-1] + arr[i-2])
        }
    }
    return arr[arr.length - 1]
}

fib(0)                              // 0
fib(1)                              // 1
fib(10)                             // 55
fib(20)                             // 6765

// 4 isSorted - Returns true or false, indicating whether the given array of numbers is sorted.
function isSorted (arr) {
    var arrCopy = [...arr]
    arrCopy.sort(function (a, b) {
        return a- b
    })
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== arrCopy[i]) {
            return false
        }
    }
    return true
}

isSorted([])                        // true
isSorted([-Infinity, -5, 0, 3, 9])  // true
isSorted([3, 9, -3, 10])            // false

// 5 reverse - Reverses the given string (yes, using the built in reverse function is cheating).
function reverse (str) {
    var arr = str.split('');
    var result = [];
    for (var i = str.length - 1; i >=0; i--) {
        result.push(arr[i]);
    }
    return result.join('');
}

reverse('')                         // ''
reverse('abcdef')                   // 'fedcba'

// 6 myIndexOf - Implement the indexOf function for arrays.
Array.prototype.myIndexOf = function (arr, num) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return i
        }
    }
    return -1
}

myIndexOf([1, 2, 3], 1)               // 0
myIndexOf([1, 2, 3], 4)               // -1

// 7 isPalindrome - Return true or false indicating whether the given string is a palindrome (case and space insensitive).
function isPalindrome (str) {
    str = str.toLowerCase().replace(/\s/g, '')
    var res = str.split('').reverse().join('')
    return str === res
}

isPalindrome('')                                // true
isPalindrome('abcdcba')                         // true
isPalindrome('abcd')                            // false
isPalindrome('A man a plan a canal Panama')     // true

// 8 missing - Takes an unsorted array of unique numbers (ie. no repeats) from 1 through some number n, and returns the missing number in the sequence (there are either no missing numbers, or exactly one missing number). Can you do it in O(N) time? Hint: There’s a clever formula you can use.
function missing(array) {
    var max = Math.max(...array)
    for (var i = 1; i < max; i++) {
        if (array.indexOf(i) === -1) {
            return i
        }
    }
}

missing([])                         // undefined
missing([1, 4, 3])                  // 2
missing([2, 3, 4])                  // 1
missing([5, 1, 4, 2])               // 3
missing([1, 2, 3, 4])               // undefined

// 9 isBalanced - Takes a string and returns true or false indicating whether its curly braces are balanced.
function isBalanced (str) {
    if (str.indexOf('}{') >= 0) {
        return false
    }
    str = str.replace(/[^{}]/g, '')
    while (str.length > 1) {
        str = str.replace(/{}/g, '')
    }
    return str.length === 0
}

isBalanced('}{')                      // false
isBalanced('{{}')                     // false
isBalanced('{}{}')                    // false
isBalanced('foo { bar { baz } boo }') // true
isBalanced('foo { bar { baz }')       // false
isBalanced('foo { bar } }')           // false