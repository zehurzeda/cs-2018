export class DataFormatada {
  constructor(dataSemFormatacao) {
    this.ano = parseInt(dataSemFormatacao.substring(0, 4));
    this.mes = parseInt(dataSemFormatacao.substring(4, 6));
    this.dia = parseInt(dataSemFormatacao.substring(6, 8));
    this.dataCompleta = dataSemFormatacao;
    this.dataCompletaInteger = parseInt(
      this.ano.toString() + this.mes.toString() + this.dia.toString()
    );
    let pad = "00";

    this.getDataInteger = function() {
      let dataInteger = parseInt(
        this.ano.toString() +
          (pad.substring(0, pad.length - this.mes.toString().length) +
            this.mes.toString()) +
          (pad.substring(0, pad.length - this.dia.toString().length) +
            this.dia.toString())
      );
      return dataInteger;
    };
  }
}
