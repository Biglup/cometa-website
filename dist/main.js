document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        createStars(heroSection, 400, 0.05);
    }

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

    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            const existingStars = document.querySelectorAll('.star');
            existingStars.forEach(star => star.remove());

            if (heroSection) {
                createStars(heroSection, 400, 0.05);
            }
        }, 250);
    });

    function createStars(container, totalCount, twinkleProbability) {
        if (!container) return;
        container.querySelectorAll('.star.generated').forEach(el => el.remove());

        container.querySelectorAll('.star.static').forEach(el => el.remove());
        for (let i = 0; i < totalCount; i++) {
            const star = document.createElement('div');
            star.classList.add('star', 'generated');
            const size = Math.random() * 1.5 + 0.5;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.left = `${Math.random() * 100}%`;
            star.style.opacity = Math.random() * 0.6 + 0.1;
            
            if (Math.random() < twinkleProbability) {
                star.classList.add('twinkle');
                const delay = Math.random() * 4;
                star.style.setProperty('--twinkle-delay', `${delay}s`);
            } else {
                star.classList.add('static');
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

    const CometsContainer = document.querySelector('.comets');
    if (CometsContainer) {
        function createComet() {
            if (CometsContainer.children.length > 50) {
                if(CometsContainer.children[0]) { CometsContainer.children[0].remove(); }
            }
            let cometX = Math.round(Math.random() * window.innerWidth);
            let cometY = Math.round(Math.random() * window.innerHeight);
            let comet = document.createElement('div');
            comet.setAttribute('class', 'comet comet-rainbow');
            comet.style.left = cometX+'px';
            comet.style.top  = cometY+'px';
            CometsContainer.append(comet);
            setTimeout(() => {
                if (comet && comet.parentNode) { comet.remove(); }
            }, 3000 + 500);
        }
        const cometInterval = setInterval(createComet, 1500);
        window.addEventListener('beforeunload', () => { clearInterval(cometInterval); });
    } else {
        console.error("Comet container (.hero .comets) not found!");
    }

    const bindingsData = {
        "bindings": [
            {
                "language": "JavaScript/TypeScript",
                "description": "JavaScript and TypeScript bindings for libcardano-c",
                "status": "In Development",
                "repository": "https://github.com/Biglup/cometa.js",
                "documentation": "https://cometajs.readthedocs.io/en/latest"
            },
            {
                "language": "C++",
                "description": "C++ bindings for libcardano-c",
                "status": "Planned",
                "repository": "https://github.com/Biglup/cardano-c-cpp",
                "documentation": "https://github.com/Biglup/cardano-c-cpp#readme"
            },
            {
                "language": "C#",
                "description": "C# bindings for libcardano-c",
                "status": "Planned",
                "repository": "https://github.com/Biglup/cardano-c-sharp",
                "documentation": "https://github.com/Biglup/cardano-c-sharp#readme"
            },
            {
                "language": "Java",
                "description": "Java bindings for libcardano-c",
                "status": "Planned",
                "repository": "https://github.com/Biglup/cardano-c-java",
                "documentation": "https://github.com/Biglup/cardano-c-java#readme"
            },
            {
                "language": "Python",
                "description": "Python bindings for libcardano-c",
                "status": "Planned",
                "repository": "https://github.com/Biglup/cardano-c-python",
                "documentation": "https://github.com/Biglup/cardano-c-python#readme"
            },
            {
                "language": "Lua",
                "description": "Lua bindings for libcardano-c",
                "status": "Planned",
                "repository": "https://github.com/Biglup/cardano-c-lua",
                "documentation": "https://github.com/Biglup/cardano-c-lua#readme"
            },
            {
                "language": "Ruby",
                "description": "Ruby bindings for libcardano-c",
                "status": "Planned",
                "repository": "https://github.com/Biglup/cardano-c-ruby",
                "documentation": "https://github.com/Biglup/cardano-c-ruby#readme"
            },
            {
                "language": "PHP",
                "description": "PHP bindings for libcardano-c",
                "status": "Planned",
                "repository": "https://github.com/Biglup/cardano-c-php",
                "documentation": "https://github.com/Biglup/cardano-c-php#readme"
            },
            {
                "language": "Zig",
                "description": "Zig bindings for libcardano-c",
                "status": "Planned",
                "repository": "https://github.com/Biglup/cardano-c-zig",
                "documentation": "https://github.com/Biglup/cardano-c-zig#readme"
            },
            {
                "language": "Odin",
                "description": "Odin bindings for libcardano-c",
                "status": "Planned",
                "repository": "https://github.com/Biglup/cardano-c-odin",
                "documentation": "https://github.com/Biglup/cardano-c-odin#readme"
            },
            {
                "language": "Ada",
                "description": "Ada bindings for libcardano-c",
                "status": "Planned",
                "repository": "https://github.com/Biglup/cardano-c-ada",
                "documentation": "https://github.com/Biglup/cardano-c-ada#readme"
            },
            {
                "language": "Go",
                "description": "Go bindings for libcardano-c",
                "status": "Planned",
                "repository": "https://github.com/Biglup/cardano-c-go",
                "documentation": "https://github.com/Biglup/cardano-c-go#readme"
            }
        ]
    };

    function displayBindings() {
        const bindingsContainer = document.getElementById('bindings-container');
        
        if (!bindingsContainer) {
            console.error('Bindings container not found!');
            return;
        }

        try {
            console.log('Displaying bindings data...');
            
            bindingsContainer.innerHTML = '';

            bindingsData.bindings.forEach((binding, index) => {
                console.log(`Creating card for ${binding.language}...`);
                const card = document.createElement('div');
                card.className = 'binding-card';
                
                if (binding.status === "Planned") {
                    card.classList.add('pending');
                }

                const logoPath = getLogoPath(binding.language);

                card.innerHTML = `
                    <div class="logo-container">
                        <img src="${logoPath}" alt="${binding.language} logo" class="language-logo">
                    </div>
                    <h3>${binding.language}</h3>
                    <div class="language-subtitle">${binding.description}</div>
                `;

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

    function getLogoPath(language) {
        const languageLogos = {
            'JavaScript/TypeScript': 'logos/javascript.svg',
            'Python': 'logos/python.svg',
            'C++': 'logos/c++_Logo.svg',
            'C#': 'logos/c_sharp.svg',
            'Java': 'logos/java.svg',
            'Go': 'logos/go.svg',
            'Rust': 'logos/rust.svg',
            'Lua': 'logos/lua.svg',
            'PHP': 'logos/php.svg',
            'Ruby': 'logos/ruby.svg',
            'Odin': 'logos/odin.svg',
            'Jai': 'logos/c_Logo.png',
            'D': 'logos/d.svg',
            'Zig': 'logos/zig.svg',
            'Ada': 'logos/ada.svg'
        };
        
        return languageLogos[language] || 'logos/c_Logo.png';
    }

    console.log('DOM loaded, initializing bindings...');
    displayBindings();
}); 