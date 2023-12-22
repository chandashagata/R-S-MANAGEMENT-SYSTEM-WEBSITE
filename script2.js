const blinkingDiv = document.querySelector('.head');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Adjust the threshold as needed
    const blinkThreshold = 500;

    if (scrollY > blinkThreshold) {
        blinkingDiv.classList.add('blink');
    } else {
        blinkingDiv.classList.remove('blink');
    }
});