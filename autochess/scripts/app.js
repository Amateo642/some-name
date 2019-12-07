// rarity
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

// builder
let panelHeroes = document.querySelector(".panel-heroes");

const heroes = {
    'AbyssalCrawler': 1,
    'AbyssalGuard': 2,
    1: 'AbyssalCrawler',
    2: 'AbyssalGuard',
}

function chooseHero(heroName) {
    alert(heroes[heroName]);
}