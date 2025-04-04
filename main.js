document.addEventListener('DOMContentLoaded', () => {
    // --- Function to create static stars ---
    function createStars(container, totalCount, twinkleProbability) {
        if (!container) return;
        // Clear only generated stars before recreating (e.g., on resize)
        container.querySelectorAll('.star.generated').forEach(el => el.remove());

        // Clear existing static stars if any (e.g., on resize/reload)
        container.querySelectorAll('.star.static').forEach(el => el.remove());
        for (let i = 0; i < totalCount; i++) {
            const star = document.createElement('div');
            star.classList.add('star', 'generated'); // Mark as generated
            const size = Math.random() * 1.5 + 0.5; // Random size (0.5px to 2px)
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.top = `${Math.random() * 100}%`; // Random position
            star.style.left = `${Math.random() * 100}%`;
            star.style.opacity = Math.random() * 0.6 + 0.1; // Random opacity (0.1 to 0.7)
            
            // Randomly assign twinkle effect
            if (Math.random() < twinkleProbability) {
                star.classList.add('twinkle');
                // Set random delay using CSS variable
                const delay = Math.random() * 4; // Delay up to 4s (animation duration)
                star.style.setProperty('--twinkle-delay', `${delay}s`);
            } else {
                star.classList.add('static'); // Add static class if not twinkling
            }

            container.appendChild(star);
        }

        setInterval(() => {
            container.querySelectorAll('.star').forEach(star => {
                star.classList.remove('twinkle');
                if (Math.random() < twinkleProbability) {
                    star.classList.add('twinkle');
                    const delay = Math.random() * 4;
                    star.style.setProperty('--twinkle-delay', `${delay}s`);
                } else {
                    star.classList.add('static');
                }
            });
        }, 10000);
    }

    // Selectors
    const starsContainer = document.querySelector('.stars-background');
    const CometsContainer = document.querySelector('.hero .comets');
    const backToTopButton = document.getElementById("back-to-top-btn");

    // Create Static Stars
    createStars(starsContainer, 200, 0.02); // Generate static stars

    // Comet Animation Script
    if (CometsContainer) {
        function createComet() {
            if (CometsContainer.children.length > 50) {
                if(CometsContainer.children[0]) { CometsContainer.children[0].remove(); }
            }
            let cometX = Math.round(Math.random() * window.innerWidth);
            let cometY = Math.round(Math.random() * window.innerHeight);
            let comet = document.createElement('div');
            // Always assign the rainbow effect
            comet.setAttribute('class', 'comet comet-rainbow');
            comet.style.left = cometX+'px';
            comet.style.top  = cometY+'px';
            CometsContainer.append(comet);
            setTimeout(() => {
                if (comet && comet.parentNode) { comet.remove(); }
            }, 3000 + 500); // Match movement animation duration
        }
        const cometInterval = setInterval(createComet, 1500); // Spawn rate
        window.addEventListener('beforeunload', () => { clearInterval(cometInterval); });
    } else {
        console.error("Comet container (.hero .comets) not found!");
    }

    // Back to Top Button Script
    if (backToTopButton) {
        const scrollThreshold = 300;
        window.addEventListener("scroll", () => {
            if (window.scrollY > scrollThreshold) { backToTopButton.classList.add("active"); }
            else { backToTopButton.classList.remove("active"); }
        });
        backToTopButton.addEventListener("click", (event) => {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            createStars(starsContainer, 200, 0.02); // Recreate stars on resize
        }, 300); // Debounce
    });
}); 