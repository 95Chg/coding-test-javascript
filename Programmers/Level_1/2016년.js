function solution(a, b) {
    const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let countDays = b + 4;
    
    for (let i = 0; i < a - 1 ; i += 1) countDays += month[i];

    return day[countDays % 7];
}