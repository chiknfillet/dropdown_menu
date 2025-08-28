import "./reset.css";
import "./styles.css";

const buttonsList = document.querySelectorAll('.dropdown')
const buttons = Array.from(buttonsList);

buttons.forEach(button => {
    const toggleButton = button.querySelector('.toggle')

    toggleButton.addEventListener('click', () => {
        const hiddenButtons = button.querySelectorAll('button:not(.toggle)') 
        const hiddenButtonsArray = Array.from(hiddenButtons);

        hiddenButtons.forEach(hiddenButton => {
            if (hiddenButton.classList.contains('hidden')) {
                removeHiddenClass(hiddenButton)
            } else {
                addHiddenClass(hiddenButton)
            }
        })
    })
    
})

function removeHiddenClass(button) {
    button.classList.remove('hidden')
}

function addHiddenClass(button) {
    button.classList.add('hidden')
}