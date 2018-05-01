
// Production Code
function getScoreOutOfTen(quizData) {
  return quizData.map((quiz) => {
    return quiz.score / quiz.totalScore * 10;
  })
};

function calculateAverage(quizData) {
  var sum = getScoreOutOfTen(quizData).reduce((total, score) => {
    return total + score;
  })
  return Math.round(sum/quizData.length)
}

// Testing Logic
function itWorksWithTwoNumbers(quizData, outcome) {
  return getScoreOutOfTen(quizData).toString === outcome.toString;
};

function itWorksWithAnArray(quizData, outcome) {
  return getScoreOutOfTen(quizData).toString === outcome.toString;
};

function itReturnsTheAverage(quizData, average) {
  return calculateAverage(quizData) === average;
}

// Expectations
console.log('With par 16 and 20, it returns 8:', itWorksWithTwoNumbers([{ score: 16, totalScore: 20 }], [8]));
console.log('With par 15 and 25, it returns 6:', itWorksWithTwoNumbers([{ score: 15, totalScore: 25 }], [6]));
console.log('It works also when it returns a float:', itWorksWithTwoNumbers([{ score: 18, totalScore: 24 }], [7.5]));
var quizData = [{ score: 16, totalScore: 20 }, { score: 15, totalScore: 25 }, { score: 18, totalScore: 24 }];
var outcome = [8, 6, 7.5];
console.log('It works on an array of objects:', itWorksWithAnArray(quizData, outcome));
var avg = 7;
console.log('It returns the average of all scores, rounding to the nearest Int:', itReturnsTheAverage(quizData, avg));