// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var money = {};

    if(currency>10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }


    if(currency<=0) {
        return money;
    }

    var H = Math.floor(currency/50);
    if(H!==0){
        money["H"] = H;
    }

    currency -= H*50;

    var Q = Math.floor(currency/25);
    if(Q!==0){
        money["Q"] = Q;
    }

    currency -= Q*25;

    var D = Math.floor(currency/10);
    if(D!==0){
        money["D"] = D;
    }

    currency -= D*10;

    var N = Math.floor(currency/5);
    if(N!==0){
        money["N"] = N;
    }

    currency -= N*5;

    var P = Math.floor(currency/1);
    if(P!==0){
        money["P"] = P;
    }

    return money;
};