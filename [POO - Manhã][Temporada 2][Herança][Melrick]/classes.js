class Participante {
    constructor(nome, cpf, dataDeNascimento) {
        this.nome = nome;
        this.cpf = cpf;
        this.dataDeNascimento = dataDeNascimento;
    }
}


//Herança tem que ter EXTENDS and SUPER()

//Extends indica quem é a classe mãe
class Alune extends Participante {
    constructor(nome, cpf, dataDeNascimento, matricula) {
        //Super chama o construtor da classe-mãe (Participante)
        super(nome, cpf, dataDeNascimento);
        this.matricula = matricula;
    }
}

class Professor extends Participante {
    constructor(nome, cpf, dataDeNascimento, siape, formacao) {
        super(nome, cpf, dataDeNascimento);
        this.siape = siape;
        this.formacao = formacao;
    }
}

class EventoAcademico {
    constructor() {
        this.listaDeParticipantes = [];
    }

    cadastrarParticipante(participante) {
        this.listaDeParticipantes.push(participante);
    }
}