# Task 4: Problem solving, the OSCE rota (about 60 minutes)

In an OSCE exam, students move around a **circuit** of stations. Everyone starts at a different station. When a bell rings, each student moves on to another station. This repeats until every student has done every station.

Your job is to write `createRota(students, stations)` in `rota.js`. It works out who goes where in each round.

## The rules

1. There is one round for each station. With 4 stations there are 4 rounds.
2. In each round, every student is at exactly **one** station, and no station has more than one student.
3. By the end, every student has visited every station **exactly once**.
4. If there are fewer students than stations, some stations are simply empty in some rounds. That's fine.
5. If there are **no** students, return an empty array `[]`.
6. If there are **more** students than stations, a rota isn't possible. Return `null`.
7. Don't change the arrays that are passed in.

## Example

With students `Amara, Ben, Chloe` and stations `History, Exam, Comms`, one valid rota is:

| Round | History | Exam  | Comms |
|-------|---------|-------|-------|
| 1     | Amara   | Ben   | Chloe |
| 2     | Chloe   | Amara | Ben   |
| 3     | Ben     | Chloe | Amara |

Other answers can also be correct. The tests check the rules, not one exact answer.

## What to do

1. **Plan before you code.** Work out a 4-student, 4-station example on paper, or in `NOTES.md`. Look for a pattern. Then write your plan in `NOTES.md` in plain English or pseudo-code. Please don't delete the plan afterwards, even if your approach changes. We want to see how your thinking developed. **Commit the plan before you write any code.**
2. Write `createRota` in `rota.js`.
3. Run the tests with `tests.html` (or `node rota.test.js`).
4. Open `index.html` to see your rota as a table.
5. **Stretch (optional):** write `createRotaWithRests`. When there are more students than stations, add rest stations called `Rest 1`, `Rest 2`, and so on, so that a rota is possible.
