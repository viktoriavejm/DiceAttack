
let namep1 = "";
let namep2 = "";

let life1 = 0;
let life2 = 0;
let damage1 = 0;
let damage2 = 0;

let char1 = "";
let char2 = "";

let würfel1;
let würfel2;

let liveState1 = life1;
let liveState2 = life2;


function Creeper1() {
    document.getElementById('Creeper').style.border = 'solid lightblue 10px'

    life1 = 5;
    damage1 = 5;

    liveState1 = life1;


    char1 = 'Creeper';

    document.getElementById('Zombie').style.border = ''
    document.getElementById('Skeleton').style.border = ''
}

function Skeleton1() {
    document.getElementById('Skeleton').style.border = 'solid lightblue 10px'

    life1 = 9;
    damage1 = 3;
    liveState1 = life1;


    char1 = 'Skeleton';

    document.getElementById('Creeper').style.border = ''
    document.getElementById('Zombie').style.border = ''
}

function Zombie1() {
    document.getElementById('Zombie').style.border = 'solid lightblue 10px'

    life1 = 11;
    damage1 = 2;

    liveState1 = life1;


    char1 = 'Zombie'

    document.getElementById('Creeper').style.border = ''
    document.getElementById('Skeleton').style.border = ''
}


function Creeper2() {
    document.getElementById('Creeper2').style.border = 'solid lightblue 10px'

    life2 = 5;
    damage2 = 5;

    
    liveState2 = life2;

    char2 = 'Creeper',


    document.getElementById('Zombie2').style.border = ''
    document.getElementById('Skeleton2').style.border = ''
}

function Skeleton2() {
    document.getElementById('Skeleton2').style.border = 'solid lightblue 10px'

    life2 = 9;
    damage2 = 3;

    liveState2 = life2;

    char2 = 'Skeleton';

    document.getElementById('Creeper2').style.border = ''
    document.getElementById('Zombie2').style.border = ''
}

function Zombie2() {
    document.getElementById('Zombie2').style.border = 'solid lightblue 10px'

    life2 = 11;
    damage2 = 2;

    liveState2 = life2;

    char2 = 'Zombie';

    document.getElementById('Creeper2').style.border = ''
    document.getElementById('Skeleton2').style.border = ''
}


function weiter1() {
    namep1 = document.getElementById('name1').value;

    document.getElementById('player1name').style.display = 'none'
    document.getElementById('button').style.display = 'none'
    document.getElementById('player1').style.display = 'none'
    document.getElementById('player2').style.display = 'grid'
    document.getElementById('button2').style.display = 'inline'
    document.getElementById('player2name').style.display = 'inline'
}

function livess1(life1) {
    for (let i = 0; i < life1; i++) {
        document.getElementById('lives1').innerHTML += '<img src="herz.png" alt="">';
    }

}

function livess2(life2) {
    
    for (let i = 0; i < life2; i++) {
        document.getElementById('lives2').innerHTML += '<img src="herz.png" alt="">'; 
    }
}

function weiter2() {
    namep2 = document.getElementById('name2').value;

    document.getElementById('player2').style.display = 'none'
    document.getElementById('player2name').style.display = 'none'
    document.getElementById('button2').style.display = 'none'
    document.getElementById('h1Play').style.display = 'block'
    document.getElementById('starts').style.display = 'block'
    document.getElementById('gridGame').style.display = 'grid'

    document.getElementById('namePl1').innerHTML = `Player 1: ${namep1}`;
    document.getElementById('namePl2').innerHTML = `Player 2: ${namep2}`;

    


    livess1(life1)
    livess2(life2)


    for (let i = 0; i < damage1; i++) {
        document.getElementById('damage1').innerHTML += '<img src="schaden.png" alt="">';
    }

    for (let i = 0; i < damage2; i++) {
        document.getElementById('damage2').innerHTML += '<img src="schaden.png" alt="">'; 
    }

    document.getElementById('char1P').innerHTML = `<img src="${char1}.png" alt="">`
    document.getElementById('char2P').innerHTML = `<img src="${char2}.png" alt="">`

    document.getElementById('rollP').style.display = 'block'

}


function generateRandomNumber() {
    let randomNumber = Math.random();
    randomNumber = randomNumber * 6;
    randomNumber = Math.ceil(randomNumber);

    return randomNumber;
}

function roll() {
    
   
    document.getElementById('lives1').innerHTML = ""
    document.getElementById('lives2').innerHTML = ""
    document.getElementById('rollW1').innerHTML = ""
    document.getElementById('rollW2').innerHTML = ""
    würfel1 = generateRandomNumber();
    würfel2 = generateRandomNumber();
    console.log('Player 1: ' + würfel1)
    console.log('Player 2: ' + würfel2)

    document.getElementById('rollW1').innerHTML = `<img src="würfel${würfel1}.jpg" alt"">`
    document.getElementById('rollW2').innerHTML = `<img src="würfel${würfel2}.jpg" alt"">`

    

    if(würfel1 > würfel2){
        life2 = life2 - damage1;
    } else if (würfel1 < würfel2){
        life1 = life1 - damage2;
    }

    livess1(life1)
    livess2(life2)

    if (life1 == 0 || life1 < 0) {
        document.getElementById('winner').style.display = 'block';
        document.getElementById('winner').innerHTML = `${namep2} hat gewonnen!`
        document.getElementById('char1P').style.display = 'none';
        document.getElementById('playA').style.display = 'block';
        document.getElementById('rollP').style.display = 'none'
        document.getElementById('nahhh').style.display = 'inline';
    }else if (life2 == 0 || life2 < 0) {
        document.getElementById('winner').style.display  = 'block';
        document.getElementById('winner').innerHTML = `${namep1} hat gewonnen!`
        document.getElementById('char2P').style.display = 'none';
        document.getElementById('playA').style.display = 'block';
        document.getElementById('rollP').style.display = 'none'
        document.getElementById('nahhh').style.display = 'inline';
    }


}
function playAgain() {
    document.getElementById('nahhh').style.display = 'none';
    life1 = liveState1;
    life2 = liveState2;
    document.getElementById('rollP').style.display = 'block'


    document.getElementById('playA').style.display = 'none'
    document.getElementById('lives1').innerHTML = ""
    document.getElementById('lives2').innerHTML = ""
    document.getElementById('rollW1').innerHTML = ""
    document.getElementById('rollW2').innerHTML = ""
    document.getElementById('winner').style.display = "none"

    livess1(life1);
    livess2(life2);

    document.getElementById('char1P').innerHTML = `<img src="${char1}.png" alt="">`
    document.getElementById('char2P').innerHTML = `<img src="${char2}.png" alt="">`
    document.getElementById('char1P').style.display = 'inline';
    document.getElementById('char2P').style.display = 'inline';

    document.getElementById('char1P').innerHTML = `<img src="${char1}.png" alt="">`
    document.getElementById('char2P').innerHTML = `<img src="${char2}.png" alt="">`

}  
