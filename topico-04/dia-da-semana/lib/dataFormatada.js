"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DataFormatada = exports.DataFormatada = function DataFormatada(dataSemFormatacao) {
  _classCallCheck(this, DataFormatada);

  this.ano = parseInt(dataSemFormatacao.substring(0, 4));
  this.mes = parseInt(dataSemFormatacao.substring(4, 6));
  this.dia = parseInt(dataSemFormatacao.substring(6, 8));
  this.dataCompleta = dataSemFormatacao;
  this.dataCompletaInteger = parseInt(this.ano.toString() + this.mes.toString() + this.dia.toString());
  var pad = "00";

  this.getDataInteger = function () {
    var dataInteger = parseInt(this.ano.toString() + (pad.substring(0, pad.length - this.mes.toString().length) + this.mes.toString()) + (pad.substring(0, pad.length - this.dia.toString().length) + this.dia.toString()));
    return dataInteger;
  };
};