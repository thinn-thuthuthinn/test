const human_object = { name: "Alice", age: 22, gender: "female" };
console.log(human_object.name);

const idv_characters = [ 
    { name: "Campbell", age: 27, gender: "male"},
    { name: "Orpheus", age: 29, gender: "male"},
    { name: "Melly", age: 21, gender: "female"}];

let x = 2;
let y = 4;
// console.log(x += y);

const arr2 = Array.from({length: x}, () => new Array(y).fill("ehe"));
console.log(arr2.join(" , "));

const arr = ["no.1", "no.2", "no.3", "no.4"];
// arr.forEach(arr => console.log(arr));
// console.log(arr.join(' '));
console.log(arr);

const fruits = [['apple', 'orange', 'papaya'], [160, 340, 500]];

console.log(fruits);

// FOR EACH LOOP
fruits.forEach(fruits => console.log(fruits));

// JOIN
console.log(fruits.join(','));

// FOR-NESTED LOOP
for(let i=0; i<fruits.length; i++){
    for(let k=0; k<fruits[i].length; k++){
        console.log(fruits[i][k]);
    }
}