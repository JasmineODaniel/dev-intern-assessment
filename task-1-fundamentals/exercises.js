// Task 1: Fundamentals
// Fill in each function so its tests pass. Read the comment above each one carefully.
// Open tests.html in your browser to run the tests (refresh the page after each change).

// 1. Return true if the score is at or above the pass mark, otherwise false.
//    isPassingScore(75, 50) -> true
//    isPassingScore(49, 50) -> false
function isPassingScore(score, passMark) {
    // TODO
    return score>= passMark;
}


// 2. Return the full name with extra spaces removed and each name capitalised
//    (first letter upper case, the rest lower case).
//    formatFullName('  ada ', 'LOVELACE') -> 'Ada Lovelace'
function formatFullName(firstName, lastName) {
    // TODO
    return firstName.trim().charAt(0).toUpperCase() + firstName.slice(1).toLowerCase() + ' ' + lastName.trim().charAt(0).toUpperCase() + lastName.trim().slice(1).toLowerCase();
}

// 3. Return how many scores in the array are at or above the pass mark.
//    countPassed([40, 50, 60, 70], 50) -> 3
function countPassed(scores, passMark) {
    // TODO
    return scores.filter(score => score >= passMark).length;

}

// 4. Return the average of the scores, rounded to 1 decimal place.
//    If the array is empty, return 0.
//    averageScore([10, 20, 30]) -> 20
//    averageScore([1, 2, 2]) -> 1.7
function averageScore(scores) {
    // TODO
    if (scores.length === 0) {
        return 0;
    }
    return Number (
        (scores.reduce(
            (zad, scores) => zad + scores, 0 / scores.length).toFixed(1)
        ));
}

// 5. Each student is an object like { name: 'Amara', score: 81 }.
//    Return the NAME of the student with the highest score.
//    If two students share the highest score, return the one that appears first.
//    If the array is empty, return null.
function highestScorer(students) {
    // TODO
    if (students.length === 0) {
        return null;
    }
     let highestScorer = students[0];
      for (let student of students) {
        if (student.score > highestScorer.score) {
          highestScorer = student;
        }

        return highestScorer.name;
      }
    
}

// 6. Each result is an object like { student: 'Amara', station: 'Examination', score: 18 }.
//    Return an object where each key is a station name and each value is an array
//    of the students who attempted that station, in the order they appear.
//    groupByStation([
//        { student: 'Amara', station: 'Examination', score: 18 },
//        { student: 'Ben', station: 'Examination', score: 22 },
//        { student: 'Amara', station: 'Communication', score: 15 }
//    ])
//    -> { 'Examination': ['Amara', 'Ben'], 'Communication': ['Amara'] }
function groupByStation(results) {
    // TODO

}

// 7. Convert a percentage into a letter grade:
//      70 and above -> 'A'
//      60 to below 70 -> 'B'
//      50 to below 60 -> 'C'
//      below 50 -> 'F'
//    If the percentage is not a number, or is below 0 or above 100, return 'Invalid'.
function letterGrade(percentage) {
    // TODO
    if(typeof percentage !== 'number' || percentage < 0 || percentage > 100) {
        return 'Invalid';
    }
    if (percentage >= 70) {
        return 'A';
    }
    if (percentage >= 60) {
        return 'B';
    }
    if (percentage >= 50) {
        return 'C';
    }
    return 'F';
}

// 8. STRETCH (optional): Turn a line of text into a result object.
//    parseScoreLine('Ada Lovelace, History taking, 17/20')
//    -> { name: 'Ada Lovelace', station: 'History taking', score: 17, maxScore: 20, percentage: 85 }
//    Extra spaces around each part should be ignored. Round the percentage to 1 decimal place.
//    If the line cannot be understood, return null.
function parseScoreLine(line) {
    // TODO
}

// This last part lets the tests also run in Node. Please leave it here.
if (typeof module !== 'undefined') {
    module.exports = { isPassingScore, formatFullName, countPassed, averageScore, highestScorer, groupByStation, letterGrade, parseScoreLine };
}
