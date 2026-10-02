# My notes

## Time log

| Task | Roughly how long | Finished? (yes / partly / no) |
|------|------------------|-------------------------------|
| 1      1: 50 almost 2hrs       partly
| 2    |  2hrs            |     partly                    |
| 3    |    76mins        |      partly                         |
| 4    |                  |                               |

---

## Task 1: Fundamentals

**The function I'll explain, and how it works:**
 isPassingscore is a function that has two parameters 'score' and 'passmark' and whe this function is called.. the numbers passed to it are arguments.. it compares score and passmark using the operator '>=' and returns a boolean valuse true after it has checked that score os greater or equals to passmark and if its not it returns false

 another functiom I will like to explain and how it works is 2
 the function formatFullName has two parameters firstName and lastNameand it returns fullname with the extra spaces removed with the syntax .trim()  and it uses charAt(0) to pick the first letter in each name and .toUpperCase() to make that letter capitalized then to change the other letters in that name to lowercase we uses the addition operator "+" then the .slice() symtax to picck the second letter which is (1) and make it lowercase using .toLowerCase().. after doing this the name appears with the first letter capitalized and the rest in lowercase.. then, to add the other name we use the addition operator and the single quotes'' creates a space between the first and last name and the the same way space and the firs letters were capitalized in the firts name we do the same for the last name.


**A test that failed for a while, and how I fixed it:**
when i ran the test at first.. node couldnt find 'exercise.test.js' because i was in the parent folder so i used dir to check he content of the current folder and moved to the task 1 folder and ran the tests again.. the three 'isPassingscore' tests passed susccessfully

---

## Task 2: Debugging

(Most of this goes in `task-2-debugging/BUGS.md`.)

**My general approach to finding the bugs:**


---

## Task 3: PHP

**Part A: how I ran it:**
the first option was not bringing any results.. i tried severally so I searched for other options and used programiz.com and it ran the code.

**Part B: my answers:**

1. the script is a OSCE grade report that has a passmark of 50..  in javascript it is constant im not sure about php here.. but moving further we have an array of names and scores of each student and the function 'calculate-total' calculates the total scores of this students while the calculate-percentage converts the total scores of each studenst into a percentage and the 'has-opassed function' checks whether the percentage of the student reaches or is higher than the passmark them it either results pass or fail
2.  `.` in php is to add and in javascript + is addition operator 
3.  const scores = [ {name: 'Ben Carter', scores: [25, 25, 25, 25]}
]
4. it loops over a list and the equivalent in javascript is 'for' thats for (const students of students)
5.

**Part C: what caused the bug, and why it wouldn't happen in JavaScript:**


---

## Task 4: Rota

**My plan (written BEFORE I started coding):**


**How my plan changed, if it did:**


---

## Hints I used

(For example: "Task 2, Report C, hint 1")


## Resources I used

(Websites, docs, videos. Include any AI tools, and say what you used them for.)


## Assumptions I made


## If I had more time I would...


## Anything else you'd like us to know

