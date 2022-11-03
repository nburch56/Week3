//This subtracts the first element from the last element in the array.
const ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages[(ages.length-1)] - ages[0]);

ages.push(75);
console.log(ages[(ages.length-1)] - ages[0]);

//This loop calculates the average age.
let i = 0;
let totalAge = 0;
while (i < ages.length-1) {
    i++;
    totalAge += ages[i];
}
let averageAge = totalAge / ages.length;
console.log(averageAge);


//This loop calculates the average number of letters per name in the array.
const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
const lengths = names.map(function(element) {
    return element.length;
});
let sum = lengths.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});
let averageLength = sum / names.length;
console.log(averageLength);

//To access the last element of an array you would use arrayName[arrayName.length]
//To access the first element of an array you would use arrayName[0]


//This loop pushes the lengths of each name from the names array into a new array namesLengths.
const namesLengths = [];
let n = 0
while (n <= lengths.length-1) {
    namesLengths.push(lengths[n]);
    n++;
}
console.log(namesLengths);


//This loop should return the sum of the elements in the array namesLengths, but for some reason it is returning NaN.
let totalLength = 0;
let x = 0;
while (x < namesLengths.length-1) {
    x++;
    totalLength += namesLengths[i];
}
console.log(totalLength);
console.log(namesLengths.length);
let averageLengths = totalLength / namesLengths.length;
console.log(averageLengths);


//This function repeats the word entered a number of times equal to the number entered.
function repeatWord(word, n){
    let word2 = word
    for (i = 1; i < n; i++) {
        word2 = word2 + word;
    }
    console.log(word2);
}
repeatWord('Word', 3);


//This function takes in a first name and a last name and returns a full name.
function returnNames(firstName, lastName) {
    console.log(firstName + ' ' + lastName);
}
returnNames('Nathan', 'Burch');


//This function returns true if the sum of the numbers in the array is over 100.
let number = [23, 55, 35, 77];
function numbersOverHundred() {
    let a = 0;
let totalNumber = 0;
while (a < number.length-1) {
    a++;
    totalNumber += number[a];
}
console.log(totalNumber > 100);
}
numbersOverHundred();


//This function returns the average of the numbers in the array.
function averageOfArray (numbers) {
let b = 0;
let totalNumbers = 0;
while (b < numbers.length-1) {
    b++;
    totalNumbers += numbers[b];
}
let averageNumbers = totalNumbers / numbers.length;
console.log(averageNumbers);
}
averageOfArray([51, 675, 34, 7, 23, 64]);


//This function returns true if the average of the numbers in the first array are greater than the average of the numbers in the second array.
function averageOfArrays(array1, array2) {
    let i = 0;
let totalNumbers2 = 0;
while (i < array1.length-1) {
    totalNumbers2 += array1[i];
    i++;
}
let averageNumbers2 = totalNumbers2 / array1.length;

let b = 0;
let totalNumbers3 = 0;
while (b < array2.length-1) {
    totalNumbers3 += array2[b];
    b++;
}
let averageNumbers3 = totalNumbers3 / array2.length;
console.log(averageNumbers2 > averageNumbers3);
}
averageOfArrays([5, 25, 25], [5, 25, 5]);


//This function returns true if it is hot outside and there is more than 10.50 money in pocket.
function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside === true && moneyInPocket > 10.50) {
    console.log(true);
    }
}
willBuyDrink(true, 11);


//This function adds up the total cost of groceries to be purchased.
function costOfGroceries (array3) {
    let i = 0;
let totalCost = 0;
while (i < array3.length) {
    totalCost += array3[i];
    i++;
}
console.log(totalCost);
}
costOfGroceries([3, 7.25, 3.12, 2])