let blokje1 = document.querySelector("#blokje1");
let knop_blokje1 = document.querySelector("#knop_blokje1");


blokje1.style.backgroundColor = "green";
blokje1.style.fontFamily = "Arial";

blokje1.innerHTML = "<strong>Oliver Putnam</strong> is a chaotic, bankrupt musical producent. who loves dips and being dramatic";

function zegHallo() {
    blokje1.innerHTML = "<strong> Played by Martin Short</strong>";
    blokje1.style.backgroundColor = "green";
}

//zegHallo();

knop_blokje1.addEventListener("click", zegHallo );





let blokje2 = document.querySelector("#blokje2");
let knop_blokje2 = document.querySelector ("#knop_blokje2");

blokje2.style.backgroundColor = "red";
blokje2.style.fontFamily = "Arial";

blokje2.innerHTML = "<strong>Charles Haden-Savage</strong> is a retired actor who is reserved, lonely and likes to make omelettes.";

function Charles() {
    blokje2.innerHTML = "<strong> Played by Steve Martin </strong>";
}

knop_blokje2.addEventListener("click", Charles);









let blokje3 = document.querySelector("#blokje3");
let knop_blokje3 = document.querySelector ("#knop_blokje3");

blokje3.style.backgroundColor = "yellow";
blokje3.style.fontFamily = "Arial";

blokje3.innerHTML = "<strong>Mabel Mora</strong> is a mysterious young woman with a dark past who loves drawing and solving mysteries.";

function Mabel() {
    blokje3.innerHTML = "<strong>Played by Selena Gomez</strong>";
}

knop_blokje3.addEventListener("click", Mabel);

