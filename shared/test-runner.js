// A tiny test runner. You do not need to change this file.
// It works in the browser (open a tests page) and in Node (node some-file.test.js).

const testResults = [];

function isDeepEqual(first, second) {
    if (first === second) {
        return true;
    }
    if (typeof first !== 'object' || typeof second !== 'object' || first === null || second === null) {
        return false;
    }
    if (Array.isArray(first) !== Array.isArray(second)) {
        return false;
    }
    const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second);
    if (firstKeys.length !== secondKeys.length) {
        return false;
    }
    return firstKeys.every((key) => isDeepEqual(first[key], second[key]));
}

function describeValue(value) {
    if (value === undefined) {
        return 'undefined';
    }
    return JSON.stringify(value);
}

function test(name, callback) {
    try {
        callback();
        testResults.push({ name: name, passed: true });
    } catch (e) {
        testResults.push({ name: name, passed: false, message: e.message });
    }
}

function expectEqual(actual, expected) {
    if (!isDeepEqual(actual, expected)) {
        throw new Error('Expected ' + describeValue(expected) + ' but got ' + describeValue(actual));
    }
}

function expectTrue(value, message) {
    if (value !== true) {
        throw new Error(message);
    }
}

function showResults() {
    const passedCount = testResults.filter((result) => result.passed).length;
    const summary = passedCount + ' of ' + testResults.length + ' tests passed';

    if (typeof document === 'undefined') {
        testResults.forEach((result) => {
            if (result.passed) {
                console.log('  PASS  ' + result.name);
            }
            else {
                console.log('  FAIL  ' + result.name + '\n        ' + result.message);
            }
        });
        console.log('\n' + summary);
        return;
    }

    const container = document.getElementById('results');
    const heading = document.createElement('h2');
    heading.textContent = summary;
    container.appendChild(heading);

    testResults.forEach((result) => {
        const row = document.createElement('div');
        row.className = result.passed ? 'result pass' : 'result fail';
        row.textContent = (result.passed ? 'PASS  ' : 'FAIL  ') + result.name;
        if (!result.passed) {
            const detail = document.createElement('div');
            detail.className = 'detail';
            detail.textContent = result.message;
            row.appendChild(detail);
        }
        container.appendChild(row);
    });
}

if (typeof module !== 'undefined') {
    module.exports = { test, expectEqual, expectTrue, showResults, isDeepEqual };
}
