function findFactorial(n){

    let res =1;
    for(let i=1;i<=n;i++){
        res= res*i        
    }
    return res;
}

let r = findFactorial(10)
console.log("the factorial value is:"+r);
