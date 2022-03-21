let jmena = [
    "Markéta",
    "Kateřina",
    "Júlia",
    "Lucie",
    "Aneta",
    "Veronika",
    "Petra",
    "Olga",
    "Naďa",
    "Nikola",
    "Eva",
    "Anísa",
    "Terezia",
    "Diana",
    "Anna",
    "Iva",
    "Denisa",
    "Zuzana",
    "Jana",
    "Martina",
    "Lenka",
    "Iveta",
    "Pavla",
    "Lucie",
    "Kamila",
    "Soňa"
];

let tazenaJmena = [];
let pocitadlo = 0;

function tahnoutJmeno() {
    if (jmena.length === 0) {
        return;
    }

    // Generujeme náhodný index
    let vyherniIndex = Math.floor(Math.random() * jmena.length);

    // Získáme výherní jméno na patřičném indexu
    let vyherniJmeno = jmena[vyherniIndex];

    // Vyřadíme vylosované jméno z osudí
    jmena.splice(vyherniIndex, 1);

    // Výherní jméno si uložíme do pole k ostatním výherním
    tazenaJmena.unshift(vyherniJmeno);

    let zapisVyhernihoJmena = document.querySelector("#vyherka");
    zapisVyhernihoJmena.textContent = vyherniJmeno;

    let seznamVyhercu = document.querySelector("#seznam");
    seznamVyhercu.textContent = tazenaJmena;

    pocitadlo = tazenaJmena.length;
    console.log(pocitadlo)
    let pocetVyhercu = document.querySelector("#pocet");
    pocetVyhercu.textContent = pocitadlo;
}

function restart() {
    // tažená jména vrátím do seznamu jmen
    tazenaJmena.forEach(function(ele) {
        jmena.push(ele);
    });

    // tažená jména a počitadlo vyprázdním
    tazenaJmena = [];
    console.log(jmena);

    let pocetVyhercu = document.querySelector("#pocet");
    pocetVyhercu.textContent = 0;

    let seznamVyhercu = document.querySelector("#seznam");
    seznamVyhercu.textContent = "";

    let zapisVyhernihoJmena = document.querySelector("#vyherka");
    zapisVyhernihoJmena.textContent = "";
}