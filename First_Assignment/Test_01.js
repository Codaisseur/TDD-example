/* 
  Assignment:
    Calculate the score  per quiz (out of ten)
    Input: quizData = [{score: 16, totalScore: 20}, {score: 15, totalScore: 25}, {score: 18, totalScore: 24}] 
    Desired output: score = [8, 6, 7.5]
*/

// Production Code

// Testing Logic
function worksForSixteenAndTwenty() {
  return getScoreOutOfTen(16, 20) === 8;
}

// Expectations
console.log('With par 16 and 20, it returns 8:', worksForSixteenAndTwenty());