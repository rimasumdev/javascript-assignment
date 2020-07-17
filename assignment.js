// Feet To Mile Converter
function feetToMile(feet) {
  let miles = feet / 5280;
  return miles;
}
let toMiles = feetToMile(23);
console.log("==================Feet To Mile Convert Result==================");
console.log(toMiles.toFixed(5));

// Wood Calculator
function woodCalculator(chair, table, bed) {
  let chairCubicFeet = chair * 1;
  let tableCubicFeet = table * 3;
  let bedCubicFeet = bed * 5;
  let total = chairCubicFeet + tableCubicFeet + bedCubicFeet;
  return total;
}
let totalCubicFeet = woodCalculator(2, 4, 3);
console.log("==================Wood Calculator Result==================");
console.log("You Need Total Cubic Feet =", totalCubicFeet);

// Brick Calculator
function brickCalculator(floor) {
  if (floor < 0) {
    let worning = "Please Insert Positive Value.";
    return worning;
  } else {
    if (floor > 20) {
      let totalFloor = floor - 20;
      let totalFeet = totalFloor * 10 + 10 * 12 + 10 * 15;
      let totalBrick = totalFeet * 1000;
      let result = "You Need Total Bricks = " + totalBrick;
      return result;
    } else if (floor > 10) {
      let totalFloor = floor - 10;
      let totalFeet = totalFloor * 12 + 10 * 15;
      let totalBrick = totalFeet * 1000;
      let result = "You Need Total Bricks = " + totalBrick;
      return result;
    } else {
      let totalFeet = floor * 15;
      let totalBrick = totalFeet * 1000;
      let result = "You Need Total Bricks = " + totalBrick;
      return result;
    }
  }
}
let bricksNeed = brickCalculator(56);
console.log("==================Brick Calculator Result==================");
console.log(bricksNeed);

// Tiny Friend Name Search
function tinyFriend(name) {
  let tinyName = name[0];
  for (let i = 0; i < name.length; i++) {
    let searchName = name[i];
    if (searchName.length < tinyName.length) {
      tinyName = searchName;
      var tinyFriendName = "Your tinyFriend Name is = " + tinyName;
    } else if (searchName.length == tinyName.length) {
      var tinyFriendName = "Your tinyFriend Name is Equal";
    }
  }
  return tinyFriendName;
}
let result = tinyFriend(["Masum", "Mas", "Mamunur", "Reza", "Xaafor"]);
console.log("==================Tiny Friend Result==================");
console.log(result);
