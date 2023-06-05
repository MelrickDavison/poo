//Objetos da classe alunos
let aluno0 = new Aluno("Fabricio", 16, 2022304467);
let aluno1 = new Aluno("Gabriel", 17, 91238761276);
let aluno2 = new Aluno ("Melrick", 16, 2022304388);
let aluno3 = new Aluno("Kemylly", 16, 65576768768);
let aluno4 = new Aluno("Emilly", 15, 19073812378);

let segundao = new Turma();
let terceirao = new Turma();
segundao.adicionarAluno = aluno0;
segundao.adicionarAluno = aluno1;
segundao.adicionarAluno = aluno2;
terceirao.adicionarAluno = aluno3;
terceirao.adicionarAluno = aluno4;

segundao.removerAluno(2022304388)
console.log(terceirao)
console.log(segundao)

