const optionsMenu = document.querySelector(".options")
const optionsRobotRock = document.querySelector('.robot-rock')
const optionsRobotPaper = document.querySelector('.robot-paper')
const optionsRobotScissors = document.querySelector('.robot-scissors')
const optionTeste = document.querySelector('.preda')
const playerPoints = document.querySelector('#player-points')
const robotPoints = document.querySelector('#robot-points')
const resultText = document.querySelector(".result")

const choices = ["R", "P", "S"] 
let humanScore = 0
let computerScore = 0

const getComputerChoice = () => {
    const computerChoice = Math.floor(Math.random() * 3)
    return choices[computerChoice]
}

const displayRobotChoice = (robotchoice) => {
    optionsRobotRock.style.display = "none"
    optionsRobotPaper.style.display = 'none'
    optionsRobotScissors.style.display = 'none'
    optionTeste.style.display = 'none'

    switch(robotchoice) {
        case 'R':
            optionsRobotRock.style.display = "block"
            break
        case 'P':
            optionsRobotPaper.style.display = 'block'
            break
        case "S":
            optionsRobotScissors.style.display = 'block'
            break
    }
}

function playgame() {
    if (humanScore >= 10) {
        resultText.style.color = 'green'
        resultText.style.borderColor = 'green'
        resultText.textContent = `Você Ganhou: ${humanScore} x ${computerScore}`
        computerScore = 0
        humanScore = 0
        playerPoints.textContent = humanScore
        robotPoints.textContent = computerScore
    } else if (computerScore >= 10) {
        resultText.style.color = 'red'
        resultText.style.borderColor = 'red'
        resultText.textContent = `Você Perdeu: ${humanScore} x ${computerScore}`
        computerScore = 0
        humanScore = 0
        playerPoints.textContent = humanScore
        robotPoints.textContent = computerScore
    }
}

const playRound = (escolha, escolhaComputador) => {
    displayRobotChoice(escolhaComputador);
    
    document.querySelectorAll('.robot-options img').forEach(img => img.classList.remove('show'));
    
    if (escolhaComputador === 'R') {
        document.querySelector('.robot-rock').classList.add('show');

    } else if (escolhaComputador === 'P') {
        document.querySelector('.robot-paper').classList.add('show');
    } else if (escolhaComputador === 'S') {
        document.querySelector('.robot-scissors').classList.add('show');
    }

    if (escolha === escolhaComputador) {
        resultText.textContent = 'Vocês empataram!';
    } else if (escolha === 'R' && escolhaComputador === 'P') {
        resultText.textContent = 'Papel cobre pedra! Você perdeu';
        resultText.style.color = 'red';
        resultText.style.borderColor = 'red';
        computerScore++;
        robotPoints.textContent = computerScore;
    } else if (escolha === 'P' && escolhaComputador === 'R') {
        resultText.textContent = 'Papel cobre pedra! Você venceu';
        resultText.style.color = 'green';
        resultText.style.borderColor = 'green';
        humanScore++;
        playerPoints.textContent = humanScore;
    } else if (escolha === 'R' && escolhaComputador === 'S') {
        resultText.textContent = 'Pedra esmaga tesoura! Você venceu';
        resultText.style.color = 'green';
        resultText.style.borderColor = 'green';
        humanScore++;
        playerPoints.textContent = humanScore;
    } else if (escolha === 'S' && escolhaComputador === 'R') {
        resultText.textContent = 'Pedra esmaga tesoura! Você perdeu';
        resultText.style.color = 'red';
        resultText.style.borderColor = 'red';
        computerScore++;
        robotPoints.textContent = computerScore;
    } else if (escolha === 'P' && escolhaComputador === 'S') {
        resultText.textContent = 'Tesoura corta papel! Você perdeu';
        resultText.style.color = 'red';
        resultText.style.borderColor = 'red';
        computerScore++;
        robotPoints.textContent = computerScore;
    } else if (escolha === 'S' && escolhaComputador === 'P') {
        resultText.textContent = 'Tesoura corta papel! Você venceu';
        resultText.style.color = 'green';
        resultText.style.borderColor = 'green';
        humanScore++;
        playerPoints.textContent = humanScore;
    }
    
    playgame();
};




optionsMenu.addEventListener('click', (e) => {
    const target = e.target
    resultText.style.color = 'black'
    switch(target.className) {
        case "rock":
            playRound('R', getComputerChoice())
            break;
        case "paper":
            playRound('P', getComputerChoice())
            break;
        case "scissors":
            playRound("S", getComputerChoice())
            break;
    }
})