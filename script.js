let viewport = document.getElementById("viewport");
let kenny = document.getElementById("kenny")
let i = 0;
let compteur = document.createElement("div");
let zoneDeath = document.createElement("div");

document.body.appendChild(compteur);
compteur.style.width = "100%";
compteur.style.textAlign = "center";
compteur.innerHTML = "Compteur de mort: " + i;

viewport.prepend(zoneDeath);
zoneDeath.style.width = "50px";
zoneDeath.style.height = "50px";
zoneDeath.style.backgroundColor = "red";

//Faire monter le personnage

document.getElementById('up').addEventListener('click',up);
document.body.addEventListener("keypress", up);

function up (eventTop) {
    if((eventTop.key) === "z" || eventTop.type === "click") {
        let t = parseInt(kenny.style.top);
        if((parseInt(kenny.style.left) <= 50) && (parseInt(kenny.style.top) <= 50)) {
            alert("vous êtes mort!!!!");
            kenny.style.top = "200px";
            kenny.style.left = "200px";
            i++;
            compteur.innerHTML = "Compteur de mort: " + i;
        }
        else if(parseInt(kenny.style.top) !== 0) {
            kenny.style.top = (t - 10)+ 'px';
        }
    }
}

//Faire aller à gauche le personnage

document.getElementById('left').addEventListener('click',left);
document.body.addEventListener("keypress", left);

function left (eventLeft) {
    if((eventLeft.key) === "q" || eventLeft.type === "click") {
        let l = parseInt(kenny.style.left);
        if((parseInt(kenny.style.left) <= 50) && (parseInt(kenny.style.top) <= 50)) {
            alert("vous êtes mort!!!!");
            kenny.style.top = "200px";
            kenny.style.left = "200px";
            i++;
            compteur.innerHTML = "Compteur de mort: " + i;
        }
        else if(parseInt(kenny.style.left) !== 0) {
            kenny.style.left = (l - 10) + 'px';
        }
    }
}

//Faire aller à droite le personnage

document.getElementById('right').addEventListener('click',right);
document.body.addEventListener("keypress", right);

function right (eventRight) {
    if((eventRight.key) === "d" || eventRight.type === "click") {
        let r = parseInt(kenny.style.left);
        if((parseInt(kenny.style.left) <= 50) && (parseInt(kenny.style.top) <= 50)) {
            alert("vous êtes mort!!!!");
            kenny.style.top = "200px";
            kenny.style.left = "200px";
            i++;
            compteur.innerHTML = "Compteur de mort: " + i;
        }
        else if(parseInt(kenny.style.left) < 468 ) {
            kenny.style.left = (r + 10) + 'px';
        }
    }
}

//Faire aller en bas le personnage

document.getElementById('down').addEventListener('click',bottom);
document.body.addEventListener("keypress", bottom);

function bottom (eventDown) {
    if((eventDown.key) === "s" || eventDown.type === "click") {
        let d = parseInt(kenny.style.top);
        if((parseInt(kenny.style.left) <= 50) && (parseInt(kenny.style.top) <= 50)) {
            alert("vous êtes mort!!!!");
            kenny.style.top = "200px";
            kenny.style.left = "200px";
            i++;
            compteur.innerHTML = "Compteur de mort: " + i;
        }
        if(parseInt(kenny.style.top) < 468) {
            kenny.style.top = (d + 10) + 'px';
        }
    }
}