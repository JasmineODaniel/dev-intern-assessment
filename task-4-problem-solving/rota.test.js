// Tests for rota.js. These tests check the RULES, so any correct rota passes, not just one particular answer.
// Please don't change the existing tests; you are welcome to ADD your own at the bottom.

if (typeof require === 'function') {
    Object.assign(globalThis, require('../shared/test-runner.js'), require('./rota.js'));
}

// Checks every rule from the README and throws an error describing the first rule that is broken.
function checkRota(rota, students, stations) {
    expectTrue(Array.isArray(rota), 'The rota should be an array of rounds, but got ' + JSON.stringify(rota));
    expectTrue(rota.length === stations.length, 'Expected ' + stations.length + ' rounds but got ' + rota.length);

    const visits = {};
    students.forEach((student) => {
        visits[student] = [];
    });

    rota.forEach((round, roundIndex) => {
        const roundName = 'Round ' + (roundIndex + 1);
        expectTrue(Array.isArray(round), roundName + ' should be an array');
        expectTrue(round.length === students.length, roundName + ' should have ' + students.length + ' students in it but has ' + round.length);

        const stationsUsed = [];
        const studentsUsed = [];
        round.forEach((assignment) => {
            expectTrue(students.includes(assignment.student), roundName + ' contains an unknown student: ' + JSON.stringify(assignment.student));
            expectTrue(stations.includes(assignment.station), roundName + ' contains an unknown station: ' + JSON.stringify(assignment.station));
            expectTrue(!stationsUsed.includes(assignment.station), roundName + ' puts two students at ' + assignment.station);
            expectTrue(!studentsUsed.includes(assignment.student), roundName + ' puts ' + assignment.student + ' at two stations');
            stationsUsed.push(assignment.station);
            studentsUsed.push(assignment.student);
            visits[assignment.student].push(assignment.station);
        });
    });

    students.forEach((student) => {
        stations.forEach((station) => {
            const count = visits[student].filter((visited) => visited === station).length;
            expectTrue(count === 1, student + ' visits ' + station + ' ' + count + ' times (should be exactly once)');
        });
    });
}

test('3 students, 3 stations', () => {
    const students = ['Amara', 'Ben', 'Chloe'];
    const stations = ['History taking', 'Examination', 'Communication'];
    checkRota(createRota(students, stations), students, stations);
});

test('5 students, 5 stations', () => {
    const students = ['Amara', 'Ben', 'Chloe', 'Daniel', 'Ella'];
    const stations = ['History taking', 'Examination', 'Communication', 'Data interpretation', 'Prescribing'];
    checkRota(createRota(students, stations), students, stations);
});

test('1 student, 1 station', () => {
    checkRota(createRota(['Amara'], ['Examination']), ['Amara'], ['Examination']);
});

test('fewer students than stations', () => {
    const students = ['Amara', 'Ben'];
    const stations = ['History taking', 'Examination', 'Communication', 'Data interpretation'];
    checkRota(createRota(students, stations), students, stations);
});

test('no students gives an empty rota', () => {
    expectEqual(createRota([], ['Examination', 'Communication']), []);
});

test('more students than stations gives null', () => {
    expectEqual(createRota(['Amara', 'Ben', 'Chloe'], ['Examination', 'Communication']), null);
});

test('does not change the arrays passed in', () => {
    const students = ['Amara', 'Ben', 'Chloe'];
    const stations = ['History taking', 'Examination', 'Communication'];
    createRota(students, stations);
    expectEqual(students, ['Amara', 'Ben', 'Chloe']);
    expectEqual(stations, ['History taking', 'Examination', 'Communication']);
});

test('[stretch] rest stations: 5 students, 3 stations', () => {
    const students = ['Amara', 'Ben', 'Chloe', 'Daniel', 'Ella'];
    const stations = ['History taking', 'Examination', 'Communication'];
    const allStations = stations.concat(['Rest 1', 'Rest 2']);
    checkRota(createRotaWithRests(students, stations), students, allStations);
});

test('[stretch] rest stations: not needed when there are enough stations', () => {
    const students = ['Amara', 'Ben'];
    const stations = ['History taking', 'Examination', 'Communication'];
    checkRota(createRotaWithRests(students, stations), students, stations);
});

// Add your own tests below this line if you like.


showResults();
