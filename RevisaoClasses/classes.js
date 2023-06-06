class Aluno{
    constructor(nome, idade, matricula){
        this.nome = nome;
        this.idade = idade;
        this.matricula = matricula;
    }
}
class Turma{

    constructor(){
        this.listaDeAlunos = []
    }

    //classe do método set
    set adicionarAluno(aluno){
        this.listaDeAlunos.push(aluno)

    };
    //metodo remover aluno
    removerAluno(matricula){
        for (let i = 0; i < this.listaDeAlunos.length; i++) {
            //If para encontrar a matrícula pretendida
            if(this.listaDeAlunos[i].matricula == matricula ){
                //splice para eliminar o objeto correspondente
                //i == index da matricula desejada
                //1 quantidade de elementos
                this.listaDeAlunos.splice(i, 1);
            }
            
        }
    }

}