function solution(cacheSize, cities) {
    let answer = 0;
    const cache = [];

    // 캐시사이즈가 없을 경우 miss만 발생함
    if (cacheSize === 0) return cities.length * 5; 

    // 대소문자 구분이 없으므로 일괄적으로 대문자 변경
    const citiesUC = cities.map((city) => city.toUpperCase());

    for (const city of citiesUC) {
        // cache miss 구현
        if (!cache.includes(city)) {
            if (cacheSize === cache.length) cache.pop(); // 지금까지 참조되지 않은 가장 오래된 캐시를 제거함
            cache.unshift(city); // 새로운 값을 캐시의 가장 최신 값에 집어 넣음
            answer += 5;
        } else { //cache hit 구현
            const target = cache.splice(cache.indexOf(city), 1); // 캐시에서 참조될 값이 있다면 해당 값을 추출함
            cache.unshift(...target); // 참조가 됐으므로 캐시의 가장 최신 값에 집어 넣음
            answer += 1;
        }
        // console.log(cache);
    }

    return answer;
}