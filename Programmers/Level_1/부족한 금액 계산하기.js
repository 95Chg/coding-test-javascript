function solution(price, money, count) {
    let remainMoney = money;
    
    for (let i = 1; i <= count; i += 1) {
        remainMoney -= price * i;
    }
    
    return remainMoney > 0 ? 0 : Math.abs(remainMoney);
}