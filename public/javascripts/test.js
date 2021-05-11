const url = document.URL;

const home = document.getElementById("home");
const about = document.getElementById("about");
const coaching = document.getElementById('coaching');
const contact = document.getElementById('contact');
const getStarted = document.getElementById('getStarted');

if (url === 'http://localhost:3000/') {
    home.classList.add('current');
} else if (url === 'http://localhost:3000/about') {
    about.classList.add('current');
} else if (url === 'http://localhost:3000/coaching' || url === 'http://localhost:3000/coaching/group-coaching?'
    || url === 'http://localhost:3000/coaching/individual-coaching?') {
    coaching.classList.add('current');
} else if (url === 'http://localhost:3000/contact') {
    contact.classList.add('current');
} else if (url === 'http://localhost:3000/get-started' || url === 'http://localhost:3000/get-started?') {
    getStarted.classList.add('current');
}


