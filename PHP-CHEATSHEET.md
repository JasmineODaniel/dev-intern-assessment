# PHP for JavaScript developers: a quick cheat sheet

PHP and JavaScript have a lot in common. Here are the main differences you'll meet in Task 3.

| Concept | JavaScript | PHP |
|---|---|---|
| Start of file | (nothing) | `<?php` |
| Variables | `let total = 0;` | `$total = 0;` (every variable starts with `$`) |
| Constants | `const MAX = 25;` | `const MAX = 25;` (no `$`) |
| Join strings | `'Hello ' + name` | `'Hello ' . $name` (a dot, **not** `+`) |
| Add to a string | `text += '!'` | `$text .= '!'` |
| Print output | `console.log('Hi')` | `echo 'Hi';` |
| New line | `'\n'` | `PHP_EOL` or `"\n"` |
| List (array) | `[20, 22, 18]` | `array(20, 22, 18)` or `[20, 22, 18]` |
| Object-like data | `{ name: 'Ben', score: 90 }` | `array('name' => 'Ben', 'score' => 90)` |
| Read a value | `student.name` or `student['name']` | `$student['name']` |
| Length of a list | `scores.length` | `count($scores)` |
| Add to a list | `scores.push(10)` | `$scores[] = 10;` |
| Loop over a list | `for (const score of scores) { }` | `foreach ($scores as $score) { }` |
| Loop with index | `scores.forEach((score, i) => { })` | `foreach ($scores as $i => $score) { }` |
| Function | `function add(a, b) { return a + b; }` | `function add($a, $b) { return $a + $b; }` |
| Round | `Math.round(x * 10) / 10` | `round($x, 1)` |
| Strict equals | `===` | `===` (the same) |
| Comments | `// comment` | `// comment` (the same) |

## Reading PHP errors

PHP error messages usually tell you **what** went wrong and **which line** it happened on. For example:

```
Warning: Something went wrong in /path/grade-report.php on line 12
```

Always read the whole message, and then look at that line first.

## Looking things up

Every built-in PHP function has a page on php.net. For example, `str_pad` is at https://www.php.net/str_pad. The examples near the bottom of each page are often the most useful part.
