document.addEventListener('DOMContentLoaded', () => {
    // Create stars for the hero section only
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        createStars(heroSection, 200, 0.3);
    }

    // Create comets for the hero section

    // Back to top button functionality
    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Recreate stars on window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            // Remove existing stars
            const existingStars = document.querySelectorAll('.star');
            existingStars.forEach(star => star.remove());
            // Create new stars only in the hero section
            if (heroSection) {
                createStars(heroSection, 200, 0.3);
            }
        }, 250);
    });

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

    // Comet Animation Script
    const CometsContainer = document.querySelector('.comets');
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

    // Embedded bindings data
    const bindingsData = {
        "bindings": [
            {
                "language": "JavaScript/TypeScript",
                "description": "JavaScript and TypeScript bindings for libcardano-c",
                "status": "In Development",
                "color": "#635bfffe",
                "icon": "fab fa-js",
                "repository": "https://github.com/Biglup/cardano-c-js"
            },
            {
                "language": "C++",
                "description": "C++ bindings for libcardano-c",
                "status": "Planned",
                "color": "#635bfffe",
                "icon": "fas fa-code",
                "repository": "https://github.com/Biglup/cardano-c-cpp"
            },
            {
                "language": "C#",
                "description": "C# bindings for libcardano-c",
                "status": "Planned",
                "color": "#635bfffe",
                "icon": "fab fa-microsoft",
                "repository": "https://github.com/Biglup/cardano-c-sharp"
            },
            {
                "language": "Java",
                "description": "Java bindings for libcardano-c",
                "status": "Planned",
                "color": "#635bfffe",
                "icon": "fab fa-java",
                "repository": "https://github.com/Biglup/cardano-c-java"
            },
            {
                "language": "Python",
                "description": "Python bindings for libcardano-c",
                "status": "Planned",
                "color": "#635bfffe",
                "icon": "fab fa-python",
                "repository": "https://github.com/Biglup/cardano-c-python"
            },
            {
                "language": "Lua",
                "description": "Lua bindings for libcardano-c",
                "status": "Planned",
                "color": "#635bfffe",
                "icon": "fas fa-code",
                "repository": "https://github.com/Biglup/cardano-c-lua"
            },
            {
                "language": "Ruby",
                "description": "Ruby bindings for libcardano-c",
                "status": "Planned",
                "color": "#635bfffe",
                "icon": "fas fa-gem",
                "repository": "https://github.com/Biglup/cardano-c-ruby"
            },
            {
                "language": "PHP",
                "description": "PHP bindings for libcardano-c",
                "status": "Planned",
                "color": "#635bfffe",
                "icon": "fab fa-php",
                "repository": "https://github.com/Biglup/cardano-c-php"
            },
            {
                "language": "Zig",
                "description": "Zig bindings for libcardano-c",
                "status": "Planned",
                "color": "#635bfffe",
                "icon": "devicon-zig-original",
                "repository": "https://github.com/Biglup/cardano-c-zig"
            },
            {
                "language": "Odin",
                "description": "Odin bindings for libcardano-c",
                "status": "Planned",
                "color": "#635bfffe",
                "icon": "devicon-zig-original",
                "repository": "https://github.com/Biglup/cardano-c-odin"
            },
            {
                "language": "Ada",
                "description": "Ada bindings for libcardano-c",
                "status": "Planned",
                "color": "#635bfffe",
                "icon": "fas fa-code",
                "repository": "https://github.com/Biglup/cardano-c-ada"
            },
            {
                "language": "Go",
                "description": "Go bindings for libcardano-c",
                "status": "Planned",
                "color": "#635bfffe",
                "icon": "fab fa-golang",
                "repository": "https://github.com/Biglup/cardano-c-go"
            }
        ]
    };

    // Function to display bindings
    function displayBindings() {
        const bindingsContainer = document.getElementById('bindings-container');
        
        if (!bindingsContainer) {
            console.error('Bindings container not found!');
            return;
        }

        try {
            console.log('Displaying bindings data...');
            
            // Clear existing content
            bindingsContainer.innerHTML = '';

            bindingsData.bindings.forEach((binding, index) => {
                console.log(`Creating card for ${binding.language}...`);
                const card = document.createElement('div');
                card.className = 'binding-card';
                
                // Add pending class if status is "Planned"
                if (binding.status === "Planned") {
                    card.classList.add('pending');
                }

                // Get the appropriate logo path for the language
                const logoPath = getLogoPath(binding.language);

                // Create card content
                card.innerHTML = `
                    <div class="logo-container">
                        <img src="${logoPath}" alt="${binding.language} logo" class="language-logo">
                    </div>
                    <h3>${binding.language}</h3>
                    <div class="language-subtitle">${binding.description}</div>
                `;

                // Add action buttons for cards in development
                if (binding.status === "In Development") {
                    const actionsDiv = document.createElement('div');
                    actionsDiv.className = 'card-actions';
                    actionsDiv.innerHTML = `
                        <a href="${binding.repository}" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-github"></i> GitHub
                        </a>
                        <a href="${binding.documentation || '#'}" target="_blank" rel="noopener noreferrer">
                            <i class="fas fa-book"></i> Documentation
                        </a>
                    `;
                    card.appendChild(actionsDiv);
                }

                // Only add status pill for planned bindings
                if (binding.status === "Planned") {
                    const statusPill = document.createElement('div');
                    statusPill.className = `binding-status ${binding.status.toLowerCase().replace(' ', '-')}`;
                    statusPill.textContent = binding.status;
                    card.appendChild(statusPill);
                }

                bindingsContainer.appendChild(card);
            });
        } catch (error) {
            console.error('Error displaying bindings:', error);
            bindingsContainer.innerHTML = `
                <div class="error-message" style="text-align: center; color: var(--text-color-muted); padding: 2rem;">
                    <p>Failed to display language bindings. Please try refreshing the page.</p>
                    <p>Error: ${error.message}</p>
                </div>
            `;
        }
    }

    // Function to get the appropriate logo path for a language
    function getLogoPath(language) {
        // Map of language names to logo file paths
        const languageLogos = {
            'JavaScript/TypeScript': 'logos/javascript.svg',
            'Python': 'logos/python.svg',
            'C++': 'logos/c++_Logo.svg',
            'C#': 'logos/c_sharp.svg',
            'Java': 'logos/java.svg',
            'Go': 'logos/go.svg',
            'Rust': 'logos/rust.svg', // Assuming you'll add this
            'Lua': 'logos/lua.svg',
            'PHP': 'logos/php.svg',
            'Ruby': 'logos/ruby.svg',
            'Odin': 'logos/odin.svg',
            'Jai': 'logos/c_Logo.png', // Fallback to C logo
            'D': 'logos/d.svg', // Assuming you'll add this
            'Zig': 'logos/zig.svg',
            'Ada': 'logos/ada.svg'
        };
        
        return languageLogos[language] || 'logos/c_Logo.png'; // Default to C logo if not found
    }

    // Call displayBindings when the DOM is loaded
    console.log('DOM loaded, initializing bindings...');
    displayBindings();
}); 