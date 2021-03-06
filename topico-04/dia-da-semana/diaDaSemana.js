import { MESES_BISSEXTO, MESES_NAO_BISSEXTO } from "./meses";
import { DataFormatada } from "./dataFormatada";

const dataDesejada = new DataFormatada(process.argv[2] ? process.argv[2] : "");
const anoBissexto = process.argv[3];
const dataReferencia = new DataFormatada(
  process.argv[4] ? process.argv[4] : ""
);
const diaDaSemanaDataReferencia = process.argv[5];
calcularData(dataDesejada);

function calcularData(dataDesejada) {
  validarArgumentos();
  let diaDaSemana = parseInt(diaDaSemanaDataReferencia);
  if (dataDesejada.dataCompleta < dataReferencia.dataCompleta) {
    calcularDiaDaSemanaDataDesejadaMenorQueDataReferencia(diaDaSemana);
  } else {
    calcularDiaDaSemanaDataDesejadaMaiorQueDataReferencia(diaDaSemana);
  }
}

function calcularDiaDaSemanaDataDesejadaMaiorQueDataReferencia(diaDaSemana) {
  while (dataDesejada.getDataInteger() != dataReferencia.getDataInteger()) {
    dataReferencia.dia++;
    diaDaSemana++;
    if (isAnoBissexto(dataReferencia.ano)) {
      if (dataReferencia.dia > MESES_BISSEXTO[dataReferencia.mes - 1]) {
        dataReferencia.dia = 1;
        dataReferencia.mes++;
      }
    } else if (
      dataReferencia.dia > MESES_NAO_BISSEXTO[dataReferencia.mes - 1]
    ) {
      console.log("opa2");
      dataReferencia.dia = 1;
      dataReferencia.mes++;
    }
    if (dataReferencia.mes > 12) {
      dataReferencia.mes = 1;
      dataReferencia.ano++;
    }
    if (diaDaSemana > 6) {
      diaDaSemana = 0;
    }
  }
  process.exit(diaDaSemana);
}

function calcularDiaDaSemanaDataDesejadaMenorQueDataReferencia(diaDaSemana) {
  while (dataDesejada.getDataInteger() != dataReferencia.getDataInteger()) {
    dataReferencia.dia = dataReferencia.dia - 1;
    diaDaSemana--;
    if (dataReferencia.dia === 0) {
      if (dataReferencia.mes === 1) {
        dataReferencia.ano = dataReferencia.ano - 1;
        dataReferencia.mes = 12;
      } else {
        dataReferencia.mes--;
      }
      if (isAnoBissexto(dataReferencia.ano)) {
        dataReferencia.dia = MESES_BISSEXTO[dataReferencia.mes - 1];
      } else {
        dataReferencia.dia = MESES_NAO_BISSEXTO[dataReferencia.mes - 1];
      }
    }
    if (diaDaSemana < 0) {
      diaDaSemana = 6;
    }
  }
  process.exit(diaDaSemana);
}

function isAnoBissexto(ano) {
  let diferenca = Math.abs(ano - anoBissexto);
  if (ano === parseInt(anoBissexto)) {
    return true;
  } else if (diferenca % 4 === 0) {
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
  if (isNaN(anoBissexto) || parseInt(anoBissexto) < 1) {
    process.exit(-1);
  }
  if (
    isNaN(diaDaSemanaDataReferencia) ||
    parseInt(diaDaSemanaDataReferencia) < 0 ||
    parseInt(diaDaSemanaDataReferencia) > 6
  ) {
    process.exit(-1);
  }

  validarData(dataDesejada);
  validarData(dataReferencia);
}

function validarData(dataAValidar) {
  if (
    isNaN(dataAValidar.dataCompleta) ||
    parseInt(dataAValidar.dataCompleta) < 0
  ) {
    process.exit(-1);
  }
  if (dataAValidar.dataCompleta.length < 8) {
    process.exit(-1);
  }
  if (dataAValidar.dataCompleta.substring(0) === "0") {
    process.exit(-1);
  }
  if (dataAValidar.mes < 1 || dataAValidar.mes > 12) {
    process.exit(-1);
  }
  if (dataAValidar.dia < 1 || dataAValidar.dia > 31) {
    process.exit(-1);
  }
  if (
    isAnoBissexto(dataAValidar.ano) &&
    dataAValidar.dia > MESES_BISSEXTO[dataAValidar.mes - 1]
  ) {
    process.exit(-1);
  } else if (dataAValidar.dia > MESES_NAO_BISSEXTO[dataAValidar.mes - 1]) {
    process.exit(-1);
  }
}
