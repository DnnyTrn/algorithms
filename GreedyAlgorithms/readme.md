Problem <br>
  Given a list of jobs with their deadlines and penalties, design a greedy algorithm that schedules the jobs so that
  a minimal penalty is incurred. Jobs are completed in a <i>unit-time</i> A unit-time task is a job, such as a program to be run on a computer, that requires exactly one unit of time to complete.
  
  In CLRS, this problem is called "scheduling unit-time tasks with deadlines and penalties for a single processor".
  Other variations of this problem "maximizes profit" instead of minimizing penalties. 
  
Solution <br>
  1. Sort the jobs by their penalties in descending order. Essentially the penalties represent the level of 'importance' thus allows us to
  
