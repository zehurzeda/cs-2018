import readline from 'readline'

const rl = readline.createInterface(process.stdin, process.stdout);

console.log('Digite uma palavra a ser ordenada ------ digite \'sair\' para fechar o programa')

rl.prompt();
rl.on('line', (line) => {
    if(line === 'sair') {
        rl.close();
    }
    ordenar(line);
    rl.prompt();
}).on('close', () => {
    process.exit(0);
})

function ordenar(str) {
    let res = str.replace(/\s/g,'').split('');
    console.log(res.sort().join(''));
}