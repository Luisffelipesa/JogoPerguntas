// variáveis para acessar elementos do HTML

const question = document.querySelector(".question");
const button = document.querySelector(".button");
const respostaA = document.querySelector(".opcaoA");
const respostaB = document.querySelector(".opcaoB");
const respostaC = document.querySelector(".opcaoC");
const respostaD = document.querySelector(".opcaoD");

// objeto que armazena as perguntas, as respostas, o gabarito e a pontuação do jogador

const jogo = {
  perguntas: [
    "Qual animal é o Sonic?",
    "Qual mangá com número recorde de vendas no Japão?",
    "Qual o nome do principal velocista do desenho da Liga da Justiça?",
    "Qual o total de torres se tem no mapa principal de League of Legends?",
    "Como se chama a nave usada por Doctor Who para viajar pelo tempo-espaço?",
    "Qual apelido dado aos animes: Bleach, One Piece e Naruto, para se referir a sua popularidade?",
    "Qual animal é o Rocket Raccoon?",
    "Quantos rounds são necessários para vencer uma partida de CS:GO atualmente?",
    "Como chama a região em que Frodo vivia na Terra Média?",
    "Porque o anime Histórias de Terror tem uma dublagem cômica na sua versão americana?",
    "Em qual filme aparece o anti-herói Rorschach?",
    "Em RPG, qual classe tem vantagem contra undead?",
    "Qual é o nome do primeiro mestre Pokémon que aparece?",
    "O que é o One Piece?",
    "Quais os conjuntos de heróis fazem parte da equipe 'Os Defensores'?",
  ],
  respostas: [
    ["Porco-espinho", "Tamanduá", "Rato", "Tatu"],
    ["Naruto", "Dragon Ball", "One Piece", "Kimetsu no Yaiba"],
    ["Jay Garrick", "Berry Allen", "Wally West", "Bart Allen"],
    ["20", "22", "19", "25"],
    ["Delorean", "Time-Turner", "Time machine", "TARDIS"],
    ["The Big Tree", "The Great Three", "The Grand Three", "The Big Three"],
    ["Cachorro", "Raposa", "Guepardo", "Guaxinim"],
    ["10", "13", "15", "17"],
    ["Mordor", "Shire", "Gryffindor", "Gondor"],
    [
      "Pois os criadores acharam cômico",
      "Pois os dubladores não sabiam dublar",
      "Porque o anime tratava de assuntos ilegais",
      "Pois os dubladores não foram pagos",
    ],
    ["Watchmen", "Dr. Manhattan", "Liga da Justiça", "Capitã Marvel"],
    ["Clérigo", "Paladino", "Mago", "Monge"],
    ["Sabrina", "Brock", "Erika", "Misty"],
    [
      "A jornada é o verdadeiro One Piece",
      "Os amigos que fizemos ao longo do caminho",
      "Ainda não foi descoberto pelos fãs",
      "Uma grande pilha de ouro",
    ],
    [
      "Jhon Wick - Samurai X - Green Flash - Darth Vader",
      "Jessica Jones - Luke Cage - Punho de Ferro - Demolidor",
      "Motoqueiro Fantasma - Homem Aranha - Pistoleiro - Shang-Chi",
      "Miss Marvel - Arqueiro Verde - Namor - Drax",
    ],
  ],
  gabarito: [
    "A",
    "C",
    "C",
    "B",
    "D",
    "D",
    "D",
    "B",
    "B",
    "B",
    "A",
    "A",
    "D",
    "C",
    "B",
  ], // MANTER LETRAS MAIÚSCULAS PARA NÃO QUEBRAR O CÓDIGO
  pontuacao: 0,
};


const exibirPergunta = (index) => {
  // essa função recebe um índex de entrada e mostra a pergunta e as opções de resposta que correspondem a esse índex
  question.textContent = jogo.perguntas[index];
  respostaA.textContent = jogo.respostas[index][0];
  respostaB.textContent = jogo.respostas[index][1];
  respostaC.textContent = jogo.respostas[index][2];
  respostaD.textContent = jogo.respostas[index][3];
}; // esse index é iterado fora da função (linhas 115 e 119)

const comecarJogo = () => {
  exibirPergunta(0); // mostra a primeira pergunta ao iniciar o jogo
};

let perguntaAtual = 0; // valor setado para 0 para indicar que é a primeira pergunta, depois esse valor vai ser incrementado

const proximaPergunta = () => {
  // essa função verifica se alguma resposta foi selecionada, compara a resposta selecionada com o gabarito, atualiza a pontuação do jogador e cai numa estrutura condicional que avança para a próxima pergunta ou encerra o jogo dependendo da quantidade de perguntas que faltam
  const respostaSelecionada = document.querySelector("input:checked");

  if (respostaSelecionada) {
    const resposta = respostaSelecionada.id.slice(-1);
    // o .id é uma propriedade que pega o valor do id e o .slice(-1) vai dar o último caracter do id
    const respostaCorreta = jogo.gabarito[perguntaAtual];
    // como os nomes dos ids terminam em A, B, C ou D, ele vai checar e comparar o último caracter da string com o gabarito (que também tem valores A, B, C ou D)

    if (resposta === respostaCorreta) {
      alert("Resposta correta!"); // talvez seja necessário trocar o alert por uma pop-up estilizada
      jogo.pontuacao++; // incremento do valor da pontuação do jogador
    } else {
      alert("Resposta incorreta!"); // talvez seja necessário trocar o alert por uma pop-up estilizada
    }

    document.querySelector("input:checked").checked = false; // limpa a resposta anterior
    perguntaAtual++; // incremento do número da pergunta

    if (perguntaAtual < jogo.perguntas.length) {
      // avançar para a próxima ou encerrar o jogo
      exibirPergunta(perguntaAtual); // index da função exibirPergunta é iterado de acordo com o incremento logo acima desse bloco de código
    } else {
      alert(
        `Fim do jogo! Você acertou ${jogo.pontuacao} perguntas de ${jogo.perguntas.length} disponíveis.` // talvez seja necessário trocar o alert por um evento onclick para avançar para uma página de fim de jogo
      );
      location.reload()
      jogo.pontuacao = 0; // ao fim do jogo, a pontuação é setada para 0 e o jogo já pode ser reiniciado
      comecarJogo(); // jogo é reiniciado
    }
  } else {
    alert("Por favor, selecione uma resposta antes de prosseguir.");
  }
};

button.addEventListener("click", proximaPergunta); // evento para que quando o jogador clique no botão, a função proximaPergunta() seja executada. ela está sendo chamada ao ser passada como parâmetro do método.

comecarJogo(); // essa função está sendo chamada aqui para iniciar o jogo, exibindo a primeira pergunta para o jogador