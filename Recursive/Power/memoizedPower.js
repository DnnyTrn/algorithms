
var power = (x,n) => {


    if(n === 0){
        return 1;
    }

    if(n === 1){
        return x;
    }

    //if n is even
    if(!(n % 2))
    {
        temp = power(x, n/2);
        return temp * temp;
    }
    else    //n is odd
    {
        temp = power(x, (n-1)/2);
        return x * temp * temp;
    }

}
