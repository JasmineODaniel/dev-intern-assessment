# Hints

Only open a hint after you've tried on your own. Open them **one level at a time**, and write down in NOTES.md which ones you used. Using hints won't count against you.

(Click on a line to open that hint. If clicking doesn't work in your editor, open this file's preview, or read it on GitHub.)

---

## General

<details><summary>Stuck on anything</summary>

- Read the error message word by word. Which file? Which line?
- Add `console.log(...)` to see what a value actually is, compared with what you expected.
- Try the smallest possible example. For instance, call your function with just one input.
- Explain the problem out loud, or in writing in NOTES.md. Often that's enough to show you the answer.
</details>

---

## Git

<details><summary>Git, hint 1: the everyday loop</summary>

`git status` shows what has changed. `git add <file>` (or `git add .`) chooses what goes in the next commit. `git commit -m "message"` saves a snapshot. `git push` uploads it. Run `git status` whenever you're unsure what's going on.
</details>

<details><summary>Git, hint 2: "rejected" or "failed to push"</summary>

Read the message carefully. If your new GitHub repository wasn't empty (for example, you ticked "Add a README"), the histories don't match. The easiest fix is to delete that repository and create it again **empty**. Also check that `git remote -v` shows your own repository as `origin`.
</details>

<details><summary>Git, hint 3: the push asks for a password</summary>

GitHub doesn't accept your account password on the command line. Sign in through the browser window that Git opens, or search for "GitHub personal access token".
</details>

---

## Task 1

<details><summary>formatFullName, hint 1</summary>

Look up these string methods on MDN: `trim()`, `toUpperCase()`, `toLowerCase()`, `slice()` (or `charAt()`).
</details>

<details><summary>formatFullName, hint 2</summary>

Write a small helper function that capitalises **one** word. Then use it twice.
</details>

<details><summary>averageScore, hint 1</summary>

For rounding to 1 decimal place, try working through `Math.round(value * 10) / 10` by hand with `1.666`.
</details>

<details><summary>highestScorer, hint 1</summary>

The test "a single student who scored 0" is there for a reason. What do you set as the "best so far" before the loop starts?
</details>

<details><summary>groupByStation, hint 1</summary>

Start with an empty object `{}`. For each result, check whether the station is already a key. If it isn't, create an empty array for it first. Then push the student's name.
</details>

<details><summary>letterGrade, hint 1</summary>

`typeof percentage` tells you whether something is a number. Check for invalid values first, then work down from the highest grade.
</details>

<details><summary>parseScoreLine, hint 1</summary>

`split(',')` and `split('/')` are your friends. `Number('abc')` gives `NaN`, and `Number.isNaN()` can detect it.
</details>

---

## Task 2

<details><summary>Report A, hint 1</summary>

Find the function that decides pass or fail. Compare it with the rule "50% **or above** is a pass".
</details>

<details><summary>Report B, hint 1</summary>

Add a `console.log` inside the loop in `calculateClassAverage`. Which students does it actually visit?
</details>

<details><summary>Report C, hint 1</summary>

In the browser console, try `[100, 92, 81, 50].sort()`. Is that what you expected?
</details>

<details><summary>Report C, hint 2</summary>

Look up `Array.prototype.sort` on MDN. Read what happens when you don't give it a "compare function".
</details>

<details><summary>Report D, hint 1</summary>

The table is drawn from `results`. Ranking is worked out from `results` too. Does working out the ranking change `results` itself?
</details>

<details><summary>Report D, hint 2</summary>

Some array methods change the original array ("mutate" it). Others return a new array. Which kind is `sort`?
</details>

<details><summary>Report E, hint 1</summary>

In the console, try `0 + '10'`. Then think about what type of value you get from `input.value`.
</details>

---

## Task 3

<details><summary>Running PHP, hint 1</summary>

If installing PHP is causing trouble, don't spend long on it. Use https://onlinephp.io instead. You can also use https://3v4l.org.
</details>

<details><summary>Part C, hint 1</summary>

Read one of the warnings in the output very carefully. It names a variable and a line number.
</details>

<details><summary>Part C, hint 2</summary>

Search the web for "PHP variable scope functions". PHP and JavaScript behave differently here.
</details>

<details><summary>Part C, hint 3</summary>

In PHP, a function **cannot** see variables created outside it, unlike JavaScript. There are a few ways to fix this. Which one is the cleanest? Why does `MAX_SCORE_PER_STATION` work inside `calculate_percentage`?
</details>

<details><summary>Part D, hint 1</summary>

Before the `foreach` loop, create some variables (for example `$passed_count = 0;`). Update them inside the loop, then print them after the loop.
</details>

---

## Task 4

<details><summary>Rota, hint 1</summary>

Look at the example table in the README. Compare where each student is in round 1 with where they are in round 2. Station positions are numbered 0, 1, 2. What happens to each student's position?
</details>

<details><summary>Rota, hint 2</summary>

Each student moves along one station per round. When they go past the last station, they wrap back round to the first. The `%` (remainder) operator is very useful for "wrapping round".
</details>

<details><summary>Rota, hint 3</summary>

In round `r`, student number `i` could be at station number `(i + r) % stations.length`. Check this against the example table.
</details>

<details><summary>Stretch, hint 1</summary>

Rest stations are just extra stations. Could you make a longer list of stations and then reuse `createRota`?
</details>
