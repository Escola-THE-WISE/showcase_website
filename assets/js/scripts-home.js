///////////////////////////////////////////////////////////////////////////////////////////////// ATIVIDADES DAS AULAS
function toggleLesson() {
    const dropdown = document.getElementById("dropdownContent");
    // Toggle a visibilidade do dropdown
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}

function selectLesson(lessonName) {
    // Muda o texto do botão para o nome da aula selecionada
    const toggleButton = document.getElementById("toggleLessonButton");
    toggleButton.innerHTML = lessonName + " &#x25BC;";
    
    // Esconde o dropdown após a seleção
    const dropdown = document.getElementById("dropdownContent");
    dropdown.style.display = "none";

    // Exibir o conteúdo da aula correspondente e ocultar as demais
    const lessons = ['lesson10', 'lesson9', 'lesson8', 'lesson7'];
    lessons.forEach(function(lessonId) {
        document.getElementById(lessonId).style.display = 'none'; // Oculta todas as aulas
    });

    // Exibe a aula correspondente à seleção
    if (lessonName === 'AULA 10') {
        document.getElementById('lesson10').style.display = 'block';
    } else if (lessonName === 'AULA 9') {
        document.getElementById('lesson9').style.display = 'block';
    } else if (lessonName === 'AULA 8') {
        document.getElementById('lesson8').style.display = 'block';
    } else if (lessonName === 'AULA 7') {
        document.getElementById('lesson7').style.display = 'block';
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////// POP UP
let circuloSelecionado = null;

function abrirPopup() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("popup").style.display = "block";
}

function fecharPopup() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("popup").style.display = "none";
}

function selecionarCirculo(circulo, index) {
    if (circuloSelecionado !== null) {
        circuloSelecionado.classList.remove('selecionado');
    }
    circuloSelecionado = circulo;
    circuloSelecionado.classList.add('selecionado');
}

function enviarFormulario() {
    if (circuloSelecionado !== null) {
        fecharPopup();
    } else {
        alert("Por favor, selecione um sentimento!");
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////// TROCA BALAO
function trocarImagemBalao(mascote) {
    const balaoImg = document.querySelector('#balao-fala img');
    switch (mascote) {
        case 'pipo':
            balaoImg.src = '/img/mascotes/balaopipo.svg';
            break;
        case 'sophia':
            balaoImg.src = '/img/mascotes/balaosophia.svg';
            break;
        case 'max':
            balaoImg.src = '/img/mascotes/balaomax.svg';
            break;
        default:
            console.error('Mascote desconhecido para a imagem do balão.');
    }
}




///////////////////////////////////////////////////////////////////////////////////////////////// TROCA COR DO MASCOTE E CORES
let mascotes = [
    { nome: 'pipo', imagem: '/assets/img/mascotes/pipo.png',},
    { nome: 'sophia', imagem: '/assets/img/mascotes/sophia.png' },
    { nome: 'max', imagem: '/assets/img/mascotes/max.png' }
];

let indiceMascote = 0; // Começa com o primeiro mascote

function trocarCoresMascote(mascote) {
    let cor;

    switch (mascote) {
        case 'pipo':
            cor = '#ef7d19';
            break;
        case 'sophia':
            cor = '#380982';
            break;
        case 'max':
            cor = '#fbba18';
            break;
        default:
            console.error('Mascote desconhecido');
            return;
    }


}

const alturasMascotes = {
    pipo: '180px',
    sophia: '300px',
    max: '335px'
};


function trocarImagemBalao(mascote) {
    const balaoImg = document.querySelector('#balao-fala img');
    switch (mascote) {
        case 'pipo':
            balaoImg.src = '/assets/img/mascotes/balaopipo.svg';
            break;
        case 'sophia':
            balaoImg.src = '/assets/img/mascotes/balaosophia.svg';
            break;
        case 'max':
            balaoImg.src = '/assets/img/mascotes/balaomax.svg';
            break;
        default:
            console.error('Mascote desconhecido para a imagem do balão.');
    }
}

function atualizarMensagemMascote(mascote) {
    const textoBalao = document.getElementById("texto-balao").querySelector("p");
    
    switch (mascote) {
        case 'pipo':
            textoBalao.innerHTML = 'Oiii <b class="cores-mascote" >Álef!</b><br> Como você está se sentindo hoje ?';
            break;
        case 'max':
            textoBalao.innerHTML = 'Fala <b class="cores-mascote" >Álef!</b><br> Como tá o vibe hoje?';
            break;
        case 'sophia':
            textoBalao.innerHTML = 'Olá <b class="cores-mascote" >Álef!</b><br> Como você está hoje?';
            break;
        default:
            console.error('Mascote desconhecido');
    }
}

function trocarCorMascote(mascote) {
    const cores = {
        pipo: '#ef7d19',
        max: '#fbba18',
        sophia: '#380982',
    };

    // Seleciona todos os elementos com a classe "cores-mascote"
    const elementos = document.querySelectorAll('.cores-mascote');
    elementos.forEach(elemento => {
        elemento.style.color = cores[mascote] || '#000'; // Cor padrão se mascote não for reconhecido
    });
}

// Chame isso na função trocarMascote()
function trocarMascote() {
    // ... (código existente)
    
    // Atualiza a cor do mascote
    trocarCorMascote(mascoteAtual.nome);
}


function trocarMascote() {
    // Aumenta o índice e reinicia se ultrapassar o tamanho do array
    indiceMascote = (indiceMascote + 1) % mascotes.length;

    // Atualiza a imagem do mascote
    const mascoteAtual = mascotes[indiceMascote];
    const mascoteImg = document.querySelector('.mascote img');
    
    mascoteImg.src = mascoteAtual.imagem;
    mascoteImg.alt = mascoteAtual.nome; // Atualiza o atributo alt

    // Ajusta a altura do mascote
    mascoteImg.style.height = alturasMascotes[mascoteAtual.nome];

    // Troca as cores do SVG com base no mascote atual
    trocarCoresMascote(mascoteAtual.nome);

    // Troca as cores texto
    trocarCorMascote(mascoteAtual.nome);

    // Troca a imagem do balão
    trocarImagemBalao(mascoteAtual.nome);

    // Troca o texto
    atualizarMensagemMascote(mascoteAtual.nome);
}


///////////////////////////////////////////////////////////////////////////////////////////////// JSON
fetch('/assets/data/info.json')
  .then(response => response.json())
  .then(data => {
    const aluno = data.alunos[0]; // Substitua 0 pelo índice desejado
    document.getElementById('nomeAluno').textContent = aluno.nome;
    document.querySelector('.profile-details h2').textContent = aluno.nome;
    document.querySelector('.profile-details p').textContent = aluno.curso;
    document.querySelector('.score h3').textContent = aluno.score;
    document.querySelector('.balance h3').textContent = aluno.saldo;
  })
  .catch(error => console.error('Erro ao carregar o JSON:', error));
