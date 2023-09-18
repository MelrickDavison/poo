let inputTurma = document.getElementById('iptTurma');
let inputPrimeiroNome = document.getElementById('iptPrimeiroNome');
let inputSegundoNome = document.getElementById('iptSegundoNome');
let inputDataDeNascimento = document.getElementById('iptDataDeNascimento');
let inputMatricula = document.getElementById('iptMatricula');
let buttonCadastrar = document.getElementById('btnCadastrar');

//div que vai receber os cards
let containerDeCards = document.getElementById('containerDeCards');
//Listener
buttonCadastrar.addEventListener('click', quandoClicarEmCadastrar);
//Fim dos Listeneres

function quandoClicarEmCadastrar() {
    let alunoTemp = new Alunes(
        inputTurma.value,
        inputPrimeiroNome.value,
        inputSegundoNome.value,
        inputDataDeNascimento.value,
        inputMatricula.value,
    );
    listaDeAlunes.push(alunoTemp);
   
    console.log(listaDeAlunes);     
    desenharcard(containerDeCards);             
}