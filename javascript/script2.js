// function updateTime() {
//     const timeElement = document.getElementById('current-time');
//     const now = new Date();
//     timeElement.textContent = now.toLocaleDateString();
// }

// updateTime();
// setInterval(updateTime, 1000);

const idv_characters = [
    { name: "Campbell", age: 27, gender: "male" },
    { name: "Orpheus", age: 29, gender: "male" },
    { name: "Melly", age: 21, gender: "female" }];

// for (const o of idv_characters) {
//     console.log(o);
// }

// 
// document.getElementById("sample-text").innerHTML = idv_characters.toString();

// let's go back to easy, normal arrays 

// const snacks = ["Bread", "Waffles", "Pie", "Candy"];
// document.getElementById("js-test-p2").innerHTML = snacks;

// const fruits = [['apple', 'orange', 'papaya'], [160, 340, 500]];
// document.getElementById("js-test-p2").innerHTML = fruits;

// let tex = "<ul>";
// --------------------------------------------------------\\
// for(let i=0; i<snacks.length; i++){
//     tex += "<li>" + snacks[i] + "</li>";
// }
// tex += "</ul>";

// snacks.forEach(addToTex);
// function addToTex(value) {
//     tex += "<li>" + value + "</li>";
// }
// tex += "</ul>";
// document.getElementById("js-test-p").innerHTML = tex;


// nested javascript obj + arrays 
let p = "";
const a_person = {
    name: "Norton",
    age: 27,
    ships: [{ name: "Naib", ship_name: "TwoBirds" }, { name: "Orpheus", ship_name: "PeakBeak" }, { name: "Melly", ship_name: "BabySeals" }]
};

for(let y in a_person.ships) {
    p += "<h2>" + a_person.ships[y].name + "</h2>";
    for(let z in a_person.ships[y].ship_name) {
        p += a_person.ships[y].ship_name[z];
    }
    p += "<br>";
}

document.getElementById("js-test-p").innerHTML = p;

// 確認問題５
/*
const numbers = [];
for(let u=0; u<10; u++){
    numbers[u] = u + 1;
}

console.log(numbers);

numbers.forEach(check_23);

function check_23(value){
    if(value%2 == 0 && value%3 == 0){
        console.log(`The number ${value} is divisible by both 2 and 3.`);
    } else if(value%2 != 0 && value%3 == 0) {
        console.log(`The number at ${value-1} is divisible only by 3.`);
    } else {
        console.log(`The number at ${value-1} is not divisible by 3. The remainder is ${value%3}.`);
    }
}
*/

// let dice = 0;
// let i = 0;
// while(dice != 6) {
//     dice = Math.floor(Math.random() * 7);
//     i+=1;
//     console.log(`${i}: dice => ${dice}`);
// }

// ANOTHER TEST
// let count = 1;
// let result = 0;
// while(count <= 100) {
//     result += count;
//     count ++;
// }
// document.getElementById("js-test-p2").innerHTML = `In total, the result is ${result}`;

/* FUNCTIONS IN JAVASCRIPT

function throwDice(num = 1) { 
let sum = 0; 
for(let i = 0; i < num; i++){ 
let dice = Math.floor(Math.random() * 6) + 1; 
    sum += dice; 
  } 
return sum; 
} 

let result = throwDice(2); 
console.log(result);

*/

function myFunction(x = 1) {
    let sum = 0;
    for(let i = 1; i <= x; i++) {
        sum += i;
    }

    // let i = 1;
    // let sum = 0; 
    // while(i <= x) {
    //     sum += i;
    //     i += 1;
    // }
    return sum;
}
console.log(myFunction(10));

// document.getElementById("js-test-p2").innerHTML = ;

// function outConsole(message = "You didn't initialize any argument") {
//     console.log(message);
// }

// outConsole();
// outConsole("YOOOO");

// Next to last function test
function btnClick() {
    let text = document.getElementById('text').value;
    document.getElementById('result').innerText = text;
}