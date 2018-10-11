export class DataFormatada {
    constructor(dataSemFormatacao) {
        this.ano = dataSemFormatacao.substring(0, 4);
        this.mes = dataSemFormatacao.substring(4, 6);
        this.dia = dataSemFormatacao.substring(6, 8);
        this.dataCompleta = dataSemFormatacao;
    }
}