# Bug log

Copy this template for each bug. Short answers are fine. We care more about **how** you found it than about perfect wording.

---

## Report A

- **How I reproduced it:**
i didnt reproduce it


- **How I tracked it down:** (what did you check, log or try, and in what order?)
 i opened the index.html file first and went back to read what the readme.md file said... i read it again and again then checked the app.js and then the scoring.js file and traced the function with my eyes and saw what the issue was

- **The cause:** (which file and line, and why it was wrong)
 the function was called but returns the percentage as less than the passmark

- **The fix:**
i used the operators >= to make the percentage to be either greater or equals to the passmark

- **How I checked the fix works:**
 i refreshed the ui from the index.html file i opened earlier


## Report B

- **How I reproduced it:**
i didnt

- **How I tracked it down:**
i went from the readme to the scoring.js file a lot of times... i changed a few things to see if it will work.. it didnt i went on google to ask a few questions and came back to chnage somethings.. still it didnt work so i went to hint.md still i couldnt figure it out but i was certain something was odd so i looked line by line several times and tried interpreting the lines and searched some syntax and wat they are used for until it finaly clicked to me that the index 'i' is supposed to start from 0 otherwse it skips the first person and so i tried changing it then refreshed and it workedd

- **The cause:**
in the loop the index 'i' started from 1 instead of 0

- **The fix:**
 I changed the index from 1 to 0

- **How I checked the fix works:**
 I refreshed the browser


## Report C

- **How I reproduced it:**
i didnt 

- **How I tracked it down:**


- **The cause:**


- **The fix:**


- **How I checked the fix works:**

## Report D

- **How I reproduced it:**
  i am not realy clear on this part is it the same order we have in the app.js file or somethng else?

- **How I tracked it down:**


- **The cause:**


- **The fix:**


- **How I checked the fix works:**

## Report E

- **How I reproduced it:**


- **How I tracked it down:**


- **The cause:**


- **The fix:**


- **How I checked the fix works:**



## Anything else I noticed

