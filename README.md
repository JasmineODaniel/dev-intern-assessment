# Developer Intern Assessment

Hi, and thanks for taking the time to do this.

This pack has four small tasks. They're based on the kind of work we do: a platform where medical students practise **OSCEs** (practical exams in which students rotate around "stations" and are marked at each one). You don't need to know anything about medicine.

**Nobody expects you to finish everything.** We're interested in how you think, how you get unstuck, and how you explain your work, not just whether the tests pass. A half-finished task with clear notes is worth more than a finished one you can't explain.

## What you need

- A web browser (Chrome, Edge or Firefox).
- A code editor. [VS Code](https://code.visualstudio.com/) is a good free option.
- Optional: [Node.js](https://nodejs.org/) to run tests from the terminal.
- Optional: PHP for Task 3. There's an online option, so you don't have to install it.
- [Git](https://git-scm.com/downloads) and a free [GitHub](https://github.com/) account. See "Using Git" below.

## The tasks

| Task | Folder | What it's about | Suggested time |
|------|--------|-----------------|----------------|
| 1 | `task-1-fundamentals/` | Write small JavaScript functions to pass tests | 60–75 min |
| 2 | `task-2-debugging/` | Find and fix bugs in a small web page | 60 min |
| 3 | `task-3-php/` | Read, fix and extend a script in PHP, a language that's new to you | 60–75 min |
| 4 | `task-4-problem-solving/` | Design a solution to a scheduling puzzle | 60 min |

Each folder has its own `README.md` with instructions. Do the tasks in order if you can. If you get stuck on one, move on and come back to it later.

**Please spend no more than about 5 hours in total**, not counting the time it takes to set up Git and GitHub. If you run out of time, stop and write down where you got to. That's completely fine.

## Your notes: NOTES.md

Keep `NOTES.md` up to date as you go. It's as important as the code. In it, we'd like to see:

- roughly how long you spent on each task
- what you tried, including things that didn't work
- any assumptions you made
- the written answers each task asks for

Rough notes are fine. You don't need polished prose.

## Getting stuck

1. First, try on your own for a while. Read error messages carefully, search the web, and check documentation such as [MDN](https://developer.mozilla.org/) or [php.net](https://www.php.net/manual/en/).
2. If you're still stuck, open `HINTS.md`. The hints are given in levels, so only open as many as you need. **Write down in NOTES.md which hints you used.** Using hints is fine and won't count against you. We'd much rather you use a hint than sit stuck for an hour.
3. If something in the instructions is unclear, make a sensible assumption, write it down in NOTES.md, and carry on.

## Rules on help

- You **can** use Google, Stack Overflow, MDN, php.net, YouTube tutorials and so on.
- Please **don't** use AI tools (ChatGPT, Copilot, Claude, Gemini, etc.) to write or fix code for you. If you do use one for anything, even just to explain an error, **say so in NOTES.md** and describe how you used it. Honesty matters far more to us than a perfect score.
- Please do the work yourself. Don't ask a friend to do it.

## After you submit

We'll meet to go through your work together. You'll walk us through your solutions, and we may ask you to make a small change live. Please make sure you understand every line you submit.

## Using Git (part of the assessment)

You'll hand in your work through Git and GitHub. How you use Git is part of what we look at, so please **commit as you go**. Don't save everything up for one commit at the end.

1. **Get the code.** Clone this repository to your computer:
   ```
   git clone https://github.com/<OWNER>/dev-intern-assessment.git
   ```
2. **Make your own repository.** Create a new, empty **public** repository on your own GitHub account. Don't tick "Add a README". Point your local copy at it and push:
   ```
   git remote rename origin upstream
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
3. **Commit as you work.** Make a commit each time you finish something meaningful, for example "Task 1: implement countPassed" or "Task 2: fix report A (pass mark boundary)". Write messages that say *what* changed. For Task 4, commit your plan in `NOTES.md` **before** you start coding.
4. **Push regularly.** Run `git push` after each session, so your work is backed up.
5. **Submit.** When you're finished, send us the link to your repository, by the deadline we agreed.

New to Git? That's fine. The [GitHub "Hello World" guide](https://docs.github.com/en/get-started/start-your-journey/hello-world) and the [Git basics chapter](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository) cover everything you need. There are Git hints in `HINTS.md` too. If Git gives you trouble, write down what happened in NOTES.md. Getting past it yourself is part of the exercise.

**Please don't** change the history of the commits that came with this repository, and don't open pull requests against it. Your repository is public, so don't put personal information in it.

Good luck, and try to enjoy it!
