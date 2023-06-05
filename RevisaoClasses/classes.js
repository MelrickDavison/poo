class Aluno{
    constructor(nome, idade, matricula){
        this.nome = nome;
        this.idade = idade
        this.matricula = matricula
    }
}
class Turma{

    constructor(){
        this.listaDeAlunos = []
    }

    set adicionarAluno(aluno){
        this.listaDeAlunos.push(aluno)

    };
    
    removerAluno(matricula){
        for (let i = 0; i < this.listaDeAlunos.length; i++) {
            if(this.listaDeAlunos[i].matricula == matricula ){
                this.listaDeAlunos.splice(i, 1);
            }
            
        }
    }

}