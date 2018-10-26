
<h2> Non-Memoized Power </h2>
<h6> The recurrence relation: </h6>
<ul> <li> if n is 0 or 1, T(n) = 1 </li> <li> if n > 2, T(n) = 2T(n/2) + c </li> </ul>
<p>  Run-Time = Ѳ(n) using master method (case 1) <br> Non-memoized function creates redundant recursive calls, hence why the recurrance relation is T(n) = 2T(n/2)+c.
  </p>
  
 
<h2> Memoized Power </h2>
<h6> The recurrence relation: </h6>
<ul> 
  <li> if n = 0 or 1, T(n) = 1 </li> 
  <li> if n > 1, T(n) = T(n/2) + c </li> 
</ul>
<p> By memoizing the recursive call, relieves the necessity for creating additional calls.
  <br>Run-time = Ѳ(lg n), master method (case 2)</p>



