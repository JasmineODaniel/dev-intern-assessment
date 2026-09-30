// Page logic for the OSCE results page. Uses the functions in scoring.js.

const students = [
    { name: 'Amara Okafor', scores: [20, 22, 18, 21] },
    { name: 'Ben Carter', scores: [25, 25, 25, 25] },
    { name: 'Chloe Nguyen', scores: [12, 14, 11, 13] },
    { name: 'Daniel Mensah', scores: [23, 24, 22, 23] },
    { name: 'Ella Fitzgerald', scores: [8, 10, 9, 11] }
];

function buildResult(student) {
    const total = calculateTotal(student.scores);
    const percentage = calculatePercentage(total, student.scores.length);
    return {
        name: student.name,
        scores: student.scores,
        total: total,
        percentage: percentage,
        passed: hasPassed(percentage)
    };
}

function addCell(row, text) {
    const cell = document.createElement('td');
    cell.textContent = text;
    row.appendChild(cell);
    return cell;
}

function renderTable(results, ranked) {
    const tableBody = document.getElementById('results-body');
    tableBody.innerHTML = '';

    results.forEach((result) => {
        const row = document.createElement('tr');
        addCell(row, result.name);
        result.scores.forEach((score) => {
            addCell(row, score);
        });
        addCell(row, result.total);
        addCell(row, result.percentage + '%');
        const outcomeCell = addCell(row, result.passed ? 'PASS' : 'FAIL');
        outcomeCell.className = result.passed ? 'pass' : 'fail';
        addCell(row, ranked.indexOf(result) + 1);
        tableBody.appendChild(row);
    });
}

function render() {
    const results = students.map(buildResult);
    const classAverage = calculateClassAverage(results);
    const topScores = getTopScores(results, 3);
    const ranked = rankStudents(results);

    renderTable(results, ranked);
    document.getElementById('class-average').textContent = classAverage + '%';
    document.getElementById('top-scores').textContent = topScores.map((score) => score + '%').join(', ');
}

function setUpForm() {
    const headerRow = document.getElementById('station-headers');
    const inputContainer = document.getElementById('score-inputs');

    STATION_NAMES.forEach((stationName) => {
        const header = document.createElement('th');
        header.textContent = stationName;
        headerRow.insertBefore(header, document.getElementById('total-header'));

        const label = document.createElement('label');
        label.textContent = stationName + ' ';
        const input = document.createElement('input');
        input.type = 'number';
        input.className = 'score-input';
        input.required = true;
        label.appendChild(input);
        inputContainer.appendChild(label);
    });

    const form = document.getElementById('add-student-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const nameInput = document.getElementById('student-name');
        const scoreInputs = Array.from(document.querySelectorAll('.score-input'));
        students.push({
            name: nameInput.value.trim(),
            scores: scoreInputs.map((input) => input.value)
        });
        form.reset();
        render();
    });
}

setUpForm();
render();
