// Task 4: OSCE station rota
// Read README.md first. It explains the rules.

// students: an array of student names, e.g. ['Amara', 'Ben', 'Chloe']
// stations: an array of station names, e.g. ['History taking', 'Examination', 'Communication']
//
// Return an array of rounds. Each round is an array of { student, station } objects, e.g.
// [
//     [ { student: 'Amara', station: 'History taking' }, { student: 'Ben', station: 'Examination' }, ... ],   <- round 1
//     [ ... ],                                                                                                 <- round 2
// ]
function createRota(students, stations) {
    // TODO
}

// STRETCH (optional): like createRota, but works when there are more students than stations
// by adding rest stations called 'Rest 1', 'Rest 2', and so on.
function createRotaWithRests(students, stations) {
    // TODO
}

// This last part lets the tests also run in Node. Please leave it here.
if (typeof module !== 'undefined') {
    module.exports = { createRota, createRotaWithRests };
}
