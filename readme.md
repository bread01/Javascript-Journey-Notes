
# Javascript Journey Notes
The goal of this section is to record breakthroughs in my logic understanding, while following a learning process that helps me absorb the logic. 

Currently, I've gotten stuck at certain points within two different javascript learning platforms, so this is my calculated attempt to resolve that hinderance. 

### Learning Process
1. ***Order to Learn New Subjects***
   - *Per major topic, go through these links until I feel comfortable understanding the logic on the topic.* 
     - Don't have to go through all, but minimum 2.
   - **Documentation**
     - Go through a topic on Andrei Udemy Course; i.e. 'Arrays'
       - https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery
     - Go through the same topic on The Odin Project
       - https://theodinproject.com/courses/foundations
     - Go through same topic on Pluralsight Javascript: getting started course
       - https://app.pluralsight.com/library/courses/javascript-getting-started/table-of-contents
     - Then go down these options:
       - https://www.youtube.com/watch?v=W6NZfCO5SIk
       - https://scotch.io/courses/getting-started-with-javascript-for-web-development/types-and-variables
       - https://edabit.com/tutorial/javascript
       - https://www.linkedin.com/learning/learning-the-javascript-language-2/learn-the-language-of-the-internet?u=2045532
       - https://www.rithmschool.com/courses/javascript
       - https://www.codecademy.com/learn
       - https://www.coursera.org/learn/website-coding/home/week/3
       - https://www.coursera.org/learn/html-css-javascript-for-web-developers/home/week/4
  
   - **Quizzes/Exercises**
       - https://www.freecodecamp.org/learn/
       - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps
       - https://javascript.info/
       - https://www.w3schools.com/js/default.asp
       - https://edabit.com/challenges
  
   - **Small Projects**
   - **Record logic in notes**
  
2. ***Active Process of Writing Code***
   - Write down logic in english
   - Break down logic into small steps of code
   - console.log every step of the way to make sure it works
   - Write detailed comments on each section of code while learning



## Table of Contents
- [Javascript Journey Notes](#javascript-journey-notes)
    - [Learning Process](#learning-process)
  - [Table of Contents](#table-of-contents)
    - [Section 1 - Comparisons, Operators, Variables](#section-1---comparisons-operators-variables)
    - [Section 1.1](#section-11)
    - [Section 1.1.1](#section-111)
    - [Section 2](#section-2)
    - [Section 2.1](#section-21)
    - [Section 2.2](#section-22)


### Section 1 - Comparisons, Operators, Variables
Terminology:
Operator vs Operand:
  - Operator: function that performs the operation
  - Operand: input to that operator function
  - ex: 3 + 4 = 7; 
  - Operator is + and =
  - Operand is 3 and 4; the inputs to the operation
Concatenation:
  - When things are combined

**Key Operators**:
```
'==' is 'does A equal to B, regardless of type; true or false? ex: 1 == "1" is true
'===' is 'does A equal to B,' including they type; true or false? ex: 1 === "1" is false
'!==' is 'does A not equal to B'; true or false?
'++' is an increment +1
'--' is a decrement -1
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

**Key Syntax for Variables:**
With ES6, use 'let' and 'const' instead of 'var'
  - const: identifier that *can't* be updated/re-declared. Best for assigning variable throughout document, outside of block {}. Block scoped{} just like 'let'
  - let: *can* be updated/re-declared; only used in block {} it's defined in. Best for loops and algorithms.
```
let <variableName> = "output text" + "something";
this means 'variableName' is the sum of those two

don't forget to call the variable name for its output
```

**Variables:**
```
Number(stringName) - Change a string into a number
prompt("displayText") - popup prompt to enter value
alert("displayText") - popup alert to display text

ex: let first = prompt("enter first number");
this stores the entered prompt value into the variable 'first'
```
  - Resources: 
    - Variables:
      - https://javascript.info/variables


### Section 1.1
snippets to help

### Section 1.1.1
Project 1 - relevant project
simple prompt calculator - link to github project

### Section 2

### Section 2.1
snippets to help

### Section 2.2
Project 2 - relevant project tied in with other things before