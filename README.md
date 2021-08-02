# Whale Translator

Whilst learning loops I came across a 'whale talk' example that focussed on creating a string variable and doing a nested for loop that would then go through that string variable pulling out only the vowels in that string. It would then also double up on any e's and u's in the string to create a slower paced whale talk simulation. This gave me an idea...

## Initial Idea

- Create a responsive website about whale translation
- Take user text input and immediately translate it back to the user

### Comments & Thought Process

In a previous project I tried really hard to take a user input and immediately return it back to the user, but I was having trouble working out how to do this without sending them to another page. I wanted to keep them on the same page and 'do it live'. This isn't something that many people seem to be looking to do, as most results online return the JS alert function, which isn't what I wanted. I wanted to take user text, translate it into whale speak, and then push it straight back to the user all in one go.

I knew that I had to collect the input into a variable but I had to let the user create the text to capture first. This meant creating a multi-function eventListener to do several things at once:

1. Collect user input value and store that in a variable
2. Translate input into whale speak using a nested for loop
3. Take that translation and update the innerHTML of the element returning the user input

```
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

button.addEventListener('click', () => {
  getInputValue();
  whaleSpeak();
  // whaleReveal();
})
```

This was one of those challenges where I knew what I wanted, and I knew what pieces I needed to make the puzzle, but I wasn't quite sure of <em>how</em> to put them all together! But after a lot of trial and error I got there.

If you scan through the repo you'll see some commented out code. This was me trying to make a whale image appear when the user clicks translate, as if to suggest a whale has appeared to speak. I could make the image appear immediately but I wanted it to be a smooth transition in, as if the whale was literally 'dropping' by to speak to you. But for whatever reason I just couldn't get both visbility: hidden & and trasition: 1s ease-in to work one after the other through JS.

I get the impression there's quite a lot more that's goes on to make something like that happen, and after an hour of trying I thought it was a feature creep anyway and just put it to one side for now!
