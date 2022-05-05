process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    let star= '';
    for (let i = 0; i < a; i += 1) {
        star += '*';
    }
    
    const stars = [];
    for (let i = 0; i < b; i += 1) {
        stars.push(star);        
    }
    
    console.log(stars.join('\n'));
});