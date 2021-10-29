const heros = [
{
    name: 'супермэн',
    universe: 'DC Comics'
},{
    name: 'cупер женщина',
    universe: 'DC Comics'
},{
    name: 'железный человек',
    universe: 'Marvel Comics'
}
];

let result = "";

for (hero of heros){
    result +=
    '<div class="hero_name: ">' + hero.name + '</div>' +
    '<div class="hero_universe: ">' + hero.universe + '</div>';
}

document.getElementById('marvel').innerHTML = result;
