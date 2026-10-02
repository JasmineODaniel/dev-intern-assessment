// Scoring rules for the OSCE results page.

const PASS_MARK = 50;
const MAX_SCORE_PER_STATION = 25;
const STATION_NAMES = ['History taking', 'Examination', 'Communication', 'Data interpretation'];

function calculateTotal(scores) {
    return scores.reduce((sum, score) => sum + score, 0);
}

function calculatePercentage(total, stationCount) {
    const maxPossible = stationCount * MAX_SCORE_PER_STATION;
    return Math.round((total / maxPossible) * 1000) / 10;
}

function hasPassed(percentage) {
    return percentage >= PASS_MARK;
}

function calculateClassAverage(results) {
    if (results.length === 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < results.length; i++) {
        sum += results[i].percentage;
    }
    return Math.round((sum / results.length) * 10) / 10;
    
}

function getTopScores(results, count) {
    const percentages = results.map((result) => result.percentage);
    return percentages.sort().reverse().slice(0, count);
}

function rankStudents(results) {
    return results.sort((first, second) => second.percentage - first.percentage);
}
