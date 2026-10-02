# Task 3: Learning a new language, PHP (about 60–75 minutes)

Much of our code is written in PHP. You haven't used it before, and that's fine. This task is about how you **learn**, not what you already know.

`grade-report.php` prints a pass/fail report for a group of students. It's about 50 lines long and does the same kind of thing as the page in Task 2.

Before you start, read `../PHP-CHEATSHEET.md`. It maps JavaScript you already know onto PHP.

## Part A: Get it running

Choose **one** of these:

- **Online (easiest):** go to https://onlinephp.io, paste in the whole file and click Run.
- **On your computer:** install PHP (https://www.php.net/downloads). Then, from this folder, run `php grade-report.php`.

In `NOTES.md`, write which option you used. If you had setup problems, say what they were and how you got past them.

## Part B: Read and explain

Answer these in `NOTES.md` **before** you change any code:

1. Describe in plain English what the script does, from top to bottom (5–10 sentences).
2. What does 45 do in `'OSCE GRADE REPORT' . PHP_EOL`? What is the JavaScript equivalent?
3. How would you write `array('name' => 'Ben Carter', 'scores' => array(25, 25, 25, 25))` in JavaScript?
4. What does `foreach ($students as $student)` do? Write the JavaScript equivalent.
5. What does `str_pad($student['name'], 20)` do? How did you find out?

## Part C: Fix the bug

> **Bug report:** Ella Fitzgerald scored 38%, but the report says PASS. There are also warning messages in the output.

Find the cause and fix it. In `NOTES.md`, explain **why** it happened. In particular, why would code that looks similar work in JavaScript?

## Part D: Add a summary

Add a summary to the end of the report. After your change, the full output should look like `expected-output.txt`:

```
----------------------------------------
Passed: 5
Failed: 1
Class average: 69.8%
Top student: Ben Carter (100%)
```

Your spacing doesn't have to match exactly, but the numbers must be right, and they must be **calculated** by the code. Don't type them in by hand.

## Part E: STRETCH (optional)

Add a **Grade** column that uses the same A/B/C/F rules as `letterGrade` from Task 1. Try translating your JavaScript function into PHP.
