<?php
// OSCE grade report.
// Run it with: php grade-report.php

const MAX_SCORE_PER_STATION = 25;

$pass_mark = 50;

$students = array(
    array('name' => 'Amara Okafor', 'scores' => array(20, 22, 18, 21)),
    array('name' => 'Ben Carter', 'scores' => array(25, 25, 25, 25)),
    array('name' => 'Chloe Nguyen', 'scores' => array(12, 14, 11, 13)),
    array('name' => 'Daniel Mensah', 'scores' => array(23, 24, 22, 23)),
    array('name' => 'Ella Fitzgerald', 'scores' => array(8, 10, 9, 11)),
    array('name' => 'Farah Haddad', 'scores' => array(15, 13, 16, 14)),
);

function calculate_total($scores) {
    $total = 0;
    foreach ($scores as $score) {
        $total += $score;
    }
    return $total;
}

function calculate_percentage($total, $station_count) {
    $max_possible = $station_count * MAX_SCORE_PER_STATION;
    return round($total / $max_possible * 100, 1);
}

function has_passed($percentage) {
    return $percentage >= $pass_mark;
}

echo 'OSCE GRADE REPORT' . PHP_EOL;
echo str_repeat('=', 40) . PHP_EOL;

foreach ($students as $student) {
    $total = calculate_total($student['scores']);
    $percentage = calculate_percentage($total, count($student['scores']));

    if (has_passed($percentage)) {
        $result = 'PASS';
    }
    else {
        $result = 'FAIL';
    }

    echo str_pad($student['name'], 20) . str_pad($percentage . '%', 8) . $result . PHP_EOL;
}
