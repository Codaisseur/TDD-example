/* 
  Assignment:
    Calculate the score  per quiz (out of ten)
    Input: quizData = [{score: 16, totalScore: 20}, {score: 15, totalScore: 25}, {score: 18, totalScore: 24}] 
    Desired output: score = [8, 6, 7.5]
*/

// Production Code
function getScoreOutOfTen(score, totalScore) {
  return score / totalScore * 10;
}

// Testing Logic
function itWorksWithTwoNumbers(score, totalScore, outcome) {
  return getScoreOutOfTen(score, totalScore) === outcome;
}

// Expectations
console.log('With par 16 and 20, it returns 8:', itWorksWithTwoNumbers(16, 20, 8));
console.log('With par 15 and 25, it returns 6:', itWorksWithTwoNumbers(15, 25, 6));
console.log('It works also when it returns a float:', itWorksWithTwoNumbers(18, 24, 7.5));