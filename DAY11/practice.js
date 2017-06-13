// 소수 체크 알고리즘 
var checkPrime = function(n) {
    var divisor = 2;
    while (n > divisor) {
        if (n % divisor === 0) {
            return false;
        } else {
            divisor++
        }
        return true;
    }
}

// 피보나찌 수열 
var fibo = function(n) {
    var result;
    if (n <= 1) {
        return n;
    } else {
        return fibo(n - 1) + fibo(n - 2);
    }
}

// 호이스팅 
console.log(sum(3, 5));
var sum = function(a, b) {
    return a + b;
}