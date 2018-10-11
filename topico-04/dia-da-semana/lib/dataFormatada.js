"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DataFormatada = exports.DataFormatada = function DataFormatada(dataSemFormatacao) {
    _classCallCheck(this, DataFormatada);

    this.ano = dataSemFormatacao.substring(0, 4);
    this.mes = dataSemFormatacao.substring(4, 6);
    this.dia = dataSemFormatacao.substring(6, 8);
    this.dataCompleta = dataSemFormatacao;
};