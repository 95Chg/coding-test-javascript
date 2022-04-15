let input = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

let score = Math.floor(input / 10);

switch(score) {
    case 10:
    case 9:
        console.log('A');
        break;
    case 8:
        console.log('B');
        break;
    case 7: 
        console.log('C');
        break;
    case 6:
        console.log('D');
        break;
    default:
        console.log('F');
}