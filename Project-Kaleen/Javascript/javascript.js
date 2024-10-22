let currentSlide = 0;

    function showSlide(index) {
        const slides = document.querySelector('.slides');
        const totalSlides = document.querySelectorAll('.slide').length;

        // Loop back to the first slide if at the end
        if (index >= totalSlides) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = totalSlides - 1;
        } else {
            currentSlide = index;
        }

        // Move slides to show the current slide
        slides.style.transform = 'translateX(' + (-currentSlide * 100) + '%)';
    }

    function changeSlide(direction) {
        showSlide(currentSlide + direction);
    }

    // Automatic slide change every 3 seconds
    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 3000);

    // Initial display
    showSlide(currentSlide);


    