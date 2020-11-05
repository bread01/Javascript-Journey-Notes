
# Javascript Journey Notes
The goal of this section is to record breakthroughs in my logic understanding, while following a learning process that helps me absorb the logic. 

Currently, I've gotten stuck at certain points within two different javascript learning platforms, so this is my calculated attempt to resolve that hinderance. 

## Table of Contents
- [Javascript Journey Notes](#javascript-journey-notes)
  - [Table of Contents](#table-of-contents)
    - [Learning Process](#learning-process)
    - [Active Process of Writing Code](#active-process-of-writing-code)
  - [Section 1: Basic Terminology and Structure](#section-1-basic-terminology-and-structure)
      - [Terminology](#terminology)
      - [Key Operators and Comparisons](#key-operators-and-comparisons)
      - [Key Syntax for Variables](#key-syntax-for-variables)
      - [Key Syntax for Strings](#key-syntax-for-strings)
      - [Data Stucture: Arrays](#data-stucture-arrays)
      - [Data Structure: Objects](#data-structure-objects)
      - [Methods and String Manipulation](#methods-and-string-manipulation)
      - [Interaction](#interaction)
    - [Section 1: Projects](#section-1-projects)
  - [Section 2: Program Flow](#section-2-program-flow)
      - [Conditionals: if...else](#conditionals-ifelse)
      - [Functions](#functions)
      - [Data Stucture: Objects](#data-stucture-objects)
      - [Loops](#loops)
    - [Section 2: Projects](#section-2-projects)
    - [Section 2: Snippets](#section-2-snippets)
  - [Section 3:](#section-3)
      - [Advanced JS](#advanced-js)
    - [Section 2: Projects](#section-2-projects-1)
    - [Section 2: Snippets](#section-2-snippets-1)

### Learning Process
  1. ***Documentation***: Two minimum for logic understanding
      - Go through a topic on Andrei Udemy Course; i.e. 'Arrays'
        - https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery
     - Go through the same topic on The Odin Project
       - https://theodinproject.com/courses/foundations
     - Go through same topic on Pluralsight and FrontEnd Masters Javascript courses
       - https://app.pluralsight.com/library/courses/javascript-getting-started/table-of-contents
       - https://frontendmasters.com/courses/getting-started-javascript-v2/
     - Then go down these options:
       - https://www.youtube.com/watch?v=W6NZfCO5SIk
       - https://scotch.io/courses/getting-started-with-javascript-for-web-development/types-and-variables
       - https://edabit.com/tutorial/javascript
       - https://www.linkedin.com/learning/learning-the-javascript-language-2/learn-the-language-of-the-internet?u=2045532
       - https://www.rithmschool.com/courses/javascript
       - https://www.coursera.org/learn/website-coding/home/week/3
       - https://www.coursera.org/learn/html-css-javascript-for-web-developers/home/week/4
   - **Check other people's notes**
       - https://github.com/8483/notes
       - https://docs.google.com/document/d/1SSa_gAnH_Eznn5GQrbnAXgAg89Ar-hYS9oGqonxDxH0/edit
       - Read 'You Don't Know JS: up and going' pdf
   - **Quizzes/Exercises**
       - https://www.w3schools.com/js/exercise_js.asp
       - https://www.freecodecamp.org/learn/
       - https://javascript.info/
   - **Record logic in notes**
   - **Small Projects**
     - if I struggle on first project attempt and copy other people's code to get it to work, it's ok. But try to understand the parts that I copied. Then try to write the project again. And again.
  
### Active Process of Writing Code
- Write down logic in english
  - Write pseudocode in comment lines
- Break down logic into small steps of code
- console.log every step of the way to make sure it works
- Write detailed comments on each section of code while learning

## Section 1: Basic Terminology and Structure
#### Terminology
- Operator vs Operand:
  - Operator: function that performs the operation
  - Operand: input to that operator function
  - ex: 3 + 4 = 7; 
  - Operator is + and =
  - Operand is 3 and 4; the inputs to the operation
- Concatenation:
  - When things are combined; join together

#### Key Operators and Comparisons
```
'==' is 'does A equal to B, regardless of type; true or false? ex: 1 == "1" is true
'===' is 'does A equal to B,' including they type; true or false? ex: 1 === "1" is false
'!==' is 'does A not equal to B'; true or false?
'++' is an increment +1; matters if before or after variable
'--' is a decrement -1; matters if before or after variable
'**' puts variable to the power of second operator
'%' is a remainder of division calculation
'&&' means And
  - '(x < 10 && y > 1) is true
'||' means Or
  - '(x === 5 || y === 5) is false'
'!' means Not
  - '!(x === y) is true'
'return variableName' means it executes the referenced variable
```
  - Resources: 
    - Numbers and Math
      - https://www.w3schools.com/js/js_numbers.asp
      - https://www.w3schools.com/js/js_arithmetic.asp
      - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math
    - Operator Precedence
      - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
      - https://javascript.info/operators

#### Key Syntax for Variables
- With ES6, use 'let' and 'const' instead of 'var'
  - const: identifier that *can't* be updated/re-declared. Best for assigning variable throughout document. Block scoped{} just like 'let'
  - let: *can* be updated/re-declared, but only in same block {} it's defined in. Best for loops and algorithms. For a real world example, having a base price on ecommerce site using 'let', and altering it later on via sales.
```
let <variableName> = "output text" + "something";
this means 'variableName' is the sum of those two

i.e.
let a = b;
can be changed to bz without specifing 'let'
a = a + z;
console.log(a); //equals bz

don't forget to call the variable name for its output
```
  - Resources: 
    - Variables:
      - https://javascript.info/variables

#### Key Syntax for Strings
- Utilize "" instead of '' for quotes and text for ease-of-life
- ` can be used for quotes but includes whitespace and strings
```
let userName = `Andrea
is great`;
//gives value 'Andrea
is great'
```
#### Data Stucture: Arrays
- A way to organize multiple items in a list - like an Object but without individual properties
  - items are referenced as numbers, starting at 0. 
    - the numbers in an array are called 'index'
    - if uncertain about the numbers, console.log will give lots of info on the array when called
```
let list = ["tiger", "cat", "bear", "bird"];
console.log(list[1]); //cat
console.log(list[1][2]); //t -second bracket judges count from letters within the array item

//can include various arguments, including functions, but advised to keep each array to same type
let list = ["tiger", 3, true, function apple(){
    console.log("apple");
}];
console.log(list[1]);

//can change item in array just like a variable
var cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel";
console.log(cars); //Open, Volvo, BMW
```
- can add methods to the arrays that are already built into javascript
```
let list = ["tiger", "cat", "bear", "bird"];
console.log(list[1]);
list.shift(); //tiger - pull up array again and tiger gone - everything shifts to left
list.pop(); //bird - removes last item in array, just like shift
list.push("elephant"); //3 - adds 'elephant' to end of array
list.concat(["bee", "deer"]); //adds bee and deer to other array; combines them - best to assign this to a variable as it only combines in the output temporarily, and needs to be referenced
list.sort(); //sorts alphabetically
```
- another way to write arrays includes objects within them - notice how objects are framed
```
//this is an array(database) that contains an object
//notice how arrays use [] and objects {}
let database = [
    {
    username: "John",
    password: "Qwerty",
    }
];
```
- Resources: 
  - Arrays:
    - https://www.w3schools.com/js/js_arrays.asp
  - Array Methods:
    - https://www.w3schools.com/jsref/jsref_obj_array.asp

#### Data Structure: Objects
- Like a variable but with properties and methods. Think of a file cabinet where the drawer is labeled, and each folder in the drawer is a property value of that drawer(object).
  - Object is car
    - i.e. let car
  - Properties would be weight and color
    - i.e. car.color = white
  - Methods would be start and stop
    - i.e. car.stop
```
//can be written multiple ways
var myCar = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969
};
//or
var myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;
//or
var car = {type:"Fiat", model:"500", color:"white"};

//can call object like so
myCar[make]; //Ford
//or
myCar.make;

//can assign an array to object
//using above example..
myCar.type = ["bmw", "toyota", "porsche"];
//then i can reference myCar.type[0]; and get bmw

//can add a function as a property
myCar.sound = function() {
    console.log("AHHHHH");
}
myCar.sound(); //"AHHHH"
```
  - Resources: 
    - Objects:
      - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
      - https://www.w3schools.com/js/js_objects.asp
      - https://javascript.info/object

#### Methods and String Manipulation
- Actions that are performed as variables
  - Adding properties and methods to strings by string.command
  - for example, instead of a static property in an object, a method would be an action as a property
- Using the above example of 'myCar.sound', '.sound' is a method of 'myCar'.
  - or '.log' is a method of 'console.log'
```
let message = "Hello";
message = message.toUpperCase(); //this is manipulation
console.log(message); //shows 'HELLO'
```
  - Resources: 
    - Methods: big list on left panel
      - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
      - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods
      - https://www.w3schools.com/js/js_string_methods.asp
      - https://www.w3schools.com/jsref/jsref_obj_string.asp

#### Interaction
```
Number(stringName) - Change a string into a number
prompt("displayText") - popup prompt to enter value
alert("displayText") - popup alert to display text

ex: let first = prompt("enter first number");
this stores the entered prompt value into the variable 'first'
```
  - Resources: 
    - Examples:
      - https://javascript.info/alert-prompt-confirm
      - https://javascript.info/type-conversions


### Section 1: Projects
- [Simple Prompt Calculator](https://github.com/bread01/Javascript-Journey-Notes/tree/main/Section-1/Simple-Calculator)
- [Arrays with Methods](https://github.com/bread01/Javascript-Journey-Notes/tree/main/Projects/Section-2/Arrays)
- [Facebook Arrays Objects](https://github.com/bread01/Javascript-Journey-Notes/tree/main/Projects/Section-1/objects-arrays-facebook-app)


## Section 2: Program Flow
#### Conditionals: if...else
- It is good to think of this as: 'is the variable True or False?' - this is what you are asking the computer
- Should be referencing a variable, and posing an outcome for that variable
  - Then you have to give an action for that variable based on the outcome
- For example:
```
let name = "Billy";
if (name === "Billy") {
  alert("hi Billy!");
}
```
- If we want another condition, then it is the same thing but utilizing 'else' as new brackets
  - but with the 'else' statement, we are only providing a different action, not another reference to the variable
- As a note, we can also do multiple 'if' statements within each other, in a heirarchy-type format.
```
if (name === "Billy") {
  alert("hi Billy!");
} else {
  alert("you are not Billy");
}

//we can also change a variable as the outcome to the true/false question
let accessAllowed;
let age = prompt('How old are you?', '');

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);
```
- If we have multiple outcomes for the same question, we use 'if else'
  - notice how the 'else if' reference to the variable is before the brackets for the action
```
if (name === "Billy") {
  alert("hi Billy!");
} else if (name === "Suzy") {
  alert("hi Suzy");
} else {
  alert("you are not Billy or Suzy");
}
```
- Given this can end up in a very long code, we can shorten it using Logical Operators; i.e. Or, And, etc
  - operators like '!' can return an opposite true/false value, which is good for things like switches
    - is switch on? !true/!false, then do opposite
```
if (name === "Billy" || name === "Suzy") {
  alert("Hi Billy or Suzy");
}

//'And' is good for checking multiple variables
if (firstName === "Bob" && lastName === "Smith") {
  alert("Hi Bob Smith");
}
```
- Switch statements are an alternative for going through multiple conditions until it reaches a 'True' status
  - this uses 'break;' at end of statement
```
const grade = 87;
switch (true) {
  // if score is 90 or greater
  case grade >= 90:
    console.log("A");
    break;
  // if score is 80 or greater
  case grade >= 80:
    console.log("B");
    break;
  // anything 79 or below is failing
  default:
    console.log("F");
}
```
  - Resources: 
    - Overview:
      - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals
      - https://javascript.info/ifelse
    - Comparisons:
      - https://javascript.info/comparison
    - Logical Operators:
      - https://javascript.info/logical-operators
    - Switch Statement:
      - https://www.digitalocean.com/community/tutorials/how-to-use-the-switch-statement-in-javascript
      - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch

#### Functions
- The point of functions is to have actions bundled up so we can just call it in the future
  - We need actions bundled due to scope - i.e. multiple javascript files that may call the same action or name. This helps us prevent issues, from both calling name's and security.
- Reading a function goes like this:
  - 'alert()' means: 'to execute alert, do whatever is inside ()' - i.e. () = calling the function (arguments)
- If I want the function to execute, I have to call it
- Terminology:
  - Parameters: multiply(a,b) //the a,b are Parameters
    - describe the input elements of the function
  - Arguments: multiply(4,5) //the 4,5 are arguments, in relation to the parameters
    - functions get called with 'arguments'
- A function needs a 'return' statement, or it is 'undefined'
```
function sayHello() {
  console.log("Hello");
}
sayHello(); //calling the function, similar to variables
```
- function expression is slightly different, assigning a function to a variable
```
//anonymous function due to no name for function itself, though it's good to give name to function for debugging
let sayBye = function() { //could do something like 'function name()'
    console.log("Bye");
}
sayBye();
```
- The power in functions is adding arguments to reduce repeating ourselves
```
function sing(song) {   
    console.log(song); //logs the song input that is defined later
}
sing("Laa dee daa");  //read like sing(song)
sing("helloooo");     //when sing is called,() = song input

//another example
function favoriteAnimal(animal) {
  console.log(animal + "is my favorite animal");
}
favoriteAnimal('Goat');

//another example
function multiply(a, b) {
  return a * b;
}
console.log(multiply(5, 10));

//another example
function plusThree(num) {
  return num + 3;
}
var answer = plusThree(5); // 8
```
- In the above example:
  - the input is (a, b)
  - the function gives an action of what to do once the input is defined
    - by adding 'return', that just returns the value of the input
      - remember that adding 'return' is the final way to end a function, so multiple 'return's' will only execute the first one

- Adding an 'if statement' shows a good example of function execution and input
```
function multiply(a,b) {
  if (a > 10 || b > 10) {
      return "that's too hard";
  } else {
      return a * b;
  }
}
console.log(multiply(5, 10));

//can turn the same function into a variable by just adding it before the function call
let abZ = function multiply(a,b) { //can remove 'multiply' term
  same as above
}
abZ (5, 10);
```
- functions can access outer variables as well
```
let userName = "John";
function showMessage() {
  let message = "Hello, " + userName;
  alert(message);
}
showMessage(); //Hello, John

//can change the outside variable as well
let userName = "John";
function showMessage() {
  userName = "Bob";
  let message = "Hello, " + userName;
  alert(message);
}
showMessage(); //Hello, Bob
console.log(userName); //Bob
```
  - Resources: 
    - Overview:
      - https://javascript.info/function-basics
      - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions
      - https://javascript.info/function-expressions
    - Arrow Functions:
      - https://javascript.info/arrow-functions-basics


  




#### Data Stucture: Objects

#### Loops

### Section 2: Projects
- [Keyless Car](https://github.com/bread01/Javascript-Journey-Notes/tree/main/Projects/Section-2/Keyless-Car)
- [Keyless Car Improvement](https://github.com/bread01/Javascript-Journey-Notes/tree/main/Projects/Section-2/Keyless-Car-Improvement)
- [The Odin Project Problems](https://github.com/bread01/Javascript-Journey-Notes/tree/main/Projects/Section-2/odin-project-problems-part3)
- [Facebook News Feed]()

### Section 2: Snippets



## Section 3: 
#### Advanced JS

### Section 2: Projects

### Section 2: Snippets