//Créer fonction d'apparition random
//Timer à 30 sec une partie

//Au click sur une taupe, donner 1 point
//Stocker le point dans le score
//Prendre le score à la fin de la partie et l'enregistrer dans un tableau

const currentScore = {
    playername,
    score: 0,
}

const boiteTexte = document.getElementsByClassName("textbox")[0]
const boiteStart = document.getElementsByClassName("startgame")[0]
const boiteLevel = document.getElementsByClassName("level")[0]
const boiteBoard = document.getElementsByClassName("leaderboard")[0]
boiteBoard.style.display="none"

function startgame(){
    const name = document.getElementById("playername").value
    currentScore.playername = name;
    if(name !== '') {
        console.log(currentScore);
        boiteTexte.style.display="none"
        boiteStart.style.display="none"
        boiteLevel.style.display="flex"
    } else {
        alert('Veuillez entrer un nom avant de commencer')
    }
}

const holes = document.getElementsByClassName('hole')
const taupiqueurs = document.getElementsByClassName('taupiqueur')

document.getElementById('facile').addEventListener("click", game)
document.getElementById('moyen').addEventListener("click", game)
document.getElementById('difficile').addEventListener("click", game)
let time = 8000

function game() {
    boiteLevel.style.display="none"
    const random = Math.floor(Math.random() * 9)

    taupiqueurs[random];
    taupiqueurs[random].style.display = 'block';

    let noCheat = false
    taupiqueurs[random].addEventListener("click", () => {
        if(!noCheat){
            currentScore.score++
            document.getElementById('scoreActu').innerHTML='<li>Score : 00' + currentScore.score + '</li>'
            console.log(currentScore.score);
            noCheat = true
        }
    });

    if (time > 0) {
    setTimeout(() => {
        taupiqueurs[random].style.display = 'none';
        setTimeout(game, 2000); // Montre à nouveau après 1 seconde & Reboucle
        time = time-2000
        }, 2000); // Cache après 1 seconde
    }
    if (time == 0) {
        scoreCurrent()
    }

    
}



function scoreCurrent() {
    let players
    console.log(localStorage.getItem('Player'));
    if(localStorage.getItem('Players') === null) {
        players = []
        console.log('Viiiide');
    } else {
        players = JSON.parse(localStorage.getItem("Players"))
        console.log(players);
    }

    boiteTexte.style.display='block';
    boiteTexte.innerHTML='<p>Bravo ' + currentScore.playername + ' ! <br> Ton score est de : ' + currentScore.score + '</p> <img src="img/taupiqueur_score.png" alt="Taupiqueur">';
    
    players.push({"Nom":currentScore.playername,"Score":currentScore.score})
    let leaderboardPlayer = JSON.stringify(players)
    localStorage.setItem("Players", leaderboardPlayer)
}

function leaderboard() {
    let players = JSON.parse(localStorage.getItem("Players"))
    boiteBoard.classList.toggle('show')
    boiteBoard.style.zindex="10";
    boiteBoard.innerHTML='<p>Total des scores :</p>'
    for (let i = 0; i < players.length; i++) {
        const player = players[i];
        boiteBoard.innerHTML+='<p>' + player.Nom + " : " + player.Score + '</p>'
    }
    boiteBoard.innerHTML+='<img src="img/taupiqueur_leaderboard.png" alt="Taupiqueur">'
}