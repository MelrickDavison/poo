class Aluno{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade
    }
}
class Turma{

    constructor(){
        this.listaDeAlunos = []
    }

    set adicionarAluno(aluno){
        this.listaDeAlunos.push(aluno)

    };

}