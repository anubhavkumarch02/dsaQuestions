//Given an integer N. Check whether N is prime or not.

function isPrime(n){
    if(n<=1){
        return false;
    }else{
        for(var i=2;i<n;i++){
            if(n%i==0){
                return false;
            }
        }
    }
    return true;
}
const N=2;
console.log(isPrime(N));