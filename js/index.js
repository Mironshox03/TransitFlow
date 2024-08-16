let cards = document.querySelector('.transport .cards');
let section = document.querySelector('.transport');
const btn = document.querySelector('.button');

let expanded = false;

btn.addEventListener('click', () => {
    if (!expanded) {
        section.style.height = '1100px';
        cards.innerHTML = `
            <div class="card"><img src="../img/1x1.png" alt=""></div>
            <div class="card"><img src="../img/2x2.png" alt=""></div>
            <div class="card"><img src="../img/3x3.png" alt=""></div>
            <div class="card"><img src="../img/4x4.png" alt=""></div>
            <div class="card"><img src="../img/5x5.png" alt=""></div>
            <div class="card"><img src="../img/1x1.png" alt=""></div>
            <div class="card"><img src="../img/2x2.png" alt=""></div>
            <div class="card"><img src="../img/3x3.png" alt=""></div>
            <div class="card"><img src="../img/4x4.png" alt=""></div>
            <div class="card"><img src="../img/5x5.png" alt=""></div>
        `;
        expanded = true;
    } else {
        section.style.height = '759px';
        cards.innerHTML = `
            <div class="card"><img src="../img/1x1.png" alt=""></div>
            <div class="card"><img src="../img/2x2.png" alt=""></div>
            <div class="card"><img src="../img/3x3.png" alt=""></div>
            <div class="card"><img src="../img/4x4.png" alt=""></div>
            <div class="card"><img src="../img/5x5.png" alt=""></div>
        `;
        expanded = false;
    }
});

let slideIndex = 1;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll('.slide');

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    // Increment slide index and loop back if necessary
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Display the current slide
    slides[slideIndex - 1].style.display = 'flex';
}

document.querySelector('.prev').addEventListener('click', function () {
    showSlides();
});

document.querySelector('.next').addEventListener('click', function () {
    showSlides();
});
let modal =document.querySelector('.modal');
let quotebtn =document.querySelector('.quote-btn').addEventListener('click' , () => {
    modal.style.display = 'block'
})
document.querySelector('.modal-btn').addEventListener('click', () => {
    document.querySelector('.modal').style.cssText = `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 20px;
    display : none ;
    `;
});
