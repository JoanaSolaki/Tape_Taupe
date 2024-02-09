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

document.getElementById('facile').addEventListener("click", gameFacile)
document.getElementById('moyen').addEventListener("click", gameMoyen)
document.getElementById('difficile').addEventListener("click", gameDifficile)
let time = 10000

function gameFacile() {
    boiteLevel.style.display="none"
    document.getElementById('timer').style.display="block"
    const random = Math.floor(Math.random() * 9)

    taupiqueurs[random];
    taupiqueurs[random].style.display = 'block';

    let noCheat = false
    taupiqueurs[random].addEventListener("click", () => {
        document.getElementsByTagName('body')[0].classList.add('bonk')
        if(!noCheat){
            currentScore.score++
            document.getElementById('scoreActu').innerHTML='<li>Score : 00' + currentScore.score + '</li>'
            noCheat = true
        }
        
    });

    if (time > 0) {
    setTimeout(() => {
        taupiqueurs[random].style.display = 'none';
        document.getElementsByTagName('body')[0].classList.remove('bonk')
        setTimeout(gameFacile, 1200); // Montre à nouveau après 1 seconde & Reboucle
        time = time-1200
        }, 1200); // Cache après 1 seconde
        
        document.getElementById('timer').innerText = time / 1000
    }
    else {
        taupiqueurs[random].style.display = 'none';
        document.getElementById('timer').style.display="none"
        scoreCurrent()
    }
}

function gameMoyen() {
    boiteLevel.style.display="none"
    document.getElementById('timer').style.display="block"
    const random = Math.floor(Math.random() * 9)

    taupiqueurs[random];
    taupiqueurs[random].style.display = 'block';

    let noCheat = false
    taupiqueurs[random].addEventListener("click", () => {
        document.getElementsByTagName('body')[0].classList.add('bonk')
        if(!noCheat){
            currentScore.score++
            document.getElementById('scoreActu').innerHTML='<li>Score : 00' + currentScore.score + '</li>'
            noCheat = true
        }
    });

    if (time > 0) {
        setTimeout(() => {
            taupiqueurs[random].style.display = 'none';
            document.getElementsByTagName('body')[0].classList.remove('bonk')
            setTimeout(gameMoyen, 1000); // Montre à nouveau après 1 seconde & Reboucle
            time = time-1000
            }, 1000); // Cache après 1 seconde
            
            document.getElementById('timer').innerText = time / 1000
        }
        else {
            taupiqueurs[random].style.display = 'none';
            document.getElementById('timer').style.display="none"
            scoreCurrent()
        }
}

function gameDifficile() {
    boiteLevel.style.display="none"
    document.getElementById('timer').style.display="block"
    const random = Math.floor(Math.random() * 9)

    taupiqueurs[random];
    taupiqueurs[random].style.display = 'block';

    let noCheat = false
    taupiqueurs[random].addEventListener("click", () => {
        document.getElementsByTagName('body')[0].classList.add('bonk')
        if(!noCheat){
            currentScore.score++
            document.getElementById('scoreActu').innerHTML='<li>Score : 00' + currentScore.score + '</li>'
            noCheat = true
        }
    });

    if (time > 0) {
        setTimeout(() => {
            taupiqueurs[random].style.display = 'none';
            document.getElementsByTagName('body')[0].classList.remove('bonk')
            setTimeout(gameDifficile, 800); // Montre à nouveau après 1 seconde & Reboucle
            time = time-800
            }, 800); // Cache après 1 seconde
            
            document.getElementById('timer').innerText = time / 1000
        }
        else {
            taupiqueurs[random].style.display = 'none';
            document.getElementById('timer').style.display="none"
            scoreCurrent()
        }
}

function scoreCurrent() {
    let players
    if(localStorage.getItem('Players') === null) {
        players = []
    } else {
        players = JSON.parse(localStorage.getItem("Players"))
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