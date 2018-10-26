var power = (x,n) => {

    //base cases for when n is 0 or 1
    if(n === 0){
        return 1;
    }
    if(n === 1) {
        return x;
    }

    if(!(n % 2))    //if n is even
    {
        return power(x, n/2) * power(x, n/2);
    }
    else // n is odd
    {
        n--;
        return x * power(x, n/2) * power(x, n/2);
    }
}
