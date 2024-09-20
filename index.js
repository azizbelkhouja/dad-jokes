


const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

generateJoke();

function generateJoke() {
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'accept' : 'application/json'
        }
    })
    .then((res) => res.json())
    .then((data) => {
        jokeEl.innerHTML = data.joke
    })
}