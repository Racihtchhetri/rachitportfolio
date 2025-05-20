var typed = new Typed('#element', {
    strings: [
        '<span style="color:red;">Web Develoooper...<img src="images/cross.svg" style="width: 40px;"></span>',
        '',
        '<span style="color:red;">Web Divloper...<img src="images/cross.svg" style="width: 40px;"></span>',
        '',
        '<span style="color: #87fd00;">Web Developer...<img src="images/correct.svg" style="width: 40px;"></span>'
    ],
    typeSpeed: 70,
    backSpeed: 50, // corrected from backsbackSpeed
    startDelay: 1000,
});



// Navbar background color change on scroll logic
const navbar = document.getElementById('navbar');
const navLinks = document.getElementById('navbar').getElementsByTagName('a');

window.addEventListener('scroll', () => {
    if (window.scrollY) {
        navbar.classList.add('bg-dark', 'box-shadow');
        navbar.classList.remove('bg-transparent', 'bg-light');
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].style.color = 'white';
        }
    } else {
        navbar.classList.remove('bg-dark', 'box-shadow');
        navbar.classList.add('bg-transparent');
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].style.color = 'white';
        }
    }
});

const toggler = document.getElementById('seeMoreBtn');
const showToggler = document.getElementById('showLessBtn');

toggler.addEventListener('click', () => {
    const hiddenCards = document.querySelectorAll('.card[style="display: none;"]');
    hiddenCards.forEach(card => {
        card.style.display = 'flex'; // Show hidden card
    });
    toggler.style.display = 'none'; // Hide "See more" button
    showToggler.style.display = 'block'; // Show "Show less" button
});

showToggler.addEventListener('click', () => {
    const cards = document.querySelectorAll('.card');
    const totalCards = cards.length;
    const lastFourCards = totalCards - 4;

    for (let i = totalCards - 1; i >= lastFourCards; i--) {
        cards[i].style.display = 'none';
    }

    toggler.style.display = 'block'; // Show "See more" button
    showToggler.style.display = 'none'; // Hide "Show less" button
});