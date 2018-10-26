/*psuedocode


for(i = 1 to number_of_jobs) {
    for(j = 0, j to number_of_days) {
        //enough time to complete project
        if(P[i].days < Days) {
            OPT(i,j) = max( OPT(i-1,j)  ,   OPT(i-j, j-P[i].days) + P[i].fee);
        }
        else    //not enough time to complete project
        {
            OPT(i,j) = OPT(i - 1, j);
        }
    }
}
*/


