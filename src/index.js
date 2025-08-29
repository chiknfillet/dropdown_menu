import "./reset.css";
import "./styles.css";

let prevSlideIndex = 0
let currentSlideIndex = 0
let slideTimeoutId = null;

const slides = Array.from(document.querySelectorAll('.frames'))
const navigationDots = Array.from(document.querySelectorAll('.circle'))

const nextButton = document.querySelector('.next')
const prevButton = document.querySelector('.prev')
nextButton.addEventListener('click', () => getNewSlideIndex(1))
prevButton.addEventListener('click', () => getNewSlideIndex(-1))

function getNewSlideIndex(position) {
    const newSlideIndex = currentSlideIndex + position
    prevSlideIndex = currentSlideIndex
    if (newSlideIndex > (slides.length - 1)) {
        currentSlideIndex = 0
    } else if (newSlideIndex < 0) {
        currentSlideIndex = slides.length - 1
    } else {
        currentSlideIndex = newSlideIndex
    }
    getNewSlide()
}

function getNewSlide() {
    slides[prevSlideIndex].classList.remove('show')
    slides[currentSlideIndex].classList.add('show')
    navigationDots[prevSlideIndex].classList.remove('showing')
    navigationDots[currentSlideIndex].classList.add('showing')

    if (slideTimeoutId) clearTimeout(slideTimeoutId);

    slideTimeoutId = setTimeout(function() {
        getNewSlideIndex(1)
    }, 5000)
}

(function() {
    navigationDots.forEach((button, index) => {
        button.addEventListener('click', () => {
            prevSlideIndex = currentSlideIndex
            currentSlideIndex = index
            getNewSlide()
        })
    })
})();

getNewSlide(0)