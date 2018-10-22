let product_sum = (OPT, n) => {
    
    if(n === 0){
        return 0;
    }

    if(n === 1) {
        return OPT[0];
    }

    //if(n >= 2)
    return Math.max((product_sum(OPT, n-1)+ OPT[n-1]), (product_sum(OPT, n-2) + OPT[n-1] * OPT[n-2]));

};

var list = [2, 2, 1, 3, 2, 1, 2, 2, 1, 2];
console.log(product_sum(list,list.length))
