// Background Image Slider
const hero = document.querySelector(".hero");

const images = [
    "https://images.unsplash.com/photo-1588072432836-e10032774350",
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    "https://images.unsplash.com/photo-1576495199011-eb94736d05d6"
];

let index = 0;

function changeBackground() {
    hero.style.backgroundImage = `url(${images[index]})`;
    index = (index + 1) % images.length;
}

setInterval(changeBackground, 3000);
changeBackground();


// Button Click Message
function showMessage() {
    alert("Welcome to Mahatma Gandhi University!");
}


// Contact Form Submission
function submitForm() {
    alert("Thank you for contacting us!");
    return false; // prevent page reload
}
