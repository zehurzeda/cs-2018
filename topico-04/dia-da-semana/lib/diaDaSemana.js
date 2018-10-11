'use strict';

var _meses = require('./meses');

var _dataFormatada = require('./dataFormatada');

var dataDesejada = new _dataFormatada.DataFormatada(process.argv[2]);
var anoBissexto = process.argv[3];
var dataReferencia = new _dataFormatada.DataFormatada(process.argv[4]);
var diaDaSemanaDataReferencia = process.argv[5];
var diaDaSemanaDesejada = calcularData(dataDesejada);

function calcularData(dataDesejada) {
    validarArgumentos();
    isAnoBissexto(2000);

    console.log(_meses.MESES_BISSEXTO, _meses.MESES_NAO_BISSEXTO);
}

function isAnoBissexto(ano) {
    var diferenca = Math.abs(ano - anoBissexto);
    if (diferenca % 4 === 0) {
        if (ano % 100 === 0) {
            return ano % 400 === 0;
        } else {
            return true;
        }
    }
}

function validarArgumentos() {
    if (process.argv.length != 6) {
        process.exit(-1);
    }
    if (isNaN(process.argv[2]) || parseInt(process.argv[2]) < 0) {
        process.exit(-1);
    }
    if (isNaN(anoBissexto) || parseInt(anoBissexto) < 1) {
        process.exit(-1);
    }
    if (isNaN(process.argv[4]) || parseInt(process.argv[4]) < 0) {
        process.exit(-1);
    }
    if (isNaN(diaDaSemanaDataReferencia) || parseInt(diaDaSemanaDataReferencia) < 0 || parseInt(diaDaSemanaDataReferencia) > 6) {
        process.exit(-1);
    }

    validarData(dataDesejada);
    validarData(dataReferencia);
}

function validarData(dataAValidar) {
    if (dataAValidar.dataCompleta.length < 8) {
        process.exit(-1);
    }
    if (dataAValidar.ano.substring(0) === '0') {
        process.exit(-1);
    }
    if (parseInt(dataAValidar.mes) < 1 || parseInt(dataAValidar.mes) > 12) {
        process.exit(-1);
    }
    if (parseInt(dataAValidar.dia) < 1 || parseInt(dataAValidar.dia) > 31) {
        process.exit(-1);
    }
    if (isAnoBissexto(dataAValidar.ano) && dataAValidar.dia > _meses.MESES_BISSEXTO[dataAValidar.mes - 1]) {
        process.exit(-1);
    } else if (dataAValidar.dia > _meses.MESES_NAO_BISSEXTO[dataAValidar.mes - 1]) {
        process.exit(-1);
    }
}