# React Firebase onAuthStateChanged Cleanup Issue
This repository demonstrates a common issue encountered when using Firebase's `onAuthStateChanged` listener within React applications.  The problem centers around the failure to properly detach the listener when a component unmounts, resulting in potential memory leaks and erratic behavior.  The `authBug.js` file showcases the problematic code, while `authBugSolution.js` presents a corrected version that prevents these issues.

## Problem
The original code (`authBug.js`) adds a listener but forgets to remove it when the component unmounts.  This leads to the listener continuing to run even after the component is no longer needed, potentially causing memory leaks, unexpected updates, and conflicts with other parts of the application.

## Solution
The solution (`authBugSolution.js`) addresses this by incorporating a cleanup function within the `useEffect` hook's return statement.  This ensures that the listener is removed when the component is unmounted, preventing memory leaks and restoring correct application behavior.

## How to reproduce
1. Clone this repository
2. Navigate to `authBug.js` and `authBugSolution.js`
3. Observe the difference in how the `onAuthStateChanged` listener is handled in each file
4. Run both files within a suitable React environment. You might find inconsistencies and unusual behavior with the first file while the second functions smoothly.