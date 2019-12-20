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
const builder = document.querySelector(".builder");
const panelHeroes = document.querySelector(".panel-heroes");

function toggleHeroes() {
    if (panelHeroes.style.display === "none") {
        panelHeroes.style.display = "block";
    } else {
        panelHeroes.style.display = "none";
    }
}

const heroes = {
    'AbyssalCrawler': 1,
    'AbyssalGuard': 2,
    'ArgailKnight': 3,
    'Berserker': 4,
    'BlightSorcerer': 5,
    'DarkSpirit': 6,
    'Defector': 7,
    'DesperateDoctor': 8,
    'Devastator': 9,
    'DoomArbiter': 10,
    'DragonKnight': 11,
    'DwarfSniper': 12,
    'EgersisProphet': 13,
    'EgersisRanger': 14,
    'EvilKnight': 15,
    'FallenWitcher': 16,
    'FlammingWizard': 17,
    'FortuneTeller': 18,
    'FrostKnight': 19,
    'GodOfThunder': 20,
    'GodOfWar': 21,
    'GrandHerald': 22,
    'Grimtouch': 23,
    'HeavenBomber': 24,
    'Helicopter': 25,
    'HellKnight': 26,
    'LightbladeKnight': 27,
    'LordOfSand': 28,
    'OgreMage': 29,
    'PhantomQueen': 30,
    'PirateCaptain': 31,
    'PoisonousWorm': 32,
    'RazorClaw': 33,
    'RedaxeChief': 34,
    'Ripper': 35,
    'RogueGuard': 36,
    'ShadowCrawler': 37,
    'ShadowDevil': 38,
    'ShiningArcher': 39,
    'ShiningAssassin': 40,
    'ShiningDragon': 41,
    'Siren': 42,
    'SkullHunter': 43,
    'SkyBreaker': 44,
    'SoulBreaker': 45,
    'SoulReaper': 46,
    'StoneSpirit': 47,
    'StormShaman': 48,
    'StrangeEgg': 49,
    'Swordman': 50,
    'TabooWitcher': 51,
    'TheSource': 52,
    'ThunderSpirit': 53,
    'TortolaElder': 54,
    'TsunamiStalker': 55,
    'TuskChampion': 56,
    'Unicorn': 57,
    'Venom': 58,
    'Venomancer': 59,
    'WarpwoodSage': 60,
    'WaterSpirit': 61,
    'Werewolf': 62,
    'WindRanger': 63,
    'WinterChiropteran': 64,
    'WisperSeer': 65,

    1: 'AbyssalCrawler',
    2: 'AbyssalGuard',
    3: 'ArgailKnight',
    4: 'Berserker',
    5: 'BlightSorcerer',
    6: 'DarkSpirit',
    7: 'Defector',
    8: 'DesperateDoctor',
    9: 'Devastator',
    10: 'DoomArbiter',
    11: 'DragonKnight',
    12: 'DwarfSniper',
    13: 'EgersisProphet',
    14: 'EgersisRanger',
    15: 'EvilKnight',
    16: 'FallenWitcher',
    17: 'FlammingWizard',
    18: 'FortuneTeller',
    19: 'FrostKnight',
    20: 'GodOfThunder',
    21: 'GodOfWar',
    22: 'GrandHerald',
    23: 'Grimtouch',
    24: 'HeavenBomber',
    25: 'Helicopter',
    26: 'HellKnight',
    27: 'LightbladeKnight',
    28: 'LordOfSand',
    29: 'OgreMage',
    30: 'PhantomQueen',
    31: 'PirateCaptain',
    32: 'PoisonousWorm',
    33: 'RazorClaw',
    34: 'RedaxeChief',
    35: 'Ripper',
    36: 'RogueGuard',
    37: 'ShadowCrawler',
    38: 'ShadowDevil',
    39: 'ShiningArcher',
    40: 'ShiningAssassin',
    41: 'ShiningDragon',
    42: 'Siren',
    43: 'SkullHunter',
    44: 'SkyBreaker',
    45: 'SoulBreaker',
    46: 'SoulReaper',
    47: 'StoneSpirit',
    48: 'StormShaman',
    49: 'StrangeEgg',
    50: 'Swordman',
    51: 'TabooWitcher',
    52: 'TheSource',
    53: 'ThunderSpirit',
    54: 'TortolaElder',
    55: 'TsunamiStalker',
    56: 'TuskChampion',
    57: 'Unicorn',
    58: 'Venom',
    59: 'Venomancer',
    60: 'WarpwoodSage',
    61: 'WaterSpirit',
    62: 'Werewolf',
    63: 'WindRanger',
    64: 'WinterChiropteran',
    65: 'WisperSeer',
}

function chooseHero(heroName) {
    console.log(heroName, heroes[heroName]);
    toggleHeroes();
    const img = document.createElement('img');
    img.src = `images/face/${heroName}.png`;
    builder.appendChild(img);
}