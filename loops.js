/**
 * initializer - the initial value to use against the condition.
 * condition - logic behind the reason why the loop begins/ends
 * iteration - adds on to the initial value to continue trhough the array
 */
//

/**
 * While Loops
 *
 */

let int1 = 5; //initializer - starting value
while (condition) {
  //run some code
  i++; //iteration - adds 1 to the current value
}

//Example: Print out a squence of numbers
let i = 0;
while (i <= 5) {
  console.log(i);
  i++;
}
/**
 * For Loops (Most Common!!!)
 */

for (initializer; condition; iteration) {
  //run some code
}

//Exmaple: PRint out the sequence of numbers
for (let j = 0; j <= 5; j++) {
  console.log(j);
}

//Example: Print out values of an array
let musicGenres = [
  "Rap",
  "HipHop",
  "Drill",
  "Classical",
  "Country",
  "Techno Country",
  "Midwest Emo",
  "Metal",
  "Corridos",
  "Salsa",
];

for (let k = 0; k < musicGenres.length; k++) {
  let genre = musicGenres[k];
  console.log(genre);
}

for (let l = 0; l < 4; l++) {
  let genre = musicGenres[l];
  console.log(genre);
}

for (let z = 4; z < 7; z++) {
  let genre = musicGenres[z];
  console.log(genre);
}
