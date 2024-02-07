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
    boiteTexte.style.display='block';
    boiteTexte.innerHTML='<p>Bravo ' + currentScore.playername + ' ! <br> Ton score est de : ' + currentScore.score + '</p> <img src="img/taupiqueur_score.png" alt="Taupiqueur">'
    localStorage.setItem("Nom du joueur", currentScore.playername)
    localStorage.setItem("Score", currentScore.score)
    let leaderBoardName = localStorage.getItem("Nom du joueur")
    let leaderBoardScore = localStorage.getItem("Score")
    console.log(leaderBoardName, leaderBoardScore);
}

