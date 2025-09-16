//what is an operator?
//An operator is a special symbol that performs specific operations on one, two, or more operands and then returns a result.    
//Operators are used to manipulate data and variables in programming languages like JavaScript.

//Types of Operators in JavaScript:
//1. Arithmetic Operators
//2. Assignment Operators
//3. Comparison Operators
//4. Logical Operators
//5. Bitwise Operators
//6. String Operators
//7. Conditional (Ternary) Operators
//8. Type Operators
//9. Unary Operators
//10. Relational Operators 
//11. Spread Operators
//12. Destructuring Assignment  
//13. Nullish Coalescing Operator
//14. Optional Chaining Operator
//15. Exponentiation Operator
//16. Comma Operator
//17. Delete Operator
//18. Void Operator 
//19. Instanceof Operator
//20. In Operator   
//21. New Operator
//22. This Operator 
//23. Yield Operator
//24. Await Operator
//25. Rest Operator 
//26. Typeof Operator
//27. Bitwise NOT Operator
//28. Bitwise AND Operator  
//29. Bitwise OR Operator
//30. Bitwise XOR Operator
//31. Left Shift Operator
//32. Right Shift Operator
//33. Unsigned Right Shift Operator
//34. Logical NOT Operator
//35. Logical AND Operator
//36. Logical OR Operator
//37. Equality Operator
//38. Strict Equality Operator
//39. Inequality Operator   
//40. Strict Inequality Operator
//41. Greater Than Operator
//42. Less Than Operator    
//43. Greater Than or Equal To Operator
//44. Less Than or Equal To Operator
//45. Addition Operator 
//46. Subtraction Operator
//47. Multiplication Operator
//48. Division Operator
//49. Modulus Operator
//50. Increment Operator
//51. Decrement Operator    
//52. Assignment Operator
//53. Addition Assignment Operator
//54. Subtraction Assignment Operator
//55. Multiplication Assignment Operator
//56. Division Assignment Operator
//57. Modulus Assignment Operator
//58. Exponentiation Assignment Operator
//59. Left Shift Assignment Operator
//60. Right Shift Assignment Operator
//61. Unsigned Right Shift Assignment Operator
//62. Logical AND Assignment Operator
//63. Logical OR Assignment Operator
//64. Logical Nullish Assignment Operator
//65. Spread Syntax
//66. Destructuring Assignment
//67. Nullish Coalescing Operator
//68. Optional Chaining Operator
//69. Exponentiation Operator
//70. Comma Operator
//71. Delete Operator
//72. Void Operator
//73. Instanceof Operator
//74. In Operator
//75. New Operator
//76. This Operator
//77. Yield Operator
//78. Await Operator
//79. Rest Operator
//80. Typeof Operator

//Examples of some common operators in JavaScript:
//Arithmetic Operators
let a = 10;
let b = 5;
console.log("Addition:", a + b); // Addition: 15
console.log("Subtraction:", a - b); // Subtraction: 5
console.log("Multiplication:", a * b); // Multiplication: 50
console.log("Division:", a / b); // Division: 2
console.log("Modulus:", a % b); // Modulus: 0
console.log("Exponentiation:", a ** b); // Exponentiation: 100000
//Assignment Operators
let c = 10;
c += 5; // c = c + 5
console.log("Addition Assignment:", c);
c -= 3; // c = c - 3
console.log("Subtraction Assignment:", c);
c *= 2; // c = c * 2
console.log("Multiplication Assignment:", c);
c /= 4; // c = c / 4
console.log("Division Assignment:", c);
c %= 3; // c = c % 3
console.log("Modulus Assignment:", c);  
//Comparison Operators
console.log("Equal to:", a == b); // Equal to: false
console.log("Not equal to:", a != b); // Not equal to: true
console.log("Strict equal to:", a === b); // Strict equal to: false
console.log("Strict not equal to:", a !== b); // Strict not equal to: true
console.log("Greater than:", a > b); // Greater than: true
console.log("Less than:", a < b); // Less than: false
console.log("Greater than or equal to:", a >= b); //Greater than or equal to: true
console.log("Less than or equal to:", a <= b); // Less than or equal to: false
//Logical Operators
let x = true;
let y = false;
console.log("Logical AND:", x && y); // Logical AND: false
console.log("Logical OR:", x || y); // Logical OR: true
console.log("Logical NOT:", !x); // Logical NOT: false
//String Operators
let str1 = "Hello, ";  
let str2 = "World!";
console.log("String Concatenation:", str1 + str2); // String Concatenation: Hello, World!
//Conditional (Ternary) Operator
let age = 18;   
let canVote = (age >= 18) ? "Yes" : "No";
console.log("Can Vote:", canVote); // Can Vote: Yes
//Type Operators
console.log("Type of a:", typeof a); // Type of a: number
console.log("Type of str1:", typeof str1); // Type of str1: string
//Instanceof Operator
let date = new Date();  
console.log("Is date an instance of Date?", date instanceof Date); // Is date an instance of Date? true
//In Operator
let obj = {name: "Alice", age: 25};
console.log("Is 'name' in obj?", 'name' in obj); // Is 'name' in obj? true