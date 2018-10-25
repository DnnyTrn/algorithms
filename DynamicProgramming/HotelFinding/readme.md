<h1> Problem </h1>

<p> You are going on another long trip (this time your headlights are working).  You start on the road at mile post 0. Along the way there are n hotels, at mile posts a1, < a2 < ... < an, where each ai is measured from the starting point.  The only places you are allowed to stop are at these hotels, but you can choose which of the hotels you stop at.  You must stop at the final hotel (at distance an), which is your destination.<br>
You’d ideally like to travel 200 miles a day, but this may not be possible (depending on the spacing of the hotels).  If you travel x miles during a day, the penalty for that day is (200-x)^2. You want to plan your trip so as to minimize the total penalty – that is the sum, over all travel days, of daily penalties.  Give an efficient algorithm that determines the minimum penalty for the  optimal sequence of hotels at which to stop. </p>

Run-Time: Θ(n^2)
