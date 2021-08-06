let Blue1 = document.getElementById("Blue1");

function flip() {
  let coin = 0;
  coin = Math.random();
  console.log(coin);
  if (coin >= 0.5) {
    console.log("heads");
    return "heads";
  } else {
    console.log("tails");
    return "tails";
  }
}

class card {
  constructor() {
    this.owner = 0;
    this.power = Math.floor(Math.random() * 9) + 1;
    this.pDef = Math.floor(Math.random() * 9);
    this.mDef = Math.floor(Math.random() * 9);
    this.dmg = flip() === "heads" ? "p" : "m";
    this.aN = flip() === "heads" ? true : false;
    this.aNE = flip() === "heads" ? true : false;
    this.aE = flip() === "heads" ? true : false;
    this.aSE = flip() === "heads" ? true : false;
    this.aS = flip() === "heads" ? true : false;
    this.aSW = flip() === "heads" ? true : false;
    this.aW = flip() === "heads" ? true : false;
    this.aNW = flip() === "heads" ? true : false;
  }
  attack(target) {
    if (
      (this.aN === true &&
        this.dmg === "physical" &&
        (this.power > target.pDef || !target.aS)) ||
      (this.aN === true &&
        this.dmg === "magic" &&
        (this.power > target.mDef || !target.aS))
    ) {
      console.log("hello");
    }
  }
}
fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards", {
  method: "GET",
  headers: {
    "x-rapidapi-key": "aae9041da3msh758c6b4e4c4787fp1db3d8jsnfe04f26aaf30",
    "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
  },
})
  .then((response) => response.json())
  .then((data) => {
    //All functionality happens,
    // AFTER the promise resolves.
    console.log(data);
  });

let test1 = new card();
Blue1.textContent = test1.power + test1.dmg + test1.pDef + test1.mDef;
