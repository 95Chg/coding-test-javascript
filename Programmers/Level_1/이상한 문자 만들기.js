function solution(s) {
    return s
        .split(' ')
        .map((word) =>
            word
            .split('')
            .map((el, index) =>
                index % 2 === 0 
                ? el.toUpperCase()
                : el.toLowerCase()
            )
            
            .join('')
        )

        .join(' ');
}