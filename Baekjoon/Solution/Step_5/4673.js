findSelfNumber(10000);

function notSelfNumber(n) {
    let sum = n;

    while(true) {
        if(n==0) break;
        sum += n % 10;
        n = parseInt(n / 10);
    }

    return sum;
}

function findSelfNumber(n) {
    let nums = Array(n + 1).fill(true);

    for (let i = 0; i <= n; i++) {
        nums[notSelfNumber(i)] = false;
    }
    
    for (let i = 0; i <= n; i++) {
        if(nums[i]) {
            console.log(i);
        }
    }
}