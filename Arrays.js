//what is an array?
//An array is a data structure that can hold multiple values at once.
//Arrays are ordered collections, meaning the order of elements is preserved.
//Arrays can hold values of different data types, including numbers, strings, objects, and even other arrays.
//Creating an array
let fruits = ['apple', 'banana', 'cherry'];
console.log(fruits); // Output: ['apple', 'banana', 'cherry']
//Accessing array elements
console.log(fruits[0]); // Output: 'apple'
console.log(fruits[1]); // Output: 'banana'
console.log(fruits[2]); // Output: 'cherry'
//Modifying array elements
fruits[1] = 'blueberry';    
console.log(fruits); // Output: ['apple', 'blueberry', 'cherry']
//Array methods
//Adding elements
fruits.push('date'); // Adds 'date' to the end of the array
console.log(fruits); // Output: ['apple', 'blueberry', 'cherry', 'date']    
fruits.unshift('avocado'); // Adds 'avocado' to the beginning of the array
console.log(fruits);
// Output: ['avocado', 'apple', 'blueberry', 'cherry', 'date']
//Removing elements
fruits.pop(); // Removes the last element ('date')
console.log(fruits); // Output: ['avocado', 'apple', 'blueberry', 'cherry']
fruits.shift(); // Removes the first element ('avocado')
console.log(fruits); // Output: ['apple', 'blueberry', 'cherry']
//Finding the length of an array
console.log(fruits.length); // Output: 3
//Iterating over an array
fruits.forEach(function(fruit, index) {
    console.log(index + ': ' + fruit);
});
// Output:
// 0: apple
// 1: blueberry
// 2: cherry
// toString() method;
let fruitString = fruits.toString();
console.log(fruitString); // Output: 'apple,blueberry,cherry'   

//Common array methods
let citrus = ['orange', 'lemon', 'lime'];
let allFruits = fruits.concat(citrus);
console.log(allFruits); // Output: ['apple', 'blueberry', 'cherry', 'orange', 'lemon', 'lime']
let berryIndex = allFruits.indexOf('blueberry');
console.log(berryIndex); // Output: 1
let slicedFruits = allFruits.slice(1, 4);
console.log(slicedFruits); // Output: ['blueberry', 'cherry', 'orange']
let sortedFruits = allFruits.sort();
console.log(sortedFruits); // Output: ['apple', 'blueberry', 'cherry', 'lemon', 'lime', 'orange']   
let reversedFruits = allFruits.reverse();
console.log(reversedFruits); // Output: ['lime', 'lemon', 'orange', 'cherry', 'blueberry', 'apple'] 
//Multidimensional arrays
let matrix = [
    [1, 2, 3],  
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[0][0]); // Output: 1
console.log(matrix[1][2]); // Output: 6
console.log(matrix[2][1]); // Output: 8 
//Iterating over a multidimensional array
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}   
// Output:
// 1
// 2    
// 3
// 4
// 5
// 6
// 7
// 8
// 9
//Conclusion
//Arrays are versatile data structures that allow you to store and manipulate collections of data efficiently. They come with a variety of built-in methods that make it easy to perform common operations such as adding, removing, and searching for elements. Understanding how to work with arrays is essential for effective programming in JavaScript.    

// End of Arrays.js
// basic example of arrays in JavaScript:
//Question : for a given array with marks of students, find the average marks. of the entair class.
let marks = [85, 90, 78, 92, 88];
let totoal = 0;
for(let i=0;i<marks.length;i++){
    totoal +=marks[i];
}
let average = totoal/marks.length;
console.log("The average marks of the clas is :"+average);
// Output: The average marks of the clas is :86.6


//for a given array list of price of  5 items , sll items having an discount of 10%. find the total price after discount.
let prices = [100, 200, 150, 250, 300];
let totalPrice = 0;
for(let i=0;i<prices.length;i++){
    totalPrice = prices[i]/10;
    prices[i] = prices[i]-totalPrice;
}
console.log("The price after discount is : "+ prices);
