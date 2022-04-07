/**
 * This file will contain CodeWars problems of 8 kyu difficulty
 */


/**
 * Name: Digitize
 * Description: Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
 */

const digitize = n => String(n).split('').reverse().map(e => Number(e))


/**
 * Name: Remove First and Last Character
 * Description: It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
 */

const removeChar = str => str.substring(1, str.length - 1);


/**
 * Name: Sum without highest and lowest number
 * Description: Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ). The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
 */

const sumArray = (array) => {
    if ((array !== undefined && array !== null) && array.length > 2) {
        let low = 0;
        let high = 0;
        let sum = 0;

        for (let i = 1; i < array.length; i++) {
            if (array[i] < array[low]) {
                low = i;
            }

            if (array[i] > array[high]) {
                high = i;
            }
        }

        array.forEach((x, i) => {
            if (!(i === low || i === high)) {
                sum += x;
            }
        });
        return sum;
    }

    return 0;
}


/**
 * Name: How good are you really?
 * Description: There was a test in your class and you passed it. Congratulations! But you're an ambitious person. You want to know if you're better than the average student in your class. You receive an array with your peers' test scores. Now calculate the average and compare your score! Return True if you're better, else False!
 */

const betterThanAverage = (classPoints, yourPoints) => yourPoints > (classPoints.reduce((prev, current) => prev + current) / classPoints.length)

/**
 * Name: Needle in the Haystack
 * Description: Can you find the needle in the haystack? Write a function findNeedle() that takes an array full of junk but containing one "needle." After your function finds the needle it should return a message (as a string) that says: "found the needle at position " plus the index it found the needle, so:
 */

const findNeedle = haystack => 'found the needle at position ' + haystack.indexOf('needle')

/**
 * Name: USD => CNY
 * Description: Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'
 */

function usdcny(usd) {
    return `${(usd * 6.75).toFixed(2)} Chinese Yuan`
}

/**
 * Name: Grasshopper - Personalized Message
 * Description: Create a function that gives a personalized greeting. This function takes two parameters: name and owner. If name is the same as owner, return 'Hello boss'
 */

function greet(name, owner) {
    return (name === owner) ? 'Hello boss' : 'Hello guest';
}

/**
 * Name: Complementary DNA
 * Description:In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side.
 */

function DNAStrand(dna) {
    return dna.split('').map(x => {
        switch (x) {
            case 'A':
                x = 'T';
                break;
            case 'T':
                x = 'A';
                break;
            case 'G':
                x = 'C';
                break;
            case 'C':
                x = 'G';
                break;
        }
        return x;
    }).join('');
}

/**
 * Name: List Filtering
 * Description: In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
 */

function filter_list(l) {
    return l.filter(item => typeof item === 'number')
}

/**
 * Name: 
 * Description: There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

  1.  number of pillars (≥ 1);
  2.  distance between pillars (10 - 30 meters);
  3.  width of the pillar (10 - 50 centimeters).

  Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).
 */

function pillars(num_pill, dist, width) {
    if (num_pill < 2) return 0

    return ((num_pill - 2) * width) + ((num_pill - 1) * (dist * 100))
}

/**
 * Name: Filter out the geese
 * Description: Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.
 */

function gooseFilter(birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

    return birds.filter(bird => !geese.includes(bird));
};

/**
 * Name: Remove the minimum
 * Description: Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.
 */

// function removeSmallest(numbers) {
//   let min = Math.min(...numbers);

//   numbers.splice(numbers.indexOf(min), 1);

//   return numbers;
// }

function removeSmallest(numbers) {
    let min = Math.min(...numbers);
    let numsCopy = numbers;

    numsCopy.splice(numbers.indexOf(min), 1);

    return numsCopy;
}

/**
 * Name: Sort Numbers
 * Description: Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.
 */

const solution = nums => nums !== null ? nums.sort((a, b) => a - b) : [];

/**
 * Name: Summing a number's digits
 * Description: Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.
 */


function sumDigits(number) {
    let str = String(Math.abs(number))
    return Number(str.split('').reduce((a, b) => Number(a) + Number(b)))
}

/**
 * Name: Merge two sorted arrays into one
 * Description: You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.
 */

function mergeArrays(arr1, arr2) {
    let mergedNums = arr1.concat(arr2);
    let uniqueNums = [...new Set(mergedNums)];
    return uniqueNums.sort((a, b) => a - b);
}

/**
 * Name: Alternate capitalization
 * Description: Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even. For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
 */

function capitalize(s) {
    let arr1 = [];
    let arr2 = [];

    s.split('').forEach((char, i) => {
        if (i % 2 === 0) {
            arr1.push(char.toUpperCase());
            arr2.push(char.toLowerCase());
        } else {
            arr2.push(char.toUpperCase());
            arr1.push(char.toLowerCase());
        }
    });

    return [arr1.join(''), arr2.join('')];
};

/**
 * Name: Form The Minimum
 * Description: Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).
 */

const minValue = values => Number([...new Set(values)].sort().join(''));



/**
 * Name: If you can't sleep, just count sheep!!
 * Description: Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
 */

var countSheep = function (num) {
    let sheep = ''
    for (let i = 1; i <= num; i++) {
        sheep += `${i} sheep...`;
    }

    return sheep
}

/**
 * Name: Convert a string to an Array
 * Description: Write a function to split a string and convert it into an array of words.
 */

const stringToArray = string => string.split(' ')

/**
 * Name: Decibel Scale
 * Description: Your task is to simply calculate the loudness of a sound wave, given its intensity as a parameter to the dBScale/db_scale function. Using the Decibel Scale Equation 
 */

const dBScale = intensity => 10 * Math.log10(intensity / 10 ** -12)

/**
 * Name: Find the first non-consecutive number
 * Description: Your task is to find the first element of an array that is not consecutive. By not consecutive we mean not exactly 1 larger than the previous element of the array.
 */

function firstNonConsecutive(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] + 1 !== arr[i + 1])
            return arr[i + 1]
    }

    return null;
}

/**
 * Name: Parse nice int from char problem
 * Description: You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9. Write a program that returns the girl's age (0-9) as an integer. Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.
 */

const getAge = inputString => ~~inputString.charAt(0);

/**
 * Name: Will you make it?
 * Description: You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true (1 in Prolog, NASM and COBOL) if it is possible and false (0 in Prolog, NASM and COBOL) if not. The input values are always positive.
 */

const zeroFuel = (distanceToPump, mpg, fuelLeft) => !(distanceToPump - (mpg * fuelLeft) > 0)


/**
 * Name: Count Odd Numbers below n
 * Description: Given a number n, return the number of positive odd numbers below n, EASY!
 */

const oddCount = n => Math.floor(n / 2)

/**
 * Name: Is the date today
 * Description: Write a simple function that takes a Date as a parameter and returns a Boolean representing whether the date is today or not. Make sure that your function does not return a false positive by only checking the day.
 */


const isToday = date => {
    let today = new Date();
    return today.getDate() === date.getDate() && today.getYear() === date.getYear() && today.getMonth() === date.getMonth()
}


/**
 * Name: Fake Binary
 * Description: replace all digits in a string that are below 5 with 0 and above or equal with 1
 */

const fakeBin = x => x.split('').map(char => char < 5 ? 0 : 1).join('');

/**
 * Name: Beginner - Lost Without a Map
 * Description: Given an array of integers, return a new array with each value doubled.
 */

const maps = x => x.map(num => num + num)

/**
 * Name: Return the closest number multiple of 10
 * Description: Given a number return the closest number to it that is divisible by 10.
 */

const closestMultiple10 = num => {
    let integer = ~~num
    let lastDigit = ~~(integer + '').slice(-1)

    if (lastDigit < 5) {
        integer -= lastDigit;
    } else {
        integer += (10 - lastDigit)
    }

    return integer;
};


/**
 * Name: Ones and Zeros
 * Description: Given an array of ones and zeroes, convert the equivalent binary value to an integer.
 */

const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);

/**
 * Name: Shortest Word
 * Description: Simple, given a string of words, return the length of the shortest word(s).
 */

const findShort = s => s.split(' ').reduce((a, b) => b.length < a.length ? b : a).length


/**
 * Name: Thinkful - String Drills: Repeater
 * Description: Write a function named repeater() that takes two arguments (a string and a number), and returns a new string where the input string is repeated that many times.
 */

const repeater = (string, n) => string.repeat(n)

/**
 * Name: How many pages in a book?
 * Description: Every book has n pages with page numbers 1 to n. The summary is made by adding up the number of digits of all page numbers. Task: Given the summary, find the number of pages n the book has. If the input is summary=25, then the output must be n=17: The numbers 1 to 17 have 25 digits in total: 1234567891011121314151617.
 */

function amountOfPages(summary) {
    let nums = [];
    let str = '';

    while (str.length !== summary) {
        str += nums.length + 1;
        nums.push(nums.length + 1);
    }

    return nums[nums.length - 1];
}