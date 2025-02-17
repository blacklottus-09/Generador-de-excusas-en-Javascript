import "bootstrap";
import "./style.css";

let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function excuseGenerator(who, action, what, when) {
    let numWho = Math.floor(Math.random() * who.length);
    let numAction = Math.floor(Math.random() * action.length);
    let numWhat = Math.floor(Math.random() * what.length);
    let numWhen = Math.floor(Math.random() * when.length);

    return `${who[numWho]} ${action[numAction]} ${what[numWhat]} ${when[numWhen]}.`;
}

function onLoad() {
    let excuseElement = document.getElementById('excuse');
    if (excuseElement) {
        excuseElement.innerHTML = excuseGenerator(who, action, what, when);
    } else {
        console.error("Element with ID 'excuse' not found.");
    }
}

window.onload = onLoad;

document.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementById("generateExcuse");
    if (button) {
        button.addEventListener("click", function () {
            document.getElementById("excuse").innerHTML = excuseGenerator(who, action, what, when);
        });
    }
});
