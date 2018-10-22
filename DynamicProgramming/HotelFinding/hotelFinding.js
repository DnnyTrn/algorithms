let hotelFinding = (arr) => {
    var S = [];
    S[0] = 0;
    var x;

    var P = []; P[0] = 0;
    
    //Storing hotel numbers in P
    var hotelSequence = () => {
        if((S[i] + x) < S[j]) {
            P[j] = i;
        }
    };

    //calculating the optimum costs for array S
    for(var j = 1; j < arr.length; ++j) 
    {
        S[j] = Infinity;

        for(var i = 0; i < j; ++i) {
            x = 200 - (arr[j] - arr[i]);
            x *= x;
            hotelSequence();
            S[j] = Math.min(S[i] + x, S[j]); 
        }
    }
  
    //Print hotel sequence
    var printSequence = (P, i) => {
        if(i > 1)
        {
            printSequence(P, P[i]);
            console.log("Go to hotel", P[i], "and stop at hotel", i);
        }
    }

    printSequence(P, P.length-1)
    
    //last index is the minimum penalty
    return S[S.length-1];   
};

var hotel_penalty = [0, 150, 200, 295,  375 , 480 , 620];

console.log("Total cost $", hotelFinding(hotel_penalty));




