'use strict';

var _readline = require('readline');

var _readline2 = _interopRequireDefault(_readline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rl = _readline2.default.createInterface(process.stdin, process.stdout);

console.log('Digite uma palavra a ser ordenada ------ digite \'sair\' para fechar o programa');

rl.prompt();
rl.on('line', function (line) {
    if (line === 'sair') {
        rl.close();
    }
    ordenar(line);
    rl.prompt();
}).on('close', function () {
    process.exit(0);
});

function ordenar(str) {
    var res = str.replace(/\s/g, '').split('');
    console.log(res.sort().join(''));
}