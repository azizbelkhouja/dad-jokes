


const jokeEl = document.getElementById('joke');
const jokeBtn = docmen.getElementById('jokeBtn');

generateJOke();

function generateJoke() {
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'accept' : 'application/json'
        }
    })
    .then((res) => res.json())
    .then((data) => )
}