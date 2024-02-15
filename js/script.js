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
document.getElementById('facile').addEventListener("click", timerDown)
document.getElementById('moyen').addEventListener("click", gameMoyen)
document.getElementById('moyen').addEventListener("click", timerDown)
document.getElementById('difficile').addEventListener("click", gameDifficile)
document.getElementById('difficile').addEventListener("click", timerDown)
document.getElementById('shiny').addEventListener("click", gameShiny)
document.getElementById('shiny').addEventListener("click", timerDown)
let time = 20000

function timerDown () { 
    const timerDown = setInterval(() => {
        if (time > 0) {
            time -= 1000;
            document.getElementById('timer').innerText = time / 1000 + " sec";
        } else {
            document.getElementById('timer').style.display="none"
            scoreCurrent()
            clearInterval(timerDown);
        }
}, 1000);
}

function gameFacile() {
    boiteLevel.style.display = "none";
    document.getElementById('timer').style.display = "block";
    document.getElementById('timer').innerText = time / 1000 + " sec";

    const random = Math.floor(Math.random() * 9);

    taupiqueurs[random].style.display = 'block';
    console.log(random);

    let noCheat = false
    taupiqueurs[random].addEventListener("click", () => {
        if(!noCheat){
            currentScore.score++
            document.getElementById('scoreActu').innerHTML='<li>Score : 00' + currentScore.score + '</li>'
            document.getElementsByTagName('body')[0].classList.add('bonk')
            clickSound.volume=0.4;
            clickSound.play();
            noCheat = true
        }
    })
    document.getElementsByTagName('body')[0].classList.remove('bonk')
    // Interval pour l'apparition des taupes
    const taupeInterval = setTimeout(() =>  {
        if (time > 0) {
            taupiqueurs[random].style.display = 'block';
            setTimeout(() => {
                taupiqueurs[random].style.display = 'none';
            }, 1100);
            setTimeout(() => {
                gameFacile()
            }, 1200);

        } else {
            taupiqueurs[random].style.display = 'none';
            document.getElementsByTagName('body')[0].classList.remove('bonk');
            clearTimeout(taupeInterval);
        }
    }, 1200);
}

function gameMoyen() {
    boiteLevel.style.display = "none";
    document.getElementById('timer').style.display = "block";
    document.getElementById('timer').innerText = time / 1000 + " sec";

    const random = Math.floor(Math.random() * 9);

    taupiqueurs[random].style.display = 'block';
    console.log(random);

    let noCheat = false
    taupiqueurs[random].addEventListener("click", () => {
        if(!noCheat){
            currentScore.score++
            document.getElementById('scoreActu').innerHTML='<li>Score : 00' + currentScore.score + '</li>'
            document.getElementsByTagName('body')[0].classList.add('bonk')
            clickSound.volume=0.4;
            clickSound.play();
            noCheat = true
        }
    })
    document.getElementsByTagName('body')[0].classList.remove('bonk');
    // Interval pour l'apparition des taupes
    const taupeInterval = setTimeout(() =>  {
        if (time > 0) {
            taupiqueurs[random].style.display = 'block';
            setTimeout(() => {
                taupiqueurs[random].style.display = 'none';
            }, 600);
            setTimeout(() => {
                gameMoyen()
            }, 700);

        } else {
            taupiqueurs[random].style.display = 'none';
            document.getElementsByTagName('body')[0].classList.remove('bonk');
            clearTimeout(taupeInterval);
        }
    }, 700);
}

function gameDifficile() {
    boiteLevel.style.display = "none";
    document.getElementById('timer').style.display = "block";
    document.getElementById('timer').innerText = time / 1000 + " sec";

    const random = Math.floor(Math.random() * 9);

    taupiqueurs[random].style.display = 'block';
    console.log(random);

    let noCheat = false
    taupiqueurs[random].addEventListener("click", () => {
        if(!noCheat){
            currentScore.score++
            document.getElementById('scoreActu').innerHTML='<li>Score : 00' + currentScore.score + '</li>'
            document.getElementsByTagName('body')[0].classList.add('bonk')
            clickSound.volume=0.4;
            clickSound.play();
            noCheat = true
        }
    })
    document.getElementsByTagName('body')[0].classList.remove('bonk');
    // Interval pour l'apparition des taupes
    const taupeInterval = setTimeout(() =>  {
        if (time > 0) {
            taupiqueurs[random].style.display = 'block';
            setTimeout(() => {
                taupiqueurs[random].style.display = 'none';
            }, 300);
            setTimeout(() => {
                gameDifficile()
            }, 400);

        } else {
            taupiqueurs[random].style.display = 'none';
            document.getElementsByTagName('body')[0].classList.remove('bonk');
            clearTimeout(taupeInterval);
        }
    }, 400);
}

let shiny = 0;
function gameShiny() {
    boiteLevel.style.display = "none";
    document.getElementById('timer').style.display = "block";
    document.getElementById('timer').innerText = time / 1000 + " sec";

    const random = Math.floor(Math.random() * 9);
    taupiqueurs[random].style.display = 'block';
    const isShiny = Math.random() < 0.2;
    if (isShiny) {
        taupiqueurs[random].style.display = 'block';
        taupiqueurs[random].classList.add('shiny')
    }

    let noCheat = false
    taupiqueurs[random].addEventListener("click", () => {
        if(!noCheat){
            if (isShiny) {
                currentScore.score+=10
            }
            else {
                currentScore.score++
            }
            document.getElementById('scoreActu').innerHTML='<li>Score : 00' + currentScore.score + '</li>'
            document.getElementsByTagName('body')[0].classList.add('bonk')
            clickSound.volume=0.4;
            clickSound.play();
            noCheat = true
        }
    })
    document.getElementsByTagName('body')[0].classList.remove('bonk');
    // Interval pour l'apparition des taupes
    const taupeInterval = setTimeout(() =>  {
        if (time > 0) {    
            taupiqueurs[random].style.display = 'block';
            setTimeout(() => {
                taupiqueurs[random].style.display = 'none';
                taupiqueurs[random].classList.remove('shiny')
            }, 600);
            setTimeout(() => {
                gameShiny()
            }, 700);
        } else {
            taupiqueurs[random].style.display = 'none';
            document.getElementsByTagName('body')[0].classList.remove('bonk');
            clearTimeout(taupeInterval);
        }
    }, 700);
}

function scoreCurrent() {
    let players
    if(localStorage.getItem('Players') === null) {
        players = []
    } else {
        players = JSON.parse(localStorage.getItem("Players"))
    }

    boiteTexte.style.display='block';
    document.getElementsByClassName('reload')[0].style.display='block';
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

function reload() {
    window.location.reload();
}