// let myShip = document.getElementById(`my-ship`);

// myShip.addEventListener(`click`, () => {
//     let shipHullElement = document.getElementById(`my-ship-hull`);
//     //we pretend the enemy ship attacks
//     let currentHullHTML = +shipHullElement.innerText;
//     console.log(typeof +currentHullHTML);
//     //enemy ship hit for 3 damage

//     let enemyDamage = 3;

//     let finalHull = currentHullHTML - enemyDamage;

//     shipHullElement.innerText = finalHull
// })

// let alienShip1 = document.getElementById(`alien-ship1`);

// alienShip1.addEventListener(`click`, () => {
//     let alienship1HullElement = document.getElementById(`alien-ship1-hull`);
//     //we pretend the enemy ship attacks
//     let currentHullHTML = +alienship1HullElement.innerText;
//     console.log(typeof +currentHullHTML);
//     //enemy ship hit for 3 damage

//     let enemyDamage = 3;

//     let finalHull = currentHullHTML - enemyDamage;

//     alienship1HullElement.innerText = finalHull
// })


//create spaceship class
class Spaceship {
    constructor (name, hull, firepower, accuracy) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }

    //within class, create attack enemy method
    shotsFired(opponent) {
        let currentHull = opponent.hull;
        //spaceships firepower along with probability of successful hit...
        if (Math.random() < this.accuracy) {
            //...will impact opponent's hull
            currentHull = opponent.hull -= this.firepower;
            console.log(`SUCCESSFUL HIT! from ${this.name}`);
            console.log(`Firepower = ${this.firepower}, ${opponent.name} Current Hull = ${currentHull}`);
        } else {
            console.log(`MISSED HIT! from ${this.name}`);
        }
    }
};

//create enemy Fleet class with an empty array for ships to be pushed into
class Fleet {
    constructor() {
        this.enemies = [];
    }

    //within class, create method for pushing enemy fleet into ships array
    addShip(name) {
        let hull = Math.floor(Math.random() * (7-3)) + 3;
        let firepower = Math.floor(Math.random() * (5-2)) + 2
        let accuracy = (Math.random() * .81-.6 + .6).toFixed(2)

        //enemy ships' hull, firepower, & accuracy must be generated randomly
        this.enemies.push(new Spaceship(name, hull, firepower, accuracy));
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
        console.log(`${ussHelloWorld.name} VS. ${enemies[i].name}, Hull: ${enemies[i].hull}`);
        console.log("");
        //while looping, if my ship ever reaches 0 game is over
        if (ussHelloWorld.hull <= 0) {
            console.log(`${ussHelloWorld.name}, you've been defeated.`)
            console.log("");
            break;
        }
        //keep iterating through list while my ship is > 0
        while (ussHelloWorld.hull > 0) {
            //attack!
            ussHelloWorld.shotsFired(enemies[i]);
            //check damage to enemy, if enemy ship < 0 then the game is over
            if (enemies[i].hull <= 0) {
                //image reflects enemy ship defeated
                document.getElementById("alien-ship").src="./images/enemy_ship_dead.png";
                //print enemy's health & declare my win
                console.log(`You've defeated the enemy!`);
                console.log(`ussHelloWorld current hull: ${ussHelloWorld.hull}`);
                console.log("");
                // let response = window.prompt(`You've won! Current Hull:${currentHull} Would you like to continue?`)
                // console.log(response);
                // if (response.toLowerCase != "yes" ) {
                //     console.log("Thanks for playing. Goodbye!")
                break;
            //else, battle continues and enemy gets to attack my ship
            } else {
                //enemy attacks!
                enemies[i].shotsFired(ussHelloWorld);
                console.log("");
                console.log(`Match continues... ${enemies[i].name}, Hull: ${enemies[i].hull}`);
                console.log("");
            }
        }
    }
};