//게임 플레이 횟수
let chance = 10;

const computerChoice = ['rock', 'paper', 'scissor'];    

function game(){
  const currentChance = document.querySelector('#choice-left');
  currentChance.innerHTML = `남은 기회: ${chance}`;

  const randomIndex = Math.floor(Math.random() * 3);
  const computer = computerChoice[randomIndex];
  const player = String(this);
  
  console.log(`player: ${player}, computer: ${computer}`);
  //게임 시작
  if(player === computer) console.log('same')
  else if(player === 'rock' && computer === 'scissor') document.querySelector('#player-score-number').innerHTML++;
  else if(player === 'scissor' && computer === 'paper') document.querySelector('#player-score-number').innerHTML++;
  else if(player === 'paper' && computer === 'rock') document.querySelector('#player-score-number').innerHTML++;
  else document.querySelector('#computer-score-number').innerHTML++;


  //횟수 체크
  if(chance === 0){
    result();
  }
}


function result(){
  const choiceOption = document.querySelector('.choice');
  choiceOption.style.display = 'none';

  const resultOption = document.createElement('div');
  resultOption.className = 'result';

  resultOption.innerHTML = `
  <h2 class = 'choice'>게임 종료!</h2>
  <h3 class = 'choice' style='color:red'>게임에서 졌습니다.</h3>
  <button class='restart-button' onclick='location.reload();'>다시 시작</button>
  `;
  document.body.appendChild(resultOption);
}




const btnScissor = document.querySelector('#scissor');
const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');

btnScissor.addEventListener('click', ()=>{
  chance--;
  game.call('scissor');
    
});
btnRock.addEventListener('click', ()=>{
  chance--;
  game.call('rock');
});
btnPaper.addEventListener('click', ()=>{
  chance--;
  game.call('paper');
  
});

