function solution(s){
    const splitedStr = s.toLowerCase().split('');
    const filterP = splitedStr.filter((el) => el === 'p');
    const filterY = splitedStr.filter((el) => el === 'y');
    
    return filterP.length === filterY.length ? true : false;
}