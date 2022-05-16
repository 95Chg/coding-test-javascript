function solution(s) {
    const splitedStr = s.split('');
    const textStack = [];
    splitedStr.forEach((v) => {
        if (v === '(') textStack.push(v);
        else if (textStack.length !== 0 && v === ')') textStack.pop();
        else textStack.push(')');
    });
    
    return textStack.length === 0 ? true : false;
}