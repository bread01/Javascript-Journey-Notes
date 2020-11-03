
# Javascript Journey Notes
The goal of this section is to record breakthroughs in my logic understanding, while following a learning process that helps me absorb the logic. 

Currently, I've gotten stuck at certain points within two different javascript learning platforms, so this is my calculated attempt to resolve that hinderance. 

## Table of Contents
- [Javascript Journey Notes](#javascript-journey-notes)
  - [Table of Contents](#table-of-contents)
    - [Learning Process](#learning-process)
  - [Section 1: Basic Terminology and Structure](#section-1-basic-terminology-and-structure)
      - [Terminology](#terminology)
      - [Key Operators and Comparisons](#key-operators-and-comparisons)
      - [Key Syntax for Variables](#key-syntax-for-variables)
      - [Key Syntax for Strings](#key-syntax-for-strings)
      - [Objects](#objects)
      - [Methods and String Manipulation](#methods-and-string-manipulation)
      - [Interaction](#interaction)
    - [Section 1: Projects](#section-1-projects)
  - [Section 2: Program Flow](#section-2-program-flow)
      - [Conditionals: if...else](#conditionals-ifelse)
    - [Section 2: Projects](#section-2-projects)
    - [Section 2: Snippets](#section-2-snippets)

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
       - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps
       - https://javascript.info/
   - **Record logic in notes**
   - **Small Projects**
     - if I struggle on first project attempt and copy other people's code to get it to work, it's ok. But try to understand the parts that I copied. Then try to write the project again. And again.
  
  2. ***Active Process of Writing Code***
      - Write down logic in english
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

#### Objects
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
  - Interaction: 
    - Examples:
      - https://javascript.info/alert-prompt-confirm
      - https://javascript.info/type-conversions


### Section 1: Projects
[Simple Prompt Calculator](https://github.com/bread01/Javascript-Journey-Notes/tree/main/Section-1/Simple-Calculator)


## Section 2: Program Flow
#### Conditionals: if...else
- blurgh

### Section 2: Projects

### Section 2: Snippets