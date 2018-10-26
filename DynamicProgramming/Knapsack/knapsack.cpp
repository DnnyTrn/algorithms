/*psuedocode

if(P[i].days < Days) {
    OPT(i,j) = max( OPT(i-1,j)  ,   OPT(i-j, j-P[i].days) + P[i].fee)
}


*/
