let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 6000); 
}

window.addEventListener('scroll', function() {
    var stickyDiv = document.querySelector('.head');
    var scrollPosition = window.scrollY;

    if (scrollPosition >= 1) {
        stickyDiv.style.position = 'fixed';
        stickyDiv.style.top = '0';
    } else {
        stickyDiv.style.position = 'relative';
        stickyDiv.style.top = '1px';
    }
});


document.addEventListener("DOMContentLoaded", function () {
    openPopup();
});

function openPopup() {
    document.getElementById('popup').style.display = 'flex';
    
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    
}








