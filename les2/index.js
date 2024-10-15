// HOISTING PRINCIPE
// Enkel de declaratie van de variabele dus niet de initialisatie
var greeter = undefined;

const courses = ["Web 1", "Web 2", "Web 3", "Programmeren Basis"];

// FOREACH

courses.forEach((course, idx) => {
  console.log(course);
});

// Als je het break statement nodig hebt zal je nog steeds een gewone for loop moeten gebruiken
for (let idx = 0; idx < courses.length; idx++) {
  if (idx === 1) {
    break;
  }
  const element = courses[idx];
  console.log(element);
}

// MAP

const numbers = [1, 2, 3, 4, 5];

const tempArr = [];
numbers.forEach((n) => {
  tempArr.push(n * 5);
});

console.log("Manuele map: ", tempArr);
// [5, 10, 15, 20, 25]

const mappedNumbers = numbers.map((n, idx) => n * 5);
console.log("Met de map methode: ", mappedNumbers);

const mappedCourses = courses.map((c, idx) => c.toLowerCase());
console.log("Courses in lowercase: ", mappedCourses);

// REDUCE

const sumOfNumbers = numbers.reduce((acc, val, idx) => {
  return acc + val;
}, 0);

// ITERATIE 0 -> acc = 0, value = 1 => 0 + 1
// ITERATIE 1 -> acc = 1, value = 2 => 1 + 2
// ITERATIE 2 -> acc = 3, value = 3 => 3 + 3
// ...

console.log("De som van de array is: ", sumOfNumbers);

const sumOfEmptyArr = [].reduce((acc, val) => acc + val, 0);
console.log("De som van lege array is: ", sumOfEmptyArr);

const sumOfNumbersStr = numbers.reduce((acc, val) => acc + val, "");
console.log("De som van de array met '' is: ", sumOfNumbersStr);

// ITERATIE 0 -> acc = "", value = 1 => "" + 1
// ITERATIE 1 -> acc = "1", value = 2 => "1" + 2
// ITERATIE 2 -> acc = "12", value = 3 => "12" + 3
// ...

// 5 % 2 = 1 => 4 % 2 = 0
const sumOfOdds = numbers.reduce((acc, val) => {
  if (val % 2 === 1) {
    return acc + val;
  }
  return acc;
}, 0);

console.log("Som van de oneven getallen: ", sumOfOdds);

// FILTER

const filteredCourses = courses.filter((c, idx) => c !== "Programmeren Basis");
console.log(filteredCourses);

//  1 == "1"            => true
//  1 === "1"           => false

//  undefined == null   => true
//  undefined === null  => false

// SOME

// Minstens 1 element gelijk aan conditie
const isOneSix = numbers.some((n, idx) => n === 6);

// EVERY

// Alle elementen gelijk aan conditie
const isAllSix = numbers.every((n, idx) => n === 6);

// if (conditie) {
//   var test = "Test msg";
// }

// function test () {
//     var msg = "Een ander bericht."
// }

// console.log(msg);

// console.log(test);

// console.log(greeter);
// //  undefined
// // Globale scope - Hoisting principe
// greeter = "Say hi";

// function varTest () {
//     var index = 3;

//     for (index = 0; index < 3; index++) {
//         console.log(index);
//         // 0, 1, 2
//     }
//     console.log(index);
//     //  3
// }

// setTimeout(() => {
//   console.log("Dit is de log van de timeout");
// }, 0);

// console.log("Achter de timeout");

// sum([]);  => 0
// sum([2]); => 2
// sum([2, 3]); => 5
// sum([4, 5, 6, 7, 8]) => ?

// REST parameter

// Als die ... voorkomen als parameter in een functie => REST parameter
const sum = (...arr) => {
  // Rest parameter ... => 10, 8, 6, 89 => [10, 8, 6, 89]
  return arr.reduce((acc, val) => acc + val, 0);
};

// Sum functie => functie dat 0 of meerdere argumenten moet kunnen optellen
console.log(sum());
console.log(sum(2));
console.log(sum(5, 4));
console.log(sum(10, 8, 6, 89));

// SPREAD operator - (arrays en objecten)

// const newArr = [ numbers, mappedNumbers ];

// concat methode
// const newArr = numbers.concat(mappedNumbers).concat([12, 45])

const newArr = [...numbers, ...mappedNumbers, 12, 45, ...[8, 95, 151]];

const student = {
  firstName: "David",
  lastName: "Breckx",
  address: {
    street: "Arbeidsstraat",
    number: 14,
    postalCode: 9300,
    city: "Aalst",
  },
  study: function () {
    // this keyword werkt niet met arrow functies
    console.log(`Student ${this.firstName} is aan het studeren.`);
  },
};

const studentCopy = {
  ...student,
  firstName: "John",
  address: { ...student.address },
  age: 34,
};
// studentCopy.address.street = "Kerkstraat";

console.log(student);
console.log(studentCopy);

// Destructuring (arrays en objecten)

const genres = ["Horror", "Thriller", "Action", "Adventure", "Comedy"];

const [horrorGenre, thrillerGenre, , adventureGenre, comedyGenre] = genres;

console.log(adventureGenre);

const firstName = "Jane";

const {
  firstName: fName,
  lastName,
  address,
  address: { street },
} = student;

console.log(address);

console.log(`Test
    
    Test
    `);

student.study();

// Callback hell - Pyramid of doom JS
//  Pizzeria

// Bestelling komt binnen van een klant - 5s
// Deeg uitrollen - 4s
// Ingrediënten opdoen - 2s
// Pizza in de oven steken - 10s
// Bestelling is klaar - 1s

setTimeout(() => {
  console.log("Bestelling is ontvangen van de klant.");
  setTimeout(() => {
    console.log("Deeg is uitgerold.");
    setTimeout(() => {
      console.log("Ingrediënten op pizza.");
      setTimeout(() => {
        console.log("Pizza is gebakken.");
        setTimeout(() => {
          console.log("Bestelling is klaar.");
        }, 1000);
      }, 10000);
    }, 2000);
  }, 4000);
}, 5000);

// PROMISES

// Producing code -> Code dat een tijdje kan duren

const myPromise = new Promise((resolve, reject) => {
  // Query naar de databank -> 2s
  setTimeout(() => {
    const isSuccesfull = false;

    if (isSuccesfull) {
      const data = ["Web 3"];
      resolve(data);
    } else {
      reject("Er is een fout gebeurd.");
    }
  }, 2000);
});

// Consuming code -> Code waarop we moeten wachten
myPromise
  // Resolve callback
  .then((data) => {
    console.log("Promise was succesvol. ", data);
  })
  //   Reject callback
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Code dat altijd uitgevoerd wordt.");
  });

console.log("Achter de promise");

// Producing code

const deegPromise = new Promise((resolve, reject) => {
  resolve("DIT IS DE DATA VAN DE DEEG PROMISE");
});

const ingredientsPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("INGREDIENTEN ZIJN OP");
  }, 1000);
});

const ovenPromise = new Promise((resolve, reject) => {
  resolve();
});

// Consuming code

//  OPGELET TERUG VOOR DE PROMISE HELL
// deegPromise
//   .then(() => {
//     console.log("Het deeg is uitgerold. (PROMISE)");
//     return ingredientsPromise;
//   })
//   .then(() => {
//     return ovenPromise;
//   })
//   .then(() => {})
//   .catch(() => {
//     console.log("Er is een fout gebeurd.(PROMISE)");
//   });

// Een oplossing voor de promise hell
// Promise.all([deegPromise, ingredientsPromise, ovenPromise])
//   .then((results) => {
//     const deegResult = results[0];
//     const ingredientsResult = results[1];
//     const ovenResult = results[2];

//     console.log("Alle bovenstaande promises afgehandeld zijn en succesvol!");
//   })
//   .catch(() => {
//     console.log("Eén van de bovenstaande promises had een fout.");
//   });

// ASYNC AWAIT

const asyncFunc = async () => {
  try {
    const data = await deegPromise;
    console.log(data);

    const ingredientsData = await ingredientsPromise;
    console.log(ingredientsData);

    await ovenPromise;
  } catch (error) {
    console.log(error);
  }
};

asyncFunc();

const color = {
  rating: 1,
};

console.log(color); // 1

// Mutable manier
rating.color = 3;

console.log(color); // 3
