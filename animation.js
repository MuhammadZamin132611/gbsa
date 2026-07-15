document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px', // Triggers slightly before the card is fully in view
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        let delay = 0;

        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Slide up, scale up, and fade in
                setTimeout(() => {
                    entry.target.classList.remove('opacity-0', 'translate-y-12', 'scale-95');
                    entry.target.classList.add('opacity-100', 'translate-y-0', 'scale-100');
                }, delay);
                delay += 200; // Increased delay slightly for a more deliberate staggered effect
            } else {
                // Revert back when out of view
                entry.target.classList.remove('opacity-100', 'translate-y-0', 'scale-100');
                entry.target.classList.add('opacity-0', 'translate-y-12', 'scale-95');
            }
        });
    }, observerOptions);

    const cards = document.querySelectorAll('.scroll-card');
    cards.forEach((card) => {
        observer.observe(card);
    });
});


