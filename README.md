# TDD-example
This example can be shown during the algorithm day to both explain what an Algorithm and what TDD is.


# Lesson Plan

# Learning Goals
Students should...

* **Understand...**
  * The _**advantages of inductive learning**_
  * The process of _**Test Driven Development**_
  * What an _**algorithm**_ is
  * What _**side effects**_ and _**mutations**_ are
  * The differences between _**pure**_ and _**impure functions**_
  * What _**recursion**_ means
  * Differences between _**imperative**_ and _**functional programming**_
* **Be able to apply...**
  * _**.map, .reduce**_ & _**.filter**_ in some simple situations

# Schedule
What?	| What time? 	| Where? | Attendance 
--- | --- | --- | --- |
**Recap/ Inductive Learning** | 09:30 | Class Room Area | Obligatory
**Intro to Algorithms and TDD**	| 10:00	| Class Room Area | Voluntary
**Algorithms and Functions (map, reduce, filter)** | 11:30 - 11:50 | Lunch Area | Voluntary
**Rewrite the Manual** | 11:50 - 12:15 | Lunch Area | Voluntary
**Functional Programming** | 13:30 - 14:50 | Lunch Area | Voluntary
**American Grades I-III** | 14:05 - 14:25 | Lunch Area | Voluntary
**Recursion** | 14:30 - 14:50 | Lunch Area | Voluntary
**Palindromes** | 15:10 - 15:30 | Lunch Area | Voluntary | Exercise, students
**Start on labs** | 15:30 | Everywhere | Obligatory
**Recap** | 17:30 - 18:00 | Class Room Area | Obligatory


# Content
## **Recap**

_**Aim:** Refresh and show relevance of info learnt the day before, explain advantages and approach to code of inductive learning._
  * Do the OOP Recap
  * Explain inductive learning: Start from the code rather than from the big idea, because you won't be able to keep up during these ten weeks. Practically that means:
    * No extra tutorials or extra readings
    * First simply copying code that you suspect might be similar
    * Secondly understand the code sufficiently to answer the question: What is happening on each line? _And specifically not: how does this work?_
    * Apply known syntax to a slightly different situation

## **Opening hook for learning/TDD** 

_**Aim:** Get students' interest, introduce TDD_
* Explain what the day will look like and that they can choose whether they would like to work on their own or listen to lectures.
* Assignment: 
>_You are creating an overview of the quizScores that a student get over a period of time. However, your webhook only sends you a score (how many points someone got) and a totalScore (how many points someone could have gotten). To make a good comparison, you want to transform this data into scores out of ten._
>
>Given Input: 
>```
>[{ score: 16, totalScore: 20 },{ score: 15, totalScore:  25},{ score: 18, totalScore:  24}]
>```
>Desired Output:
>```
>[8,  6,  7.5]
>```
> _Write your solution down on paper, in pseudo code. Work in pairs_.

* Congratulate students on writing their first Algorithm!
* Do it together, TDD. Start with dividing your page in three parts: Expectations, Testing Logic and Production Code. Follow the steps of [this repository](https://github.com/Codaisseur/TDD-example) and start each time with console logging your expectations, then writing your testing logic and finally writing your production logic. Let students help you with the code they wrote before.
* Send repo-link to students, and tell them they can try the second assignment on their own, later, if they want to.
* Share [this](https://medium.com/@bethqiang/the-absolute-beginners-guide-to-test-driven-development-with-a-practical-example-c39e73a11631) article on slack.
* Tell them to start working on the exercises from the reader.

## **Algorithms and Functions Lecture**

_**Aim:** Explain an algorithm doesn't have to be complicated, introduce students to .map, .reduce, .filter_

![black box](https://cd.sseu.re/input_black_box_output_-_Google_Search_2018-08-13_15-42-13.png)
**Use the black box picture to explain the following points:** 

* An algorithm takes a value and does something with it
* Input can be both a value or a collection
>_Make students give some examples of values and collections!_

![Map Reduce Filter](https://cd.sseu.re/Map_Reduce_filter_emoji_-_Google_Search_2018-08-13_15-53-59.png)

**Use the Map Reduce Filter Sandwich to explain the following points:** 
* Values can be **_transformed_**
* The following actions can be performed on collections:
    * you can **_select/get_** an element
    * you can **_reduce_** all elements to a single value
    * you can **_map_** over your collection to transform all values of a collection
    * you can **_filter_** your collection to keep only some values

## **Functional Programming Lecture**
**_Aim:_** _Explain differences between imperative and functional programming, introduce students to concepts of (impure)functions and side effects._

**To understand functional programming, side effects and mutation:**
  * Write the following code on the white board:
  ```JavaScript
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    const getOdds = (numbers) {
      let odds = []
      for(let i = 0; i < numbers.length + 1; i++){
        if (i % 2 !== 0) {
          odds.push(i)
        }
      }
      return odds
    }
  ```
  * Ask students to parse it (explain what it does, line by line)
  * Ask them to create a new function using map, reduce or filter. Write this next to the other function. Write 'imperative'  above one and 'functional' above the other.
  * Compare the two functions (Ask students for differences, what do they like about each style?):
  ![Imperative vs Declarative](https://cd.sseu.re/Algorithms.md__IB02-Algorithms_2018-08-13_16-23-56.png)
  * Explain that declarative code focuses on the end result, rather than the process (nice to read!), avoids mutations (create new copy of number array) and usually is less code to write/read.
  * Write the following code on the white board, without the comments:
  ```JavaScript
  var tip = 0

  const calculateTip = (mealTotal) => {
    return tip = 0.15 * mealTotal
  }

  calculateTip(150)
  ```
  * Ask for two problems with this code in terms of reusability/maintainability.
      * Console log `tip` before and after the function call. What will it log?
      * Go to a different country, where you don't give 15% tip. What now?
  * Show the solution for both problems:

  ```JavaScript
  const calculatePureTip = (percentage, mealTotal) => {
    return percentage * mealTotal
  }

  calculatePureTip(0.15, 150)
  ```
  * Compare: 
  ![pure vs impure](https://cd.sseu.re/Algorithms.md__IB02-Algorithms_2018-08-13_16-57-21.png)

  * Explain:
  ```JavaScript
    functionalProgramming = declarativeStyle} + pureFunctions
  ```

  
# Materials
* Readest: 
* [TDD Repo](https://github.com/Codaisseur/TDD-example)
* [TDD Article](https://medium.com/@bethqiang/the-absolute-beginners-guide-to-test-driven-development-with-a-practical-example-c39e73a11631)
* [Functional Programming Article](https://codeburst.io/a-beginner-friendly-intro-to-functional-programming-4f69aa109569)
* [Recursion](https://medium.com/front-end-hacking/a-quick-guide-to-recursion-by-example-c0e7949b8ab6)



  ```JavaScript
  // impure
  var tip = 0

  const calculateTip = (mealTotal) => {
    return tip = 0.15 * mealTotal
  }

  const calculateExtraTip = (mealTotal) => {
    return tip = tip + (0.15 * mealTotal)
  }

  console.log(tip)  // logs 0
  calculateTip(150) // returns 22.5
  console.log(tip)  // logs 22.5


  var tip = 1
  console.log(tip)        // logs 1
  calculateExtraTip(150)  // returns 23.5
  console.log(tip)        // logs 23.5
  calculateExtraTip(150)  // returns 46

  ```

  ```JavaScript
  // pure
  const calculatePureTip = (percentage, mealTotal) => {
    return percentage * mealTotal
  }

  calculatePureTip(0.15, 150)
  ```
