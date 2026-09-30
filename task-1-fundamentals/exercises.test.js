// Tests for exercises.js. Please don't change the existing tests; you are welcome to ADD your own at the bottom.

if (typeof require === 'function') {
    Object.assign(globalThis, require('../shared/test-runner.js'), require('./exercises.js'));
}

// 1. isPassingScore
test('isPassingScore: above the pass mark', () => {
    expectEqual(isPassingScore(75, 50), true);
});
test('isPassingScore: below the pass mark', () => {
    expectEqual(isPassingScore(49, 50), false);
});
test('isPassingScore: exactly on the pass mark', () => {
    expectEqual(isPassingScore(50, 50), true);
});

// 2. formatFullName
test('formatFullName: lower case names', () => {
    expectEqual(formatFullName('ada', 'lovelace'), 'Ada Lovelace');
});
test('formatFullName: extra spaces', () => {
    expectEqual(formatFullName('  GRACE ', ' HOPPER'), 'Grace Hopper');
});
test('formatFullName: mixed case', () => {
    expectEqual(formatFullName('aLAN', 'tURING'), 'Alan Turing');
});

// 3. countPassed
test('countPassed: some passed', () => {
    expectEqual(countPassed([40, 50, 60, 70], 50), 3);
});
test('countPassed: none passed', () => {
    expectEqual(countPassed([10, 20], 50), 0);
});
test('countPassed: empty array', () => {
    expectEqual(countPassed([], 50), 0);
});

// 4. averageScore
test('averageScore: whole number', () => {
    expectEqual(averageScore([10, 20, 30]), 20);
});
test('averageScore: half', () => {
    expectEqual(averageScore([1, 2]), 1.5);
});
test('averageScore: rounds to 1 decimal place', () => {
    expectEqual(averageScore([1, 2, 2]), 1.7);
});
test('averageScore: empty array', () => {
    expectEqual(averageScore([]), 0);
});

// 5. highestScorer
test('highestScorer: finds the top student', () => {
    const students = [
        { name: 'Amara', score: 81 },
        { name: 'Ben', score: 100 },
        { name: 'Chloe', score: 50 }
    ];
    expectEqual(highestScorer(students), 'Ben');
});
test('highestScorer: a tie returns the first student', () => {
    const students = [
        { name: 'Daniel', score: 90 },
        { name: 'Ella', score: 90 }
    ];
    expectEqual(highestScorer(students), 'Daniel');
});
test('highestScorer: a single student who scored 0', () => {
    expectEqual(highestScorer([{ name: 'Farah', score: 0 }]), 'Farah');
});
test('highestScorer: empty array', () => {
    expectEqual(highestScorer([]), null);
});

// 6. groupByStation
test('groupByStation: groups students by station', () => {
    const results = [
        { student: 'Amara', station: 'Examination', score: 18 },
        { student: 'Ben', station: 'Examination', score: 22 },
        { student: 'Amara', station: 'Communication', score: 15 },
        { student: 'Chloe', station: 'History taking', score: 20 }
    ];
    expectEqual(groupByStation(results), {
        'Examination': ['Amara', 'Ben'],
        'Communication': ['Amara'],
        'History taking': ['Chloe']
    });
});
test('groupByStation: empty array', () => {
    expectEqual(groupByStation([]), {});
});

// 7. letterGrade
test('letterGrade: A', () => {
    expectEqual(letterGrade(85), 'A');
});
test('letterGrade: exactly 70 is an A', () => {
    expectEqual(letterGrade(70), 'A');
});
test('letterGrade: 69.9 is a B', () => {
    expectEqual(letterGrade(69.9), 'B');
});
test('letterGrade: C', () => {
    expectEqual(letterGrade(55), 'C');
});
test('letterGrade: exactly 50 is a C', () => {
    expectEqual(letterGrade(50), 'C');
});
test('letterGrade: F', () => {
    expectEqual(letterGrade(49), 'F');
});
test('letterGrade: 0 and 100 are valid', () => {
    expectEqual(letterGrade(0), 'F');
    expectEqual(letterGrade(100), 'A');
});
test('letterGrade: out of range', () => {
    expectEqual(letterGrade(101), 'Invalid');
    expectEqual(letterGrade(-1), 'Invalid');
});
test('letterGrade: not a number', () => {
    expectEqual(letterGrade('75'), 'Invalid');
    expectEqual(letterGrade(undefined), 'Invalid');
});

// 8. parseScoreLine (stretch)
test('[stretch] parseScoreLine: a normal line', () => {
    expectEqual(parseScoreLine('Ada Lovelace, History taking, 17/20'), {
        name: 'Ada Lovelace',
        station: 'History taking',
        score: 17,
        maxScore: 20,
        percentage: 85
    });
});
test('[stretch] parseScoreLine: extra spaces', () => {
    expectEqual(parseScoreLine('  Grace Hopper ,Examination,  9/12 '), {
        name: 'Grace Hopper',
        station: 'Examination',
        score: 9,
        maxScore: 12,
        percentage: 75
    });
});
test('[stretch] parseScoreLine: rounding', () => {
    expectEqual(parseScoreLine('Alan Turing, Communication, 2/3').percentage, 66.7);
});
test('[stretch] parseScoreLine: nonsense returns null', () => {
    expectEqual(parseScoreLine('nonsense'), null);
});
test('[stretch] parseScoreLine: score is not a number', () => {
    expectEqual(parseScoreLine('Ada Lovelace, History taking, abc/20'), null);
});
test('[stretch] parseScoreLine: max score of zero', () => {
    expectEqual(parseScoreLine('Ada Lovelace, History taking, 5/0'), null);
});

// Add your own tests below this line if you like.


showResults();
