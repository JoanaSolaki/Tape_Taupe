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
let time = 5000

function game() {
    boiteLevel.style.display="none"
    const random = Math.floor(Math.random() * 9)
    console.log(random);

    taupiqueurs[random];
    taupiqueurs[random].style.display = 'block';

    if (time > 0) {
    setTimeout(() => {
        taupiqueurs[random].style.display = 'none';
        setTimeout(game, 1000); // Montre à nouveau après 1 seconde
        time = time-1000
        }, 1000); // Cache après 1 seconde
}
}