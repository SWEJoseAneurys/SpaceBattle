// let myShip = document.getElementById(`my-ship`);

// myShip.addEventListener(`click`, () => {
//     let shipHullElement = document.getElementById(`my-ship-hull`);
//     //we pretend the enemy ship attacks
//     let currentHull = +shipHullElement.innerText;
//     console.log(typeof +currentHull);
//     //enemy ship hit for 3 damage

//     let enemyDamage = 3;

//     let finalHull = currentHull - enemyDamage;

//     shipHullElement.innerText = finalHull
// })

// let alienShip1 = document.getElementById(`alien-Ship1`);

// alienShip1.addEventListener(`click`, () => {
//     let alienship1HullElement = document.getElementById(`alien-ship1-hull`);
//     //we pretend the enemy ship attacks
//     let currentHull = +alienship1HullElement.innerText;
//     console.log(typeof +currentHull);
//     //enemy ship hit for 3 damage

//     let enemyDamage = 3;

//     let finalHull = currentHull - enemyDamage;

//     alienship1HullElement.innerText = finalHull
// })

// let alienShip2 = document.getElementById(`alien-Ship2`);

// alienShip2.addEventListener(`click`, () => {
//     let alienship3HullElement = document.getElementById(`alien-ship2-hull`);
//     //we pretend the enemy ship attacks
//     let currentHull = +alienship2HullElement.innerText;
//     console.log(typeof +currentHull);
//     //enemy ship hit for 3 damage

//     let enemyDamage = 3;

//     let finalHull = currentHull - enemyDamage;

//     alienship2HullElement.innerText = finalHull
// })

// let alienShip3 = document.getElementById(`alien-Ship3`);

// alienShip3.addEventListener(`click`, () => {
//     let alienship3HullElement = document.getElementById(`alien-ship3-hull`);
//     //we pretend the enemy ship attacks
//     let currentHull = +alienship3HullElement.innerText;
//     console.log(typeof +currentHull);
//     //enemy ship hit for 3 damage

//     let enemyDamage = 3;

//     let finalHull = currentHull - enemyDamage;

//     alienship3HullElement.innerText = finalHull
// })

// let alienShip4 = document.getElementById(`alien-Ship4`);

// alienShip4.addEventListener(`click`, () => {
//     let alienship4HullElement = document.getElementById(`alien-ship4-hull`);
//     //we pretend the enemy ship attacks
//     let currentHull = +alienship4HullElement.innerText;
//     console.log(typeof +currentHull);
//     //enemy ship hit for 3 damage

//     let enemyDamage = 3;

//     let finalHull = currentHull - enemyDamage;

//     alienship4HullElement.innerText = finalHull
// })

// let alienShip5 = document.getElementById(`alien-Ship5`);

// alienShip5.addEventListener(`click`, () => {
//     let alienship5HullElement = document.getElementById(`alien-ship5-hull`);
//     //we pretend the enemy ship attacks
//     let currentHull = +alienship5HullElement.innerText;
//     console.log(typeof +currentHull);
//     //enemy ship hit for 3 damage

//     let enemyDamage = 3;

//     let finalHull = currentHull - enemyDamage;

//     alienship5HullElement.innerText = finalHull
// })

// let alienShip6 = document.getElementById(`alien-Ship6`);

// alienShip6.addEventListener(`click`, () => {
//     let alienship6HullElement = document.getElementById(`alien-ship6-hull`);
//     //we pretend the enemy ship attacks
//     let currentHull = +alienship6HullElement.innerText;
//     console.log(typeof +currentHull);
//     //enemy ship hit for 3 damage

//     let enemyDamage = 3;

//     let finalHull = currentHull - enemyDamage;

//     alienship6HullElement.innerText = finalHull
// })










//create spaceship class
class Spaceship {
    constructor (name, hull, firepower, accuracy, battling, defeated) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
        this.battling = true;
        this.defeated = false;
    }

    //within class, create attack enemy method
    shotsFired(enemy) {
        //spaceships firepower along with probability of successful hit...
        let firepowerImpact = this.firepower + this.accuracy;
        //...will impact opponent's hull
        enemy.hull -= firepowerImpact;
    }

    //within class, create enemy attack method
    // iveBeenHit(me) {
    //     //enemy ship's firepower along with probability of successful hit...
    //     let firepowerImpact = this.firepower + this.accuracy;
    //     //...will impact opponent's hull
    //     me.hull = (me.hull - firepowerImpact);
    // }
};

//create enemy Fleet class with an empty array for ships to be pushed into
class Fleet {
    constructor() {
        this.enemies = [];
    }

    //within class, create method for pushing enemy fleet into ships array
    addShip(name) {
        //enemy ships' hull, firepower, & accuracy must be generated randomly
        this.enemies.push(new Spaceship(name, Math.floor(Math.random() * (7-3)) + 3, Math.floor(Math.random() * (5-2)) + 2, (Math.random() * .81-.6 + .6).toFixed(2)));
    }
};

//create my spaceship
let ussHelloWorld = new Spaceship("ussHelloworld", 20, 5, .7);
console.log(ussHelloWorld);
console.log("");

//create enemy ships
let enemyFleet = new Fleet();
enemyFleet.addShip("alien1");
enemyFleet.addShip("alien2");
enemyFleet.addShip("alien3");
enemyFleet.addShip("alien4");
enemyFleet.addShip("alien5");
enemyFleet.addShip("alien6");
console.log(enemyFleet);
console.log("");

//create the battle
const battle =() => {
    let enemies = enemyFleet.enemies;

    //ussHelloWorld attacks enemy ships while hull is greater than 0
    for (i=0; i < enemies.length; i++) {
        //while looping, if my ship ever reaches 0 game is over
        if (ussHelloWorld.hull <= 0) {
            ussHelloWorld.battling = false;
            ussHelloWorld.defeated = true;
            console.log(`${ussHelloWorld.name}, you've been defeated.`)
            break;
        }
        //keep iterating through list while my ship is > 0
        while (ussHelloWorld.hull > 0) {
            console.log(`Your opponent: ${enemies[i].name}, Hull: ${enemies[i].hull}`);
            console.log("");
            //attack!
            ussHelloWorld.shotsFired(enemies[i]);
            //check damage to enemy, if enemy ship < 0 then the game is over
            if (enemies[i].hull <= 0) {
                enemies[i].battling = false;
                enemies[i].defeated = true;
                //print enemy's health & declare my win
                console.log(`Enemy Hull: ${enemies[i].hull}. You've defeated the enemy!`)
                console.log(`Your current hull: ${ussHelloWorld.hull}`);
                console.log("");
                // let response = window.prompt(`You've won! Current Hull:${currentHull} Would you like to continue?`)
                // console.log(response);
                // if (response.toLowerCase != "yes" ) {
                //     console.log("Thanks for playing. Goodbye!")
                break;
            //else, battle continues and enemy gets to attack my ship
            } else {
                console.log(`ENEMY HIT! Enemy currently:${enemies[i].hull}`);
                console.log("");
                //enemy attacks!
                enemies[i].shotsFired(ussHelloWorld);
                //print damage done to me
                console.log(`YOU'VE BEEN HIT! Current health:${ussHelloWorld.hull}`);
                console.log("");
            }
        }
    }
};

battle();