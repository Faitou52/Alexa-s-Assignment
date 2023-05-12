/**
 * //NOTE - Homework!
 * Create a scenario! Imagine this.....
 * You are in Alice in Wonderland world and you are setting up the table for the tea party!
 * There are 10 guests that will arrive soon.
 * You need to make sure that every guest has a tea cup, tea plate, and a small dessert.
 */

let guests = [
  {
    firstName: "Some",
    lastName: "Thing",
    species: "Rabbit",
  },
];

// Expected Output
{
  firstName: "Some";
  lastName: "Thing";
  species: "Rabbit";
  teaCup: true;
  teaPlate: true;
  smallDessert: "Carrot Cake";
}

//Challenge! Try to randomize the dessert to each guest and apply a color to the tea cup and tea plate
//You can ONLY use Math (JS), BUT if you are able to do it with ONLY what was taught today, $20 :) First 3 people only.
{
  firstName: "Some";
  lastName: "Thing";
  species: "Rabbit";
  teaCup: true;
  teaCupColor: "Blue"; //add
  teaPlate: true;
  teaPlateColor: "Purple"; //add
  smallDessert: "Carrot Cake"; //randomize
}

//NOTE - define array of 10 guests
let guests2 = [
  { firstName: "alice", lastName: "liddell", species: "human" },
  { firstName: "cheshire", lastName: "cat", species: "cat" },
  { firstName: "white", lastName: "rabbit", species: "rabbit" },
  { firstName: "mad", lastName: "hatter", species: "human" },
  { firstName: "march", lastName: "hare", species: "rabbit" },
  { firstName: "frog", lastName: "footman", species: "amphibian" },
  { firstName: "knave", lastName: "of hearts", species: "human" },
  { firstName: "queen", lastName: "of hearts", species: "human" },
  { firstName: "king", lastName: "of hearts", species: "human" },
  { firstName: "mock", lastName: "turtle", species: "turtle" },
];

//NOTE - define array of random desserts
let desserts = [
  "carrot cake",
  "chocolate cake",
  "macaroon",
  "eclair",
  "cupcake",
];

//NOTE - define function to set up a guest's table setting
function setUpGuestTable(guest) {
  let teaCup = true;
  let teaPlate = true;
  let smallDessert = desserts[Math.floor(Math.random() * desserts.length)];
  return { ...guest, teaCup, teaPlate, smallDessert };
}

//NOTE - set up the table for each guest and log the result
guests2.forEach((guest) => {
  let guestTable = setUpGuestTable(guest);
  console.log(guestTable);
});
