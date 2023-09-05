class Alunes{
    constructor(turma, primeiroNome, ultimoNome, dataDeNascimento, matricula, foto, email){
        this.turma = turma;

        this.primeiroNome = primeiroNome;
        this.ultimoNome = ultimoNome;

        this.dataDeNascimento = dataDeNascimento;
        this.matricula = matricula;
        this.foto = foto;
        this.email = email;
    }

    getIdade(){
        return ;

    }

    getNome(){
        return `${this.ultimoNome}, ${this.primeiroNome}`;
    }
}