const starContainer = document.querySelector(".star_container");
const count = document.querySelector(".count");

starContainer.addEventListener("click", (event) => {
    const target = event.target;
    const rating = parseInt(target.getAttribute("index"));
    count.innerText = rating;
    fillStars(rating);
    addEmoji(rating);
});



starContainer.addEventListener("mouseover", () => {
    const target = event.target;
    const rating = parseInt(target.getAttribute("index"));
    fillStars(rating);
});

starContainer.addEventListener("mouseleave", () => {
    fillStars(parseInt(count.innerText));
});

function fillStars(rating) {
    const stars = document.querySelectorAll(".star");
    for (let i = 0; i < stars.length; i++) {
        stars[i].classList.remove("yellow");
    }
    for (let i = 0; i < rating; i++) {
        stars[i].classList.add("yellow");
    }

}
function addEmoji(rating) {
    const emoji = document.querySelector(".emoji");
    if (rating == 1)
        emoji.innerHTML = '&#128566';
    else if (rating == 2)
        emoji.innerHTML = '&#128528';
    else if (rating == 3)
        emoji.innerHTML = '&#128578';
    else if (rating == 4)
        emoji.innerHTML = '&#128515';
    else
        emoji.innerHTML = '&#128513';

}

