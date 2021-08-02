// Translation arrays
const vowels = ['a','e','i','o','u'];
let translation = [];

// Collect user inputs
let button = document.getElementById('translate_button');
let input = [];

function getInputValue () {
  input = document.getElementById('user_input').value;
};

// Set up Output for translation
let output = document.getElementById('user_output_text');

// Translation function
function whaleSpeak () {
  for (let i = 0; i < input.length; i++){
    for (let j = 0; j < vowels.length; j++){
      if (input[i] == vowels[j]){
        translation.push(input[i]);
        if (input[i] == 'e' || input[i] == 'i'){
          translation.push(input[i]);
        }
      }
    }
  } output.innerHTML = translation.join('').toUpperCase();
}

// Whale Reveal
// let whale = document.getElementById('whale');
//
// function whaleReveal () {
//   whale.style.visibility = 'visible';
//   whale.style.transition = "background 1.0s linear 0s";
// }

// Event handler

button.addEventListener('click', () => {
  getInputValue();
  whaleSpeak();
  // whaleReveal();
})
