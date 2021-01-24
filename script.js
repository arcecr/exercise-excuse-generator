let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];      

let generateRandomPhrase = (arr) => arr[Math.floor(Math.random() * arr.length)]

let generateExcuse = () => {
    let excuse = generateRandomPhrase(who) + " " + generateRandomPhrase(action) + " " + generateRandomPhrase(what) + " " + generateRandomPhrase(action);

    const excuseParagraph = document.getElementById("excuse");
    excuseParagraph.innerHTML = excuse;
}

window.addEventListener("load", generateExcuse());