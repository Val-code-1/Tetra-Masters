let gokuHealth = document.querySelector(".goku_health");
let gokuPower = document.querySelector(".goku_powerlevel");
let gAttack = document.getElementById("goku_attack");
let gTarget = document.getElementById("G_Character_Target");

let vegetaHealth = document.querySelector(".vegeta_health");
let vegetaPower = document.querySelector(".vegeta_powerlevel");
let vAttack = document.getElementById("vegeta_attack");
let vTarget = document.getElementById("V_Character_Target");

let brolyHealth = document.querySelector(".broly_health");
let brolyPower = document.querySelector(".broly_powerlevel");
let bAttack = document.getElementById("broly_attack");
let bTarget = document.getElementById("B_Character_Target");

let piccoloHealth = document.querySelector(".piccolo_health");
let piccoloPower = document.querySelector(".piccolo_powerlevel");
let pAttack = document.getElementById("piccolo_attack");
let pTarget = document.getElementById("P_Character_Target");

let dendeHealth = document.querySelector(".dende_health");
let dendePower = document.querySelector(".dende_powerlevel");
let dAttack = document.getElementById("dende_attack");
let dTarget = document.getElementById("D_Character_Target");

let friezaHealth = document.querySelector(".frieza_health");
let friezaPower = document.querySelector(".frieza_powerlevel");
let fAttack = document.getElementById("frieza_attack");
let fTarget = document.getElementById("F_Character_Target");

class saiyan {
  constructor() {
    this.health = 100000;
    this.powerLevel = 9001;
    this.superSaiyanLevel = 0;
  }

  tail() {
    console.log("the saiyan wags his tail");
  }
  superSaiyan() {
    this.superSaiyanLevel++;
    console.log(`Super Saiyan ${this.superSaiyanLevel}`);
    this.powerLevel = this.powerLevel * 10;
    updatePowerLevel(this.name);
  }
  punch(target) {
    console.log("Wamm!");
    target.health = target.health - this.powerLevel / 100;
    updateHealth(target.name);
  }
}
// instantiate this class below
// let commonSaiyan = new saiyan();
// let commonSaiyan2 = new saiyan();
// commonSaiyan.punch(commonSaiyan2);

class Goku extends saiyan {
  constructor() {
    super();
    this.health = this.health * 10;
    this.powerLevel = this.powerLevel * 20;
    this.name = "Goku";
  }
  init() {
    gokuHealth.textContent = this.health;
    gokuPower.textContent = this.powerLevel;
  }
  kamehameha(target) {
    console.log(`power level before Kamehameha: ${this.powerLevel}`);
    console.log(`Opponent's health before: ${target.health}`);
    console.log("KA-ME-HA-ME-HAAA!");
    target.health = target.health - this.powerLevel / 10;
    this.powerLevel = this.powerLevel * 0.9;
    console.log(`power level after Kamehameha: ${this.powerLevel}`);
    updateHealth(target.name);
    updatePowerLevel(this.name);
  }
}
class Vegeta extends saiyan {
  constructor() {
    super();
    this.health = this.health * 9;
    this.powerLevel = this.powerLevel * 18;
    this.name = "Vegeta";
  }
  init() {
    vegetaHealth.textContent = this.health;
    vegetaPower.textContent = this.powerLevel;
  }
  finalFlash(target) {
    console.log("FINAL FLASSSHH!!!");
    target.health = target.health - this.powerLevel / 7;
    this.powerLevel = this.powerLevel * 0.5;
    updateHealth(target.name);
    updatePowerLevel(this.name);
  }
}
class Broly extends saiyan {
  constructor() {
    super();
    this.health = this.health * 7;
    this.powerLevel = this.powerLevel * 12;
    this.name = "Broly";
    this.hasLSS = false;
  }
  init() {
    brolyHealth.textContent = this.health;
    brolyPower.textContent = this.powerLevel;
  }
  legendarySuperSaiyan() {
    if (!this.hasLSS) {
      this.hasLSS = true;
      console.log("Goes Legendary Super Saiyan! Once per game");
      this.health = this.health * 2;
      this.powerLevel = this.powerLevel * 22;
      updatePowerLevel(this.name);
      updateHealth(this.name);
    } else {
      console.log("Can't do this again");
      return;
    }
  }
  omegaBlaster(target) {
    console.log("YOU DIEEEE!!!");
    target.health = target.health - this.powerLevel / 7;
    this.powerLevel = this.powerLevel * 0.8;
    updatePowerLevel(this.name);
    updateHealth(target.name);
  }
}
class namekian {
  constructor() {
    this.health = 50000;
    this.powerLevel = 5000;
  }
  regenerate() {
    this.health = this.health * 1.25;
    console.log(`${this.name} regenerates!`);
    updateHealth(this.name);
  }
  punch(target) {
    console.log("BAMM!");
    target.health = target.health - this.powerLevel / 100;
    updateHealth(target.name);
  }
}
// let nail = new namekian();

class Piccolo extends namekian {
  constructor() {
    super();
    this.health = this.health * 20;
    this.powerLevel = this.powerLevel * 30;
    this.name = "Piccolo";
  }
  init() {
    piccoloHealth.textContent = this.health;
    piccoloPower.textContent = this.powerLevel;
  }
  specialBeamCannon(target) {
    console.log(`power level before Special Beam Cannon: ${this.powerLevel}`);
    console.log(`Opponent's health before: ${target.health}`);
    console.log("SPECIAL BEAM CANNON!");
    target.health = target.health - this.powerLevel / 10;
    this.powerLevel = this.powerLevel * 0.9;
    console.log(`power level after Special Beam Cannon: ${this.powerLevel}`);
    updateHealth(target.name);
    updatePowerLevel(this.name);
  }
}
class Dende extends namekian {
  constructor() {
    super();
    this.health = this.health * 1;
    this.powerLevel = this.powerLevel * 1;
    this.name = "Dende";
    this.hasBalls = false;
    this.madeAWish = false;
  }
  init() {
    dendeHealth.textContent = this.health;
    dendePower.textContent = this.powerLevel;
  }
  collectDragonBalls() {
    if (!this.hasBalls) {
      this.hasBalls = true;
      console.log("Dende gathers the Dragon Balls.");
    } else {
      console.log("Already have the Dragon Balls.");
      return;
    }
  }
  // I had to write the false statement first?
  makeAWish(target) {
    if (!this.hasBalls) {
      console.log("Dende doesn't have the Dragon Balls");
      return;
    } else {
      if (!this.madeAWish) {
        console.log("The Dragon is called. Dende wishes for immortality");
        target.health = target.health * 88888888;
        updateHealth(target.name);
        this.madeAWish = true;
        return;
      } else {
        console.log("the dragon is sleeping");
        return;
      }
    }
  }
}

class frostDemon {
  constructor() {
    this.health = 200000;
    this.powerLevel = 20000;
  }
  punch(target) {
    console.log("WOMP!");
    target.health = target.health - this.powerLevel / 100;
    updateHealth(target.name);
  }
  deathBeam(target) {
    console.log(`power level before Death Beam: ${this.powerLevel}`);
    console.log(`Opponent's health before: ${target.health}`);
    console.log("Pechewwwwww");
    target.health = target.health - this.powerLevel / 10;
    this.powerLevel = this.powerLevel * 0.9;
    console.log(`power level after Death Beam: ${this.powerLevel}`);
    updateHealth(target.name);
    updatePowerLevel(this.name);
  }
}
class Frieza extends frostDemon {
  constructor() {
    super();
    this.health = this.health * 5;
    this.powerLevel = this.powerLevel * 8;
    this.name = "Frieza";
  }
  init() {
    friezaHealth.textContent = this.health;
    friezaPower.textContent = this.powerLevel;
  }
  deathBall(target) {
    console.log(`power level before Death Ball: ${this.powerLevel}`);
    console.log(`Opponent's health before: ${target.health}`);
    console.log("You only have 5 minutes!");
    target.health = target.health - this.powerLevel * 1;
    this.health = this.health * 0.01;
    this.powerLevel = this.powerLevel * 0.5;
    console.log(`power level after Death Ball: ${this.powerLevel}`);
    updateHealth(target.name);
    updateHealth(this.name);
    updatePowerLevel(this.name);
  }
}

let goku = new Goku();
let vegeta = new Vegeta();
let broly = new Broly();
let piccolo = new Piccolo();
let dende = new Dende();
let frieza = new Frieza();
goku.init();
vegeta.init();
broly.init();
piccolo.init();
dende.init();
frieza.init();

function updateHealth(name) {
  switch (name) {
    case "Goku":
      gokuHealth.textContent = Math.floor(goku.health);
      break;
    case "Vegeta":
      vegetaHealth.textContent = Math.floor(vegeta.health);
      break;
    case "Broly":
      brolyHealth.textContent = Math.floor(broly.health);
      break;
    case "Piccolo":
      piccoloHealth.textContent = Math.floor(piccolo.health);
      break;
    case "Dende":
      dendeHealth.textContent = Math.floor(dende.health);
      break;
    case "Frieza":
      friezaHealth.textContent = Math.floor(frieza.health);
      break;
    default:
      return;
  }
}
function updatePowerLevel(name) {
  switch (name) {
    case "Goku":
      gokuPower.textContent = Math.floor(goku.powerLevel);
      break;
    case "Vegeta":
      vegetaPower.textContent = Math.floor(vegeta.powerLevel);
      break;
    case "Broly":
      brolyPower.textContent = Math.floor(broly.powerLevel);
      break;
    case "Piccolo":
      piccoloPower.textContent = Math.floor(piccolo.powerLevel);
      break;
    case "Dende":
      dendePower.textContent = Math.floor(dende.powerLevel);
      break;
    case "Frieza":
      friezaPower.textContent = Math.floor(frieza.powerLevel);
      break;
    default:
      return;
  }
}
const charactersByName = {
  goku: goku,
  vegeta: vegeta,
  broly: broly,
  piccolo: piccolo,
  dende: dende,
  frieza: frieza,
};
// attacker.punch(charactersByName[name]);

function punchTarget(attacker, name) {
  const victim = charactersByName[name];
  if (!victim) {
    console.log("no target found");
    return;
  }
  attacker.punch(victim);
  // switch (name) {
  //   case "goku":
  //     attacker.punch(goku);
  //     break;
  //   case "vegeta":
  //     attacker.punch(vegeta);
  //     break;
  //   case "broly":
  //     attacker.punch(broly);
  //     break;
  //   case "piccolo":
  //     attacker.punch(piccolo);
  //     break;
  //   case "dende":
  //     attacker.punch(dende);
  //     break;
  //   case "frieza":
  //     attacker.punch(frieza);
  //     break;
  //   default:
  //     return;
  // }
}
function kamehamehaTarget(attacker, name) {
  switch (name) {
    case "goku":
      attacker.kamehameha(goku);
      break;
    case "vegeta":
      attacker.kamehameha(vegeta);
      break;
    case "broly":
      attacker.kamehameha(broly);
      break;
    case "piccolo":
      attacker.kamehameha(piccolo);
      break;
    case "dende":
      attacker.kamehameha(dende);
      break;
    case "frieza":
      attacker.kamehameha(frieza);
      break;
    default:
      return;
  }
}
function finalFlashTarget(attacker, name) {
  switch (name) {
    case "goku":
      attacker.finalFlash(goku);
      break;
    case "vegeta":
      attacker.finalFlash(vegeta);
      break;
    case "broly":
      attacker.finalFlash(broly);
      break;
    case "piccolo":
      attacker.finalFlash(piccolo);
      break;
    case "dende":
      attacker.finalFlash(dende);
      break;
    case "frieza":
      attacker.finalFlash(frieza);
      break;
    default:
      return;
  }
}
function omegaBlasterTarget(attacker, name) {
  switch (name) {
    case "goku":
      attacker.omegaBlaster(goku);
      break;
    case "vegeta":
      attacker.omegaBlaster(vegeta);
      break;
    case "broly":
      attacker.omegaBlaster(broly);
      break;
    case "piccolo":
      attacker.omegaBlaster(piccolo);
      break;
    case "dende":
      attacker.omegaBlaster(dende);
      break;
    case "frieza":
      attacker.omegaBlaster(frieza);
      break;
    default:
      return;
  }
}
function specialBeamCannonTarget(attacker, name) {
  switch (name) {
    case "goku":
      attacker.specialBeamCannon(goku);
      break;
    case "vegeta":
      attacker.specialBeamCannon(vegeta);
      break;
    case "broly":
      attacker.specialBeamCannon(broly);
      break;
    case "piccolo":
      attacker.specialBeamCannon(piccolo);
      break;
    case "dende":
      attacker.specialBeamCannon(dende);
      break;
    case "frieza":
      attacker.specialBeamCannon(frieza);
      break;
    default:
      return;
  }
}
function makeAWishTarget(attacker, name) {
  switch (name) {
    case "goku":
      attacker.makeAWish(goku);
      break;
    case "vegeta":
      attacker.makeAWish(vegeta);
      break;
    case "broly":
      attacker.makeAWish(broly);
      break;
    case "piccolo":
      attacker.makeAWish(piccolo);
      break;
    case "dende":
      attacker.makeAWish(dende);
      break;
    case "frieza":
      attacker.makeAWish(frieza);
      break;
    default:
      return;
  }
}
function deathBeamTarget(attacker, name) {
  switch (name) {
    case "goku":
      attacker.deathBeam(goku);
      break;
    case "vegeta":
      attacker.deathBeam(vegeta);
      break;
    case "broly":
      attacker.deathBeam(broly);
      break;
    case "piccolo":
      attacker.deathBeam(piccolo);
      break;
    case "dende":
      attacker.deathBeam(dende);
      break;
    case "frieza":
      attacker.deathBeam(frieza);
      break;
    default:
      return;
  }
}
function deathBallTarget(attacker, name) {
  switch (name) {
    case "goku":
      attacker.deathBall(goku);
      break;
    case "vegeta":
      attacker.deathBall(vegeta);
      break;
    case "broly":
      attacker.deathBall(broly);
      break;
    case "piccolo":
      attacker.deathBall(piccolo);
      break;
    case "dende":
      attacker.deathBall(dende);
      break;
    case "frieza":
      attacker.deathBall(frieza);
      break;
    default:
      return;
  }
}
// GOKU'S MOVES

gAttack.addEventListener("click", () => {
  let gokus_attacks = document.getElementById("gokus_attacks");
  console.log(gokus_attacks.value);
  if (gokus_attacks.value === "Punch") {
    punchTarget(goku, gTarget.value);
  } else if (gokus_attacks.value === "Kamehameha") {
    kamehamehaTarget(goku, gTarget.value);
  } else if (gokus_attacks.value === "Super Saiyan") {
    goku.superSaiyan();
  }
});
// VEGETA'S MOVES

vAttack.addEventListener("click", () => {
  let vegetas_attacks = document.getElementById("vegetas_attacks");
  console.log(vegetas_attacks.value);
  if (vegetas_attacks.value === "Punch") {
    punchTarget(vegeta, vTarget.value);
  } else if (vegetas_attacks.value === "Final Flash") {
    finalFlashTarget(vegeta, vTarget.value);
  } else if (vegetas_attacks.value === "Super Saiyan") {
    vegeta.superSaiyan();
  }
});
// BROLY'S MOVES

bAttack.addEventListener("click", () => {
  let brolys_attacks = document.getElementById("brolys_attacks");
  if (brolys_attacks.value === "Punch") {
    punchTarget(broly, bTarget.value);
  } else if (brolys_attacks.value === "Omega Blaster") {
    omegaBlasterTarget(broly, bTarget.value);
  } else if (brolys_attacks.value === "Super Saiyan") {
    broly.superSaiyan();
  } else if (brolys_attacks.value === "Legendary Super Saiyan") {
    broly.legendarySuperSaiyan();
  }
});
// PICCOLO'S MOVES

pAttack.addEventListener("click", () => {
  let piccolos_attacks = document.getElementById("piccolos_attacks");
  if (piccolos_attacks.value === "Punch") {
    punchTarget(piccolo, pTarget.value);
  } else if (piccolos_attacks.value === "Regenerate") {
    piccolo.regenerate();
  } else if (piccolos_attacks.value === "Special Beam Cannon") {
    specialBeamCannonTarget(piccolo, pTarget.value);
  }
});
// DENDE'S MOVES

dAttack.addEventListener("click", () => {
  let dendes_attacks = document.getElementById("dendes_attacks");
  if (dendes_attacks.value === "Punch") {
    punchTarget(dende, dTarget.value);
  } else if (dendes_attacks.value === "Regenerate") {
    dende.regenerate();
  } else if (dendes_attacks.value === "Gather the Dragon Balls") {
    dende.collectDragonBalls();
  } else if (dendes_attacks.value === "Make a Wish") {
    makeAWishTarget(dende, dTarget.value);
  }
});
// FRIEZA'S MOVES

fAttack.addEventListener("click", () => {
  let friezas_attacks = document.getElementById("friezas_attacks");
  if (friezas_attacks.value === "Punch") {
    punchTarget(frieza, fTarget.value);
  } else if (friezas_attacks.value === "Death Beam") {
    deathBeamTarget(frieza, fTarget.value);
  } else if (friezas_attacks.value === "Death Ball") {
    deathBallTarget(frieza, fTarget.value);
  }
});

// class Vegetto extends Potara([goku, vegeta]) {
//   constructor() {
//     super();
//   }
// }
// function Potara(bases) {
//   class Bases {
//     constructor() {
//       //   doesn't gain the correct health or powerlevel yet
//       bases.forEach((base) => Object.assign(this, new base()));
//     }
//   }
//   bases.forEach((base) => {
//     Object.getOwnPropertyNames(base.prototype)
//       .filter((prop) => prop != "constructor")
//       .forEach((prop) => (Bases.prototype[prop] = base.prototype[prop]));
//   });
//   return Bases;
//   // }
// }
// let vegetto = new Vegetto();
