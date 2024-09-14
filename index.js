//1. How to compare two JSON have the same properties without order?
//a. var obj1 = { name: "Person 1", age: 5 };
//b. var obj2 = { age: 5, name: "Person 1" };

function areObjectsEqual(obj1, obj2) {
  let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  keys1.sort();
  keys2.sort();
  for (let i = 0; i < keys1.length; i++) {
    if (keys1[i] !== keys2[i]) {
      return false;
    }
  }
  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}
let obj1 = { name: "Person 1", age: 5 };
let obj2 = { age: 5, name: "Person 1" };
console.log(`Are objects equal? ${areObjectsEqual(obj1, obj2)}`);


//2. Use the rest countries' API URL -> https://restcountries.com/v3.1/all and display all the country flags in the console.

const url = "https://restcountries.com/v3.1/all";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((country) => {
      if (country.flags && country.flags.png) {
        console.log(`Flag URL: ${country.flags.png}`);
      }
    });
  })
    .catch((error) => console.error(`Error fetching data: ${error}`));


//3. Use the same rest countries and print all countries names, regions, sub-region, and populations.

fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((country) => {
      console.log(`Country: ${country.name.common}`);
      console.log(`Region: ${country.region}`);
      console.log(`Sub-Region: ${country.subregion}`);
      console.log(`Population: ${country.population}`);
      console.log("-----------------------");
    });
  })
  .catch((error) => console.error("Error fetching data:", error));
