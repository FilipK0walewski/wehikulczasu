const yearDisplay = document.getElementById('year-display')
const yearInput = document.getElementById('year-input')

yearDisplay.innerHTML = yearInput.value
yearInput.addEventListener('change', (e) => {
    yearDisplay.innerHTML = e.target.value
})
