# Task 2: Debugging (about 60 minutes)

`index.html` is a small page that shows OSCE exam results. Open it in your browser. The code is in `scoring.js` (the calculations) and `app.js` (the page).

The examiners who use the page have sent in these bug reports. They describe what they **see**, not what is wrong in the code. That part is your job.

---

> **Report A**
> Chloe Nguyen scored exactly 50% and the page says FAIL. Our rule is that 50% or above is a pass.

> **Report B**
> The class average says 56%. When I add up the percentages in the table and divide by the number of students, I get 72.2%.

> **Report C**
> Ben Carter got 100%, but the "Top 3 scores" box shows 92%, 81%, 50%. It should be 100%, 92%, 81%.

> **Report D**
> The table used to list students in the order we entered them, the same as our spreadsheet. Now it's sorted by score. Please put it back to the order they were entered. That's what the Rank column is for.

> **Report E**
> When I add a new student with the form at the bottom (for example scores of 10, 15, 12, 20), their Total shows a strange long number and their percentage is in the millions.

---

We think that's everything, but there may be other problems nobody has noticed yet.

## What to do

1. Fix each bug. Try to make the **smallest change** that fixes the cause. Don't rewrite the whole file.
2. For every bug, fill in a section of `BUGS.md`.
3. If you find a problem that isn't in the list above, write it up in `BUGS.md` too. Fixing it is optional.

## Tips

- Try to reproduce the bug yourself before you change anything.
- The browser developer tools (F12) are useful. Look at the **Console** tab, and try `console.log(...)` or breakpoints in the **Sources** tab.
- After each fix, check that the other parts of the page still work.
