class Alunes{
    constructor(turma, primeiroNome, ultimoNome, dataDeNascimento, matricula, foto, email){
        this.turma = turma;

        this.primeiroNome = primeiroNome;
        this.ultimoNome = ultimoNome;

        this.dataDeNascimento = new Date(dataDeNascimento);
        this.matricula = matricula;
        this.foto = foto;
        this.email = email;
    }

    getIdade(){

        let hoje = new Date();
        return (hoje.getFullYear() - this.dataDeNascimento.getFullYear())
    }

    getNome(){
        return `${this.ultimoNome}, ${this.primeiroNome}`;
    }
}


class Turma{
constructor(){
    this.listaDeAlunes = [];
    }
    
    adicionarAlune(alune){
        this.listaDeAlunes.push(alune)
    }
}