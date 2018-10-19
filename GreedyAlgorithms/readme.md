<h1>Problem <br> </h1>
  <p>Given a list of jobs with their deadlines and penalties, design a greedy algorithm that schedules the jobs so that
  a minimal penalty is incurred. Jobs are completed in a <i>unit-time</i>. From CLRS, "A unit-time task is a job, such as a program to be run on a computer, that requires exactly one unit of time to complete." </p>
  
  In CLRS, this problem is called "scheduling unit-time tasks with deadlines and penalties for a single processor".
  Other variations of this problem "maximizes profit" instead of minimizing penalties. 
  
<h1>Solution <br> </h1>
  <ol> 
    <li> Sort the jobs by their penalties in descending order. Essentially the penalties represent the level of 'importance' thus allows us to </li>
  <li> From the first to last job, assign the jobs to the <em> latest </em> possible time slot. Eventually available time slots will run out, so ignore those jobs or add them to a "late" list. </li> 
   </ol>
  
