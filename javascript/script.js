// function updateTime() {
//     const timeElement = document.getElementById('current-time');
//     const now = new Date();
//     timeElement.textContent = now.toLocaleDateString();
// }

// updateTime();
// setInterval(updateTime, 1000);

let s1 = 10;
let s2 = 4;
let s3 = "2025 Training";
let s4 = null;

const button = document.getElementById('btn-write');
const clear_button = document.getElementById('btn-clear');

clear_button.onclick = function () {
    document.getElementById("sample-text").innerHTML = "sample text";
    document.getElementById("type-in-text").value = "";
}

button.onclick = function () {
    const input_text = document.getElementById('type-in-text').value;
    document.getElementById('type-in-text').value = "";
    const human_object = { name: "Alice", age: 22, gender: "female" };
    console.log(human_object.name);

    const idv_characters = [
        { name: "Campbell", age: 27, gender: "male" },
        { name: "Orpheus", age: 29, gender: "male" },
        { name: "Melly", age: 21, gender: "female" }];

    for(let i=0; i<idv_characters.length; i++) {
        if (idv_characters[i].name == input_text) {
            console.log("it's a hit!");
            document.getElementById("sample-text").innerHTML = `I see that you also like ${idv_characters[i].name} !`;
            break;
        } else {
            document.getElementById("sample-text").innerHTML = `ERROR - ${input_text}`;
        }
    }
};

/*
button.addEventListener("click", function () {

    const input_text = document.getElementById('type-in-text');
    const sample_text = document.getElementById('sample-text');
    
    sample_text.innerHTML(input_text);
    alert("TEXT UPDATED!");
});
*/



