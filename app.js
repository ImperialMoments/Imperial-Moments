/* ==========================================================================
   IMPERIAL MOMENTS - PREMIUM LUXURY WEBSITE LOGIC (CMS HYDRATED)
   ========================================================================== */

// 1. Default CMS Data structure (used if localStorage is empty)
const defaultCMSData = {
    contact: {
        address: "750 Fifth Avenue, Suite 1200, New York, NY 10019",
        phone1: "7205767376",
        phone2: "9337513044",
        email: "Imperialmoments2026@gmail.com",
        instagram: "Imperial.moments_",
        whatsapp: "917205767376",
        web3formsKey: ""
    },
    about: {
        subtitle: "THE LEGACY",
        title: "The Art of Royal Celebration",
        highlight: "At Imperial Moments, we believe that life's grandest milestones deserve to be staged with royal majesty, absolute precision, and timeless luxury.",
        paragraph1: "Born out of a passion for luxury hospitality and grand ballrooms, Imperial Moments is the premier event planning concierge for high-end weddings, prestigious corporate galas, and exclusive VIP private experiences. We curate bespoke events worldwide, transforming visions into breathtaking realities.",
        paragraph2: "Every centerpiece, every candlelight shimmer, and every performance is hand-curated. With an elite registry of vendors, global destination access, and dedicated styling consultants, we guarantee an affair that is prestigious, unforgettable, and entirely yours."
    },
    services: [
        {
            title: "Royal Wedding Planning",
            icon: "fa-solid fa-gem",
            text: "Bespoke wedding curations with regal grand setups, designer styling, and seamless coordinate flows.",
            features: ["Venue sourcing (Castles & Ballrooms)", "Bespoke bridal registry access", "Full design & styling management"]
        },
        {
            title: "Destination Weddings",
            icon: "fa-solid fa-plane-departure",
            text: "Exquisite coordination of overseas weddings in French Châteaux, Italian villas, or private islands.",
            features: ["Global travel & concierge services", "Bilingual on-ground management", "Multi-day celebratory itineraries"]
        },
        {
            title: "Corporate Events",
            icon: "fa-solid fa-handshake",
            text: "Prestigious galas, elite awards nights, executive conferences, and grand brand launching ceremonies.",
            features: ["Brand experience alignment", "State-of-the-art production tech", "High-profile VIP speaker liaison"]
        },
        {
            title: "Luxury Birthdays",
            icon: "fa-solid fa-cake-candles",
            text: "Milestone birthday affairs custom-tailored around ultra-luxurious, creative theatrical themes.",
            features: ["Custom stage design & performance", "Michellin-star menu design", "Immersive themed aesthetics"]
        },
        {
            title: "Engagement Ceremonies",
            icon: "fa-solid fa-ring",
            text: "Intimate yet grand gatherings to announce forever, set in highly dramatic and romantic spaces.",
            features: ["Romantic styling & design", "Custom proposal orchestrations", "Fine wine & gourmet pairing"]
        },
        {
            title: "VIP Private Events",
            icon: "fa-solid fa-champagne-glasses",
            text: "Highly exclusive events where absolute discretion and custom luxury are non-negotiable details.",
            features: ["NDA protected environments", "Private security details", "High-profile artist management"]
        },
        {
            title: "Event Décor & Styling",
            icon: "fa-solid fa-wand-magic-sparkles",
            text: "Bespoke lighting, floral installations, luxury drapery, table curation, and floral arches.",
            features: ["High-end floral design registry", "Custom atmospheric lighting", "Luxury rentals (Cutlery & Chairs)"]
        },
        {
            title: "Entertainment & Artists",
            icon: "fa-solid fa-masks-theater",
            text: "Curating elite violinists, opera stars, international DJs, and acrobats for magnificent displays.",
            features: ["Global contract & rider handling", "Custom musical compositions", "Sound engineering oversight"]
        }
    ],
    portfolio: [
        {
            title: "The Versailles Romance",
            category: "weddings",
            details: "Castle Ballroom, France",
            src: "assets/wedding.png"
        },
        {
            title: "Aegis Annual Summit",
            category: "corporate",
            details: "Plaza Ballroom, NY",
            src: "assets/corporate.png"
        },
        {
            title: "The Sapphire Lounge",
            category: "vip",
            details: "Private Island Estate",
            src: "assets/vip_party.png"
        },
        {
            title: "Crest & Crimson Tablescape",
            category: "decor weddings",
            details: "Ritz Carlton, Vienna",
            src: "assets/about_1.png"
        },
        {
            title: "Orchid Cascade Stand",
            category: "decor",
            details: "Aria Ballrooms, Milan",
            src: "assets/about_2.png"
        },
        {
            title: "The Chandelier Grand Ballroom",
            category: "weddings vip",
            details: "Hofburg Palace, Austria",
            src: "assets/hero_bg.png"
        }
    ],
    testimonials: [
        {
            text: "\"Imperial Moments orchestrated our destination wedding in Normandy. It was nothing short of a fairy tale. The gold styling, the chandelier layout, and their concierge's support for our guests was simply immaculate. Pure royal class!\"",
            author: "Lady Eleanor & Lord George",
            title: "Normandy Chateau Wedding"
        },
        {
            text: "\"The annual corporate anniversary awards dinner we hosted needed to breathe prestige. Victoria Sterling and her event squad styled the hall in high-end charcoal and metallic gold drapes. The sound system and security were flawlessly coordinated. A spectacular success.\"",
            author: "Jonathan Hayes",
            title: "CEO, Vanguard Global Capital"
        },
        {
            text: "\"For my wife's 50th birthday gala, Imperial Moments designed a private island garden masquerade. The sheer attention to detailed floral installations and the violinists they brought from Salzburg left our guests spellbound. Truly master designers.\"",
            author: "Maximilian Vane",
            title: "Private Island Estate Gala"
        }
    ],
    gallery: [
        { src: "assets/wedding.png", title: "Luxury Arch Details", desc: "Golden floral arch at sunset ceremony." },
        { src: "assets/about_1.png", title: "Tablescape Detail", desc: "Luxury gold plate setting with crimson velvet napkins." },
        { src: "assets/corporate.png", title: "Stage Lighting Curation", desc: "Exquisite stage lighting for award events." },
        { src: "assets/vip_party.png", title: "Champagne Tower", desc: "Exquisite lounge birthday arrangements." },
        { src: "assets/about_2.png", title: "Floral Curation", desc: "Design coordinators positioning orchid displays." },
        { src: "assets/hero_bg.png", title: "Chandelier Grandeur", desc: "Massive crystals and candlelight setup." }
    ]
};

document.addEventListener("DOMContentLoaded", () => {
    // 2. Initial Variable Cache
    const preloader = document.getElementById("preloader");
    const preloaderBar = document.querySelector(".preloader-bar");
    const header = document.getElementById("header");
    const mobileToggle = document.getElementById("mobile-toggle");
    const mobileMenuOverlay = document.getElementById("mobile-menu-overlay");
    const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
    const cursor = document.querySelector(".custom-cursor");
    const cursorFollower = document.querySelector(".custom-cursor-follower");

    let cmsData = {};
    let lightboxTriggers = [];
    let activeLightboxIndex = 0;

    // 3. Hydrate Template from localStorage CMS data
    function loadCMSDatabase(callback) {
        const binUrl = `https://extendsclass.com/api/json-storage/bin/eaffcfa?t=${Date.now()}`;
        fetch(binUrl)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("ExtendsClass storage bin not found or failed");
            })
            .then(data => {
                cmsData = data;
                localStorage.setItem("imperial_moments_data", JSON.stringify(cmsData));
                callback();
            })
            .catch(dbErr => {
                console.warn("ExtendsClass DB load failed, trying local file fallback:", dbErr);
                fetch(`cms-data.json?t=${Date.now()}`)
                    .then(response => {
                        if (response.ok) {
                            return response.json();
                        }
                        throw new Error("Local cms-data.json not found");
                    })
                    .then(data => {
                        cmsData = data;
                        localStorage.setItem("imperial_moments_data", JSON.stringify(cmsData));
                        callback();
                    })
                    .catch(localErr => {
                        console.warn("Local fallback failed, using local cache / defaults:", localErr);
                        const localData = localStorage.getItem("imperial_moments_data");
                        if (!localData) {
                            cmsData = JSON.parse(JSON.stringify(defaultCMSData));
                            localStorage.setItem("imperial_moments_data", JSON.stringify(cmsData));
                        } else {
                            cmsData = JSON.parse(localData);
                        }
                        callback();
                    });
            });
    }

    function hydrateWebsite() {
        if (!cmsData || Object.keys(cmsData).length === 0) {
            const localData = localStorage.getItem("imperial_moments_data");
            if (!localData) {
                cmsData = JSON.parse(JSON.stringify(defaultCMSData));
                localStorage.setItem("imperial_moments_data", JSON.stringify(cmsData));
            } else {
                cmsData = JSON.parse(localData);
            }
        }

        // Hydrate About Us Section
        if (cmsData.about) {
            document.getElementById("about-subtitle").textContent = cmsData.about.subtitle;
            document.getElementById("about-title").textContent = cmsData.about.title;
            document.getElementById("about-highlight").textContent = cmsData.about.highlight;
            
            const aboutParagraphs = document.getElementById("about-paragraphs");
            aboutParagraphs.innerHTML = `
                <p class="about-paragraph">${cmsData.about.paragraph1}</p>
                <p class="about-paragraph">${cmsData.about.paragraph2}</p>
            `;
        }

        // Hydrate Services Cards
        if (cmsData.services) {
            const serviceGrid = document.querySelector(".service-grid");
            serviceGrid.innerHTML = "";
            cmsData.services.forEach((s) => {
                const card = document.createElement("div");
                card.className = "service-card anim-reveal-item";
                card.innerHTML = `
                    <div class="service-card-border"></div>
                    <div class="service-card-icon"><i class="${s.icon}"></i></div>
                    <h3 class="service-card-title">${s.title}</h3>
                    <p class="service-card-text">${s.text}</p>
                    <ul class="service-card-features">
                        ${s.features.map(f => `<li><i class="fa-solid fa-chevron-right gold-text"></i> ${f}</li>`).join("")}
                    </ul>
                `;
                serviceGrid.appendChild(card);
            });
        }

        // Hydrate Portfolio Masonry items
        if (cmsData.portfolio) {
            const portfolioGrid = document.getElementById("portfolio-grid");
            portfolioGrid.innerHTML = "";
            cmsData.portfolio.forEach((p) => {
                const card = document.createElement("div");
                card.className = `portfolio-item ${p.category} all`;
                card.setAttribute("data-category", p.category);
                
                // Get primary category for display
                const primaryCat = p.category.split(" ")[0];
                const displayCategory = primaryCat.charAt(0).toUpperCase() + primaryCat.slice(1);

                card.innerHTML = `
                    <div class="portfolio-card">
                        <img src="${p.src}" alt="${p.title}" class="portfolio-img">
                        <div class="portfolio-overlay">
                            <div class="portfolio-info">
                                <span class="portfolio-category">${displayCategory}</span>
                                <h4 class="portfolio-item-title">${p.title}</h4>
                                <p class="portfolio-item-details">${p.details}</p>
                                <button class="portfolio-view-btn" aria-label="View Project"><i class="fa-solid fa-expand"></i></button>
                            </div>
                        </div>
                    </div>
                `;
                portfolioGrid.appendChild(card);
            });
        }

        // Hydrate Testimonial Slides Carousel
        if (cmsData.testimonials) {
            const track = document.getElementById("testimonials-track");
            const dotsContainer = document.getElementById("slider-dots");
            
            track.innerHTML = "";
            dotsContainer.innerHTML = "";

            // Adjust width of testimonials track based on number of slides
            track.style.width = `${cmsData.testimonials.length * 100}%`;

            cmsData.testimonials.forEach((t, idx) => {
                // Append Slide
                const slide = document.createElement("div");
                slide.className = "testimonial-slide";
                slide.style.width = `${100 / cmsData.testimonials.length}%`;
                slide.innerHTML = `
                    <div class="testimonial-card">
                        <i class="fa-solid fa-quote-left quote-icon-gold"></i>
                        <p class="testimonial-text">${t.text}</p>
                        <div class="testimonial-author">
                            <h5 class="author-name">${t.author}</h5>
                            <p class="author-title">${t.title}</p>
                        </div>
                        <div class="author-stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                    </div>
                `;
                track.appendChild(slide);

                // Append dot
                const dot = document.createElement("span");
                dot.className = idx === 0 ? "dot active" : "dot";
                dot.setAttribute("data-index", idx);
                dotsContainer.appendChild(dot);
            });
        }

        // Hydrate Gallery Marquee Scroll
        if (cmsData.gallery) {
            const galleryTrack = document.querySelector(".gallery-track");
            galleryTrack.innerHTML = "";
            
            // Re-calculate marquee duration based on elements length
            galleryTrack.style.animationDuration = `${cmsData.gallery.length * 7}s`;

            cmsData.gallery.forEach((g) => {
                const item = document.createElement("div");
                item.className = "gallery-item-wrapper";
                item.innerHTML = `
                    <div class="gallery-item-inner" data-src="${g.src}" data-title="${g.title}" data-desc="${g.desc}">
                        <img src="${g.src}" alt="${g.title}" class="gallery-thumb">
                        <div class="gallery-item-glow"></div>
                        <span class="gallery-icon-hover"><i class="fa-solid fa-magnifying-glass-plus"></i></span>
                    </div>
                `;
                galleryTrack.appendChild(item);
            });
        }

        // Hydrate Contact Details blocks
        if (cmsData.contact) {
            document.getElementById("val-address").textContent = cmsData.contact.address;
            document.getElementById("val-email").textContent = cmsData.contact.email;
            
            // Phones lists links
            const p1 = cmsData.contact.phone1;
            const p2 = cmsData.contact.phone2;
            document.getElementById("val-phones").innerHTML = `
                <a href="tel:+91${p1}">+91 ${p1.slice(0,5)} ${p1.slice(5)}</a> &nbsp;|&nbsp; 
                <a href="tel:+91${p2}">+91 ${p2.slice(0,5)} ${p2.slice(5)}</a>
            `;

            // Mobile menu footer updates
            const mobFooter = document.querySelector(".mobile-menu-content .mobile-menu-footer");
            if (mobFooter) {
                mobFooter.innerHTML = `
                    <div class="divider-gold"></div>
                    <a href="tel:+91${p1}" class="mobile-footer-link"><i class="fa-solid fa-phone"></i> +91 ${p1.slice(0,5)} ${p1.slice(5)}</a>
                    <a href="tel:+91${p2}" class="mobile-footer-link"><i class="fa-solid fa-phone"></i> +91 ${p2.slice(0,5)} ${p2.slice(5)}</a>
                    <a href="mailto:${cmsData.contact.email}" class="mobile-footer-link"><i class="fa-solid fa-envelope"></i> ${cmsData.contact.email}</a>
                `;
            }

            // Update all WhatsApp redirect targets
            const waTarget = `https://wa.me/${cmsData.contact.whatsapp}`;
            document.querySelectorAll("a[href*='wa.me']").forEach(a => {
                a.setAttribute("href", waTarget);
            });

            // Update all Instagram handles
            const instaTarget = `https://instagram.com/${cmsData.contact.instagram}`;
            document.querySelectorAll("a[href*='instagram.com']").forEach(a => {
                a.setAttribute("href", instaTarget);
            });
        }

        // Rebuild Lightbox and Cursor hover registries dynamically on content update
        if (typeof buildLightboxRegistry === "function") {
            buildLightboxRegistry();
        }
        if (typeof bindCursorHoverActions === "function" && window.innerWidth > 992) {
            bindCursorHoverActions();
        }
    }


    // Run hydration instantly
    loadCMSDatabase(hydrateWebsite);

    // 4. Custom Cursor Follower Logic
    if (window.innerWidth > 992) {
        document.addEventListener("mousemove", (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
            
            gsap.to(cursorFollower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: "power2.out"
            });
        });

        // Add dynamic triggers helper function to bind dynamic CMS elements too
        function bindCursorHoverActions() {
            const hoverElements = document.querySelectorAll("a, button, select, input, textarea, .filter-btn, .portfolio-card, .gallery-item-inner");
            hoverElements.forEach(el => {
                el.addEventListener("mouseenter", () => {
                    cursor.style.transform = "translate(-50%, -50%) scale(2)";
                    cursor.style.backgroundColor = "rgba(214, 175, 55, 0.4)";
                    cursorFollower.style.borderColor = "#FCE082";
                    cursorFollower.style.transform = "translate(-50%, -50%) scale(1.3)";
                });
                el.addEventListener("mouseleave", () => {
                    cursor.style.transform = "translate(-50%, -50%) scale(1)";
                    cursor.style.backgroundColor = "var(--gold)";
                    cursorFollower.style.borderColor = "var(--gold)";
                    cursorFollower.style.transform = "translate(-50%, -50%) scale(1)";
                });
            });
        }
        bindCursorHoverActions();
    }

    // 5. Preloader Sequence
    let preloaderProgress = 0;
    const preloaderInterval = setInterval(() => {
        preloaderProgress += Math.floor(Math.random() * 15) + 5;
        if (preloaderProgress >= 100) {
            preloaderProgress = 100;
            clearInterval(preloaderInterval);
            preloaderBar.style.width = "100%";
            
            setTimeout(() => {
                preloader.classList.add("fade-out");
                triggerHeroAnimations();
            }, 500);
        } else {
            preloaderBar.style.width = `${preloaderProgress}%`;
        }
    }, 100);

    // 6. GSAP Reveals
    function triggerHeroAnimations() {
        if (typeof gsap !== "undefined") {
            const tl = gsap.timeline();
            
            tl.to("#hero-label-animate", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
              .to("#hero-title-animate", { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.5")
              .to("#hero-divider-animate", { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" }, "-=0.6")
              .to("#hero-tagline-animate", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.5")
              .to("#hero-actions-animate", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.4")
              .to(".scroll-indicator", { opacity: 1, y: 0, duration: 0.6 }, "-=0.2");

            gsap.to(".hero-bg", {
                yPercent: 20,
                ease: "none",
                scrollTrigger: {
                    trigger: ".hero-section",
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });

            // Reveals on scroll elements
            gsap.utils.toArray(".anim-fade-in-left").forEach(elem => {
                gsap.to(elem, {
                    scrollTrigger: { trigger: elem, start: "top 85%" },
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: "power3.out"
                });
            });

            gsap.utils.toArray(".anim-fade-in-right").forEach(elem => {
                gsap.to(elem, {
                    scrollTrigger: { trigger: elem, start: "top 85%" },
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: "power3.out"
                });
            });

            gsap.utils.toArray(".anim-fade-in-up").forEach(elem => {
                gsap.to(elem, {
                    scrollTrigger: { trigger: elem, start: "top 85%" },
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out"
                });
            });

            gsap.utils.toArray(".anim-reveal-item").forEach((card, index) => {
                gsap.to(card, {
                    scrollTrigger: { trigger: card, start: "top 90%" },
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: (index % 4) * 0.15,
                    ease: "power3.out"
                });
            });
        }
    }

    // 7. Floating Canvas Particles
    const canvas = document.getElementById("particles-canvas");
    const ctx = canvas.getContext("2d");
    let particles = [];
    const particleCount = 60;

    function resizeCanvas() {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = canvas.height + Math.random() * 100;
            this.size = Math.random() * 2.5 + 0.5;
            this.speedY = Math.random() * 0.6 + 0.2;
            this.speedX = Math.random() * 0.4 - 0.2;
            this.alpha = Math.random() * 0.5 + 0.2;
        }

        update() {
            this.y -= this.speedY;
            this.x += this.speedX;
            
            if (mouseX !== null && mouseY !== null) {
                const dx = mouseX - this.x;
                const dy = mouseY - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 150) {
                    const force = (150 - dist) / 150;
                    this.x -= dx * force * 0.03;
                }
            }

            if (this.y < -10 || this.alpha <= 0) {
                this.x = Math.random() * canvas.width;
                this.y = canvas.height + 20;
                this.size = Math.random() * 2.5 + 0.5;
                this.alpha = Math.random() * 0.5 + 0.2;
                this.speedY = Math.random() * 0.6 + 0.2;
            }
        }

        draw() {
            ctx.save();
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(212, 175, 55, ${this.alpha})`;
            ctx.shadowBlur = 10;
            ctx.shadowColor = "rgba(212, 175, 55, 0.8)";
            ctx.fill();
            ctx.restore();
        }
    }

    let mouseX = null;
    let mouseY = null;
    document.querySelector(".hero-section").addEventListener("mousemove", (e) => {
        const bounds = canvas.getBoundingClientRect();
        mouseX = e.clientX - bounds.left;
        mouseY = e.clientY - bounds.top;
    });

    document.querySelector(".hero-section").addEventListener("mouseleave", () => {
        mouseX = null;
        mouseY = null;
    });

    for (let i = 0; i < particleCount; i++) particles.push(new Particle());

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animateParticles);
    }
    animateParticles();

    // 8. Header Blur scroll triggers
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
        
        const scrollPosition = window.scrollY + 120;
        document.querySelectorAll("section").forEach(sec => {
            const top = sec.offsetTop;
            const height = sec.offsetHeight;
            const id = sec.getAttribute("id");

            if (scrollPosition >= top && scrollPosition < top + height) {
                document.querySelectorAll(".nav-link").forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${id}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    });

    // 9. Mobile menu toggle
    mobileToggle.addEventListener("click", () => {
        const isOpen = mobileMenuOverlay.classList.contains("open");
        if (isOpen) {
            mobileToggle.classList.remove("open");
            mobileToggle.setAttribute("aria-expanded", "false");
            mobileMenuOverlay.classList.remove("open");
            document.body.style.overflow = "initial";
        } else {
            mobileToggle.classList.add("open");
            mobileToggle.setAttribute("aria-expanded", "true");
            mobileMenuOverlay.classList.add("open");
            document.body.style.overflow = "hidden";
        }
    });

    mobileNavLinks.forEach(link => {
        link.addEventListener("click", () => {
            mobileToggle.classList.remove("open");
            mobileToggle.setAttribute("aria-expanded", "false");
            mobileMenuOverlay.classList.remove("open");
            document.body.style.overflow = "initial";
        });
    });

    // 10. Counters Trigger
    const statNumbers = document.querySelectorAll(".stat-number");
    let statsTriggered = false;

    function startCounters() {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute("data-target"), 10);
            const duration = 2000;
            const stepTime = Math.abs(Math.floor(duration / target));
            let current = 0;
            const timer = setInterval(() => {
                current += 1;
                stat.textContent = current;
                if (current >= target) {
                    stat.textContent = target;
                    clearInterval(timer);
                }
            }, stepTime);
        });
    }

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !statsTriggered) {
                statsTriggered = true;
                startCounters();
            }
        });
    }, { threshold: 0.3 });

    const statsSection = document.querySelector(".stats-section");
    if (statsSection) statsObserver.observe(statsSection);

    // 11. Portfolio filter
    const filterButtons = document.querySelectorAll(".filter-btn");
    
    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const filterVal = btn.getAttribute("data-filter");

            document.querySelectorAll(".portfolio-item").forEach(item => {
                if (filterVal === "all" || item.classList.contains(filterVal)) {
                    item.classList.remove("hidden");
                } else {
                    item.classList.add("hidden");
                }
            });
        });
    });

    // 12. Testimonials Carousel Slides Engine
    const track = document.getElementById("testimonials-track");
    const prevBtn = document.getElementById("prev-testimonial");
    const nextBtn = document.getElementById("next-testimonial");
    const dotsContainer = document.getElementById("slider-dots");
    let currentSlideIndex = 0;
    let autoPlayTimer;

    function getSlidesCount() {
        return document.querySelectorAll(".testimonial-slide").length;
    }

    function updateSliderPosition() {
        const slidesCount = getSlidesCount();
        if (slidesCount === 0) return;
        
        track.style.transform = `translateX(-${currentSlideIndex * (100 / slidesCount)}%)`;
        
        // Update dots state
        const allDots = Array.from(dotsContainer.querySelectorAll(".dot"));
        allDots.forEach(d => d.classList.remove("active"));
        if (allDots[currentSlideIndex]) {
            allDots[currentSlideIndex].classList.add("active");
        }
    }

    function moveToNextSlide() {
        const slidesCount = getSlidesCount();
        if (slidesCount === 0) return;
        currentSlideIndex = (currentSlideIndex + 1) % slidesCount;
        updateSliderPosition();
    }

    function moveToPrevSlide() {
        const slidesCount = getSlidesCount();
        if (slidesCount === 0) return;
        currentSlideIndex = (currentSlideIndex - 1 + slidesCount) % slidesCount;
        updateSliderPosition();
    }

    nextBtn.addEventListener("click", () => {
        resetAutoplay();
        moveToNextSlide();
    });

    prevBtn.addEventListener("click", () => {
        resetAutoplay();
        moveToPrevSlide();
    });

    // Live Event Delegation for dot elements
    dotsContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("dot")) {
            resetAutoplay();
            currentSlideIndex = parseInt(e.target.getAttribute("data-index"), 10);
            updateSliderPosition();
        }
    });

    function startAutoplay() {
        autoPlayTimer = setInterval(moveToNextSlide, 6000);
    }

    function resetAutoplay() {
        clearInterval(autoPlayTimer);
        startAutoplay();
    }
    startAutoplay();

    // 13. Interactive Lightbox triggers engine
    const lightboxModal = document.getElementById("lightbox-modal");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxTitle = document.getElementById("lightbox-title");
    const lightboxDesc = document.getElementById("lightbox-desc");
    const lightboxClose = document.getElementById("lightbox-close");
    const lightboxPrev = document.getElementById("lightbox-prev");
    const lightboxNext = document.getElementById("lightbox-next");

    function buildLightboxRegistry() {
        lightboxTriggers = [];
        
        // Dynamic Portfolio cards triggers
        document.querySelectorAll(".portfolio-card").forEach((card, idx) => {
            const img = card.querySelector(".portfolio-img");
            const category = card.querySelector(".portfolio-category").innerText;
            const title = card.querySelector(".portfolio-item-title").innerText;
            const details = card.querySelector(".portfolio-item-details").innerText;
            const viewBtn = card.querySelector(".portfolio-view-btn");

            lightboxTriggers.push({
                src: img.getAttribute("src"),
                title: `${category} | ${title}`,
                desc: details,
                element: viewBtn
            });
        });

        // Dynamic Gallery items triggers
        document.querySelectorAll(".gallery-item-inner").forEach((item) => {
            lightboxTriggers.push({
                src: item.getAttribute("data-src"),
                title: item.getAttribute("data-title"),
                desc: item.getAttribute("data-desc"),
                element: item
            });
        });

        // Bind clicks
        lightboxTriggers.forEach((media, idx) => {
            media.element.addEventListener("click", (e) => {
                e.stopPropagation();
                openLightbox(idx);
            });
        });
    }

    function openLightbox(index) {
        if (lightboxTriggers.length === 0) return;
        activeLightboxIndex = index;
        const target = lightboxTriggers[index];

        lightboxImg.setAttribute("src", target.src);
        lightboxTitle.textContent = target.title;
        lightboxDesc.textContent = target.desc;

        lightboxModal.classList.add("open");
        lightboxModal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    }

    function closeLightbox() {
        lightboxModal.classList.remove("open");
        lightboxModal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "initial";
    }

    function navigateLightbox(direction) {
        if (lightboxTriggers.length === 0) return;
        if (direction === "next") {
            activeLightboxIndex = (activeLightboxIndex + 1) % lightboxTriggers.length;
        } else {
            activeLightboxIndex = (activeLightboxIndex - 1 + lightboxTriggers.length) % lightboxTriggers.length;
        }
        openLightbox(activeLightboxIndex);
    }

    lightboxClose.addEventListener("click", closeLightbox);
    lightboxNext.addEventListener("click", () => navigateLightbox("next"));
    lightboxPrev.addEventListener("click", () => navigateLightbox("prev"));

    lightboxModal.addEventListener("click", (e) => {
        if (e.target === lightboxModal) closeLightbox();
    });

    document.addEventListener("keydown", (e) => {
        if (lightboxModal.classList.contains("open")) {
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowRight") navigateLightbox("next");
            if (e.key === "ArrowLeft") navigateLightbox("prev");
        }
    });

    // Build lightbox registry after DOM elements rendering
    buildLightboxRegistry();

    // 14. Contact Inquiry Request Form
    const form = document.getElementById("consultation-form");
    const nameInput = document.getElementById("form-name");
    const emailInput = document.getElementById("form-email");
    const phoneInput = document.getElementById("form-phone");
    const eventTypeInput = document.getElementById("form-event-type");
    const dateInput = document.getElementById("form-date");
    const messageInput = document.getElementById("form-message");
    const successOverlay = document.getElementById("form-success-overlay");
    const closeSuccessBtn = document.getElementById("close-success-btn");

    function validateField(input, errorElement) {
        let isValid = true;
        if (input.value.trim() === "") {
            isValid = false;
        } else if (input.type === "email") {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            isValid = emailRegex.test(input.value.trim());
        }

        if (!isValid) {
            input.classList.add("invalid");
            errorElement.style.display = "block";
        } else {
            input.classList.remove("invalid");
            errorElement.style.display = "none";
        }
        return isValid;
    }

    [nameInput, emailInput, phoneInput, eventTypeInput, dateInput, messageInput].forEach(input => {
        input.addEventListener("input", () => {
            input.classList.remove("invalid");
            const err = input.parentElement.querySelector(".error-msg");
            if (err) err.style.display = "none";
        });
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        // Hide general error message
        const formErrorMsg = document.getElementById("form-error-msg");
        if (formErrorMsg) {
            formErrorMsg.style.display = "none";
            formErrorMsg.textContent = "";
        }

        const isNameValid = validateField(nameInput, document.getElementById("error-name"));
        const isEmailValid = validateField(emailInput, document.getElementById("error-email"));
        const isPhoneValid = validateField(phoneInput, document.getElementById("error-phone"));
        const isEventValid = validateField(eventTypeInput, document.getElementById("error-event-type"));
        const isDateValid = validateField(dateInput, document.getElementById("error-date"));
        const isMessageValid = validateField(messageInput, document.getElementById("error-message"));

        if (isNameValid && isEmailValid && isPhoneValid && isEventValid && isDateValid && isMessageValid) {
            const submitBtn = document.getElementById("form-submit-btn");
            const originalBtnText = submitBtn.innerHTML;
            
            // Set loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = `<span>Sending Inquiry... <i class="fa-solid fa-spinner fa-spin"></i></span>`;

            // Prepare Payload
            const web3Key = (cmsData.contact.web3formsKey || "").trim();
            
            // If Web3Forms Access Key is not configured, simulate successful submission
            if (!web3Key) {
                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalBtnText;
                    successOverlay.classList.add("show");
                    console.warn("Web3Forms Access Key is not configured. Simulating submission.");
                }, 1000);
                return;
            }

            const formData = {
                access_key: web3Key,
                subject: `New Event Booking Inquiry - ${nameInput.value.trim()}`,
                from_name: "Imperial Moments Website",
                name: nameInput.value.trim(),
                email: emailInput.value.trim(),
                phone: phoneInput.value.trim(),
                event_type: eventTypeInput.options[eventTypeInput.selectedIndex].text,
                event_date: dateInput.value,
                message: messageInput.value.trim(),
            };

            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(async (response) => {
                const resJson = await response.json();
                if (response.status === 200) {
                    successOverlay.classList.add("show");
                } else {
                    console.error("Web3Forms Error Status:", response.status, resJson);
                    if (formErrorMsg) {
                        formErrorMsg.textContent = resJson.message || "Failed to dispatch booking inquiry. Please check your Web3Forms key configuration.";
                        formErrorMsg.style.display = "block";
                    }
                }
            })
            .catch(error => {
                console.error("Submission Network Error:", error);
                if (formErrorMsg) {
                    formErrorMsg.textContent = "A network error occurred. Please verify your internet connection and try again.";
                    formErrorMsg.style.display = "block";
                }
            })
            .finally(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;
            });
        }
    });

    closeSuccessBtn.addEventListener("click", () => {
        successOverlay.classList.remove("show");
        form.reset();
    });

    /* ==========================================================================
       CMS REGISTRY ADMIN CONTROLLER LOGIC
       ========================================================================== */

    // 1. Initial DOM caches
    const authWrapper = document.getElementById("auth-wrapper");
    const openRegistryBtn = document.getElementById("open-registry-btn");
    const footerRegistryBtn = document.getElementById("footer-registry-btn");
    const closeAuthBtn = document.getElementById("close-auth-btn");
    const loginForm = document.getElementById("login-form");
    const loginErrorBanner = document.getElementById("login-error-banner");
    const triggerForgotBtn = document.getElementById("trigger-forgot-btn");
    
    const dashboardContainer = document.getElementById("dashboard-container");
    const closeDashboardViewBtn = document.getElementById("close-dashboard-view-btn");
    const logoutBtn = document.getElementById("logout-btn");
    const globalSaveBtn = document.getElementById("global-save-btn");
    const sidebarMenuItems = document.querySelectorAll(".sidebar-menu .menu-item");
    
    // OTP simulation state
    let generatedOTP = "";

    // 2. Open / Close triggers
    function openRegistryAccess() {
        if (dashboardContainer.style.display === "flex") {
            return;
        }
        authWrapper.style.display = "flex";
        loginErrorBanner.style.display = "none";
        document.getElementById("login-username").value = "imperialmoments2026";
        document.getElementById("login-password").value = "";
    }

    if (openRegistryBtn) {
        openRegistryBtn.addEventListener("click", (e) => {
            e.preventDefault();
            openRegistryAccess();
        });
    }

    if (footerRegistryBtn) {
        footerRegistryBtn.addEventListener("click", (e) => {
            e.preventDefault();
            openRegistryAccess();
        });
    }

    if (closeAuthBtn) {
        closeAuthBtn.addEventListener("click", () => {
            authWrapper.style.display = "none";
        });
    }

    if (closeDashboardViewBtn) {
        closeDashboardViewBtn.addEventListener("click", () => {
            dashboardContainer.style.display = "none";
            document.body.style.overflow = "initial";
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            if (confirm("Are you sure you want to lock the CMS registry and logout?")) {
                dashboardContainer.style.display = "none";
                document.body.style.overflow = "initial";
            }
        });
    }

    // 3. User Credentials verification
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const usernameInput = document.getElementById("login-username").value.trim();
            const passwordInput = document.getElementById("login-password").value.trim();
            const storedPass = localStorage.getItem("imperial_moments_pass") || "IM2026";

            if (usernameInput === "imperialmoments2026" && passwordInput === storedPass) {
                loginErrorBanner.style.display = "none";
                authWrapper.style.display = "none";
                dashboardContainer.style.display = "flex";
                document.body.style.overflow = "hidden";
                populateDashboardFields();
            } else {
                loginErrorBanner.style.display = "block";
            }
        });
    }

    // 4. Password Recovery Flow
    const modalForgotEmail = document.getElementById("modal-forgot-email");
    const modalForgotOtp = document.getElementById("modal-forgot-otp");
    const modalForgotReset = document.getElementById("modal-forgot-reset");

    const forgotEmailForm = document.getElementById("forgot-email-form");
    const forgotOtpForm = document.getElementById("forgot-otp-form");
    const forgotResetForm = document.getElementById("forgot-reset-form");

    if (triggerForgotBtn) {
        triggerForgotBtn.addEventListener("click", () => {
            authWrapper.style.display = "none";
            modalForgotEmail.classList.add("open");
        });
    }

    if (forgotEmailForm) {
        forgotEmailForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const emailVal = document.getElementById("forgot-email-input").value.trim();
            const errorEmail = document.getElementById("forgot-email-error");

            if (emailVal.toLowerCase() === "imperialmoments2026@gmail.com") {
                errorEmail.style.display = "none";
                generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();
                document.getElementById("testing-otp-value").textContent = generatedOTP;
                console.log("SIMULATED OTP DISPATCHED TO EMAIL: " + generatedOTP);

                modalForgotEmail.classList.remove("open");
                modalForgotOtp.classList.add("open");
            } else {
                errorEmail.style.display = "block";
            }
        });
    }

    if (forgotOtpForm) {
        forgotOtpForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const otpVal = document.getElementById("forgot-otp-input").value.trim().replace(/\s/g, "");
            const errorOtp = document.getElementById("forgot-otp-error");

            if (otpVal === generatedOTP) {
                errorOtp.style.display = "none";
                modalForgotOtp.classList.remove("open");
                modalForgotReset.classList.add("open");
            } else {
                errorOtp.style.display = "block";
            }
        });
    }

    if (forgotResetForm) {
        forgotResetForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const pass1 = document.getElementById("reset-pass-1").value;
            const pass2 = document.getElementById("reset-pass-2").value;
            const errorReset = document.getElementById("forgot-reset-error");

            if (pass1 === pass2) {
                errorReset.style.display = "none";
                localStorage.setItem("imperial_moments_pass", pass1);
                modalForgotReset.classList.remove("open");
                authWrapper.style.display = "flex";
                alert("Registry password updated successfully! Please log in with your new credentials.");
                
                forgotEmailForm.reset();
                forgotOtpForm.reset();
                forgotResetForm.reset();
            } else {
                errorReset.style.display = "block";
            }
        });
    }

    // Bind all close buttons inside modal cards
    document.querySelectorAll(".close-modal-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const modal = btn.closest(".modal");
            if (modal) modal.classList.remove("open");
        });
    });

    // 5. Sidebar Navigation toggling
    sidebarMenuItems.forEach(item => {
        item.addEventListener("click", () => {
            sidebarMenuItems.forEach(i => i.classList.remove("active"));
            item.classList.add("active");

            const target = item.getAttribute("data-target");
            document.querySelectorAll(".dashboard-panel").forEach(panel => {
                panel.classList.remove("active");
            });

            const activePanel = document.getElementById(target);
            if (activePanel) activePanel.classList.add("active");

            // Update Panel title
            const tabTitle = item.textContent.trim();
            document.getElementById("panel-title-text").textContent = tabTitle + " Editor";
        });
    });

    // 6. Dynamic Lists Rendering
    // SERVICES List
    function renderCMSServices() {
        const list = document.getElementById("cms-services-list");
        if (!list) return;
        list.innerHTML = "";
        cmsData.services.forEach((s, idx) => {
            const card = document.createElement("div");
            card.className = "cms-item-card";
            card.innerHTML = `
                <div class="cms-item-header">
                    <div class="cms-item-icon"><i class="${s.icon || 'fa-solid fa-gem'}"></i></div>
                    <div class="cms-item-info">
                        <h4 class="cms-item-title">${s.title}</h4>
                        <div class="cms-item-meta">Service</div>
                    </div>
                </div>
                <p class="cms-item-desc">${s.text}</p>
                <div class="cms-item-actions">
                    <button type="button" class="btn btn-gold-outline btn-xs edit-service-btn" data-index="${idx}" style="padding: 5px 10px; font-size: 0.7rem; height: auto; width: auto; text-transform: uppercase;">Edit</button>
                    <button type="button" class="btn btn-red-outline btn-xs delete-service-btn" data-index="${idx}" style="padding: 5px 10px; font-size: 0.7rem; height: auto; width: auto; text-transform: uppercase;">Delete</button>
                </div>
            `;
            list.appendChild(card);
        });
    }

    // PORTFOLIO List
    function renderCMSPortfolio() {
        const list = document.getElementById("cms-portfolio-list");
        if (!list) return;
        list.innerHTML = "";
        cmsData.portfolio.forEach((p, idx) => {
            const card = document.createElement("div");
            card.className = "cms-item-card";
            card.innerHTML = `
                <div class="cms-item-header">
                    <img src="${p.src}" alt="${p.title}" class="cms-item-img">
                    <div class="cms-item-info">
                        <h4 class="cms-item-title">${p.title}</h4>
                        <div class="cms-item-meta">${p.category}</div>
                    </div>
                </div>
                <p class="cms-item-desc">${p.details}</p>
                <div class="cms-item-actions">
                    <button type="button" class="btn btn-gold-outline btn-xs edit-portfolio-btn" data-index="${idx}" style="padding: 5px 10px; font-size: 0.7rem; height: auto; width: auto; text-transform: uppercase;">Edit</button>
                    <button type="button" class="btn btn-red-outline btn-xs delete-portfolio-btn" data-index="${idx}" style="padding: 5px 10px; font-size: 0.7rem; height: auto; width: auto; text-transform: uppercase;">Delete</button>
                </div>
            `;
            list.appendChild(card);
        });
    }

    // TESTIMONIALS List
    function renderCMSTestimonials() {
        const list = document.getElementById("cms-testimonials-list");
        if (!list) return;
        list.innerHTML = "";
        cmsData.testimonials.forEach((t, idx) => {
            const card = document.createElement("div");
            card.className = "cms-item-card";
            card.innerHTML = `
                <div class="cms-item-header">
                    <div class="cms-item-icon"><i class="fa-solid fa-quote-left"></i></div>
                    <div class="cms-item-info">
                        <h4 class="cms-item-title">${t.author}</h4>
                        <div class="cms-item-meta">${t.title}</div>
                    </div>
                </div>
                <p class="cms-item-desc">${t.text}</p>
                <div class="cms-item-actions">
                    <button type="button" class="btn btn-gold-outline btn-xs edit-testimonial-btn" data-index="${idx}" style="padding: 5px 10px; font-size: 0.7rem; height: auto; width: auto; text-transform: uppercase;">Edit</button>
                    <button type="button" class="btn btn-red-outline btn-xs delete-testimonial-btn" data-index="${idx}" style="padding: 5px 10px; font-size: 0.7rem; height: auto; width: auto; text-transform: uppercase;">Delete</button>
                </div>
            `;
            list.appendChild(card);
        });
    }

    // GALLERY List
    function renderCMSGallery() {
        const list = document.getElementById("cms-gallery-list");
        if (!list) return;
        list.innerHTML = "";
        cmsData.gallery.forEach((g, idx) => {
            const card = document.createElement("div");
            card.className = "cms-item-card";
            card.innerHTML = `
                <div class="cms-item-header">
                    <img src="${g.src}" alt="${g.title}" class="cms-item-img">
                    <div class="cms-item-info">
                        <h4 class="cms-item-title">${g.title}</h4>
                        <div class="cms-item-meta">Gallery</div>
                    </div>
                </div>
                <p class="cms-item-desc">${g.desc}</p>
                <div class="cms-item-actions">
                    <button type="button" class="btn btn-gold-outline btn-xs edit-gallery-btn" data-index="${idx}" style="padding: 5px 10px; font-size: 0.7rem; height: auto; width: auto; text-transform: uppercase;">Edit</button>
                    <button type="button" class="btn btn-red-outline btn-xs delete-gallery-btn" data-index="${idx}" style="padding: 5px 10px; font-size: 0.7rem; height: auto; width: auto; text-transform: uppercase;">Delete</button>
                </div>
            `;
            list.appendChild(card);
        });
    }

    // Populate static fields and lists
    function populateDashboardFields() {
        // About Section
        if (cmsData.about) {
            document.getElementById("edit-about-subtitle").value = cmsData.about.subtitle || "";
            document.getElementById("edit-about-title").value = cmsData.about.title || "";
            document.getElementById("edit-about-highlight").value = cmsData.about.highlight || "";
            document.getElementById("edit-about-p1").value = cmsData.about.paragraph1 || "";
            document.getElementById("edit-about-p2").value = cmsData.about.paragraph2 || "";
        }

        // Contact Section
        if (cmsData.contact) {
            document.getElementById("edit-contact-address").value = cmsData.contact.address || "";
            document.getElementById("edit-contact-phone1").value = cmsData.contact.phone1 || "";
            document.getElementById("edit-contact-phone2").value = cmsData.contact.phone2 || "";
            document.getElementById("edit-contact-email").value = cmsData.contact.email || "";
            document.getElementById("edit-contact-instagram").value = cmsData.contact.instagram || "";
            document.getElementById("edit-contact-whatsapp").value = cmsData.contact.whatsapp || "";
            document.getElementById("edit-contact-web3forms-key").value = cmsData.contact.web3formsKey || "";
        }

        // Render dynamic lists
        renderCMSServices();
        renderCMSPortfolio();
        renderCMSTestimonials();
        renderCMSGallery();
    }

    // 7. Modals CRUD Trigger Hooks
    // SERVICES CRUD
    const btnAddService = document.getElementById("btn-add-service");
    const formServiceModal = document.getElementById("form-service-modal");
    
    if (btnAddService) {
        btnAddService.addEventListener("click", () => {
            document.getElementById("service-idx").value = "";
            document.getElementById("s-title").value = "";
            document.getElementById("s-icon").value = "fa-solid fa-gem";
            document.getElementById("s-desc").value = "";
            document.getElementById("s-features").value = "";
            document.getElementById("service-modal-title").textContent = "Add New Service";
            document.getElementById("modal-edit-service").classList.add("open");
        });
    }

    document.getElementById("cms-services-list").addEventListener("click", (e) => {
        if (e.target.classList.contains("edit-service-btn")) {
            const idx = parseInt(e.target.getAttribute("data-index"), 10);
            const s = cmsData.services[idx];
            
            document.getElementById("service-idx").value = idx;
            document.getElementById("s-title").value = s.title;
            document.getElementById("s-icon").value = s.icon;
            document.getElementById("s-desc").value = s.text;
            document.getElementById("s-features").value = s.features.join("\n");
            document.getElementById("service-modal-title").textContent = "Edit Service Details";
            document.getElementById("modal-edit-service").classList.add("open");
        }
        if (e.target.classList.contains("delete-service-btn")) {
            const idx = parseInt(e.target.getAttribute("data-index"), 10);
            if (confirm("Are you sure you want to delete this service?")) {
                cmsData.services.splice(idx, 1);
                renderCMSServices();
            }
        }
    });

    if (formServiceModal) {
        formServiceModal.addEventListener("submit", (e) => {
            e.preventDefault();
            const idxVal = document.getElementById("service-idx").value;
            const title = document.getElementById("s-title").value.trim();
            const icon = document.getElementById("s-icon").value.trim();
            const text = document.getElementById("s-desc").value.trim();
            const features = document.getElementById("s-features").value.split("\n").map(f => f.trim()).filter(f => f !== "");

            const updatedObj = { title, icon, text, features };

            if (idxVal === "") {
                cmsData.services.push(updatedObj);
            } else {
                cmsData.services[parseInt(idxVal, 10)] = updatedObj;
            }

            document.getElementById("modal-edit-service").classList.remove("open");
            renderCMSServices();
        });
    }

    // PORTFOLIO CRUD
    const btnAddPortfolio = document.getElementById("btn-add-portfolio");
    const formPortfolioModal = document.getElementById("form-portfolio-modal");

    if (btnAddPortfolio) {
        btnAddPortfolio.addEventListener("click", () => {
            document.getElementById("portfolio-idx").value = "";
            document.getElementById("p-title").value = "";
            document.getElementById("p-category").value = "weddings";
            document.getElementById("p-details").value = "";
            document.getElementById("p-src").value = "assets/wedding.png";
            document.getElementById("portfolio-modal-title").textContent = "Add Portfolio Showcase";
            document.getElementById("modal-edit-portfolio").classList.add("open");
        });
    }

    document.getElementById("cms-portfolio-list").addEventListener("click", (e) => {
        if (e.target.classList.contains("edit-portfolio-btn")) {
            const idx = parseInt(e.target.getAttribute("data-index"), 10);
            const p = cmsData.portfolio[idx];

            document.getElementById("portfolio-idx").value = idx;
            document.getElementById("p-title").value = p.title;
            document.getElementById("p-category").value = p.category;
            document.getElementById("p-details").value = p.details;
            document.getElementById("p-src").value = p.src;
            document.getElementById("portfolio-modal-title").textContent = "Edit Portfolio Details";
            document.getElementById("modal-edit-portfolio").classList.add("open");
        }
        if (e.target.classList.contains("delete-portfolio-btn")) {
            const idx = parseInt(e.target.getAttribute("data-index"), 10);
            if (confirm("Are you sure you want to delete this portfolio masterpiece?")) {
                cmsData.portfolio.splice(idx, 1);
                renderCMSPortfolio();
            }
        }
    });

    if (formPortfolioModal) {
        formPortfolioModal.addEventListener("submit", (e) => {
            e.preventDefault();
            const idxVal = document.getElementById("portfolio-idx").value;
            const title = document.getElementById("p-title").value.trim();
            const category = document.getElementById("p-category").value.trim();
            const details = document.getElementById("p-details").value.trim();
            const src = document.getElementById("p-src").value.trim();

            const updatedObj = { title, category, details, src };

            if (idxVal === "") {
                cmsData.portfolio.push(updatedObj);
            } else {
                cmsData.portfolio[parseInt(idxVal, 10)] = updatedObj;
            }

            document.getElementById("modal-edit-portfolio").classList.remove("open");
            renderCMSPortfolio();
        });
    }

    // TESTIMONIALS CRUD
    const btnAddTestimonial = document.getElementById("btn-add-testimonial");
    const formTestimonialModal = document.getElementById("form-testimonial-modal");

    if (btnAddTestimonial) {
        btnAddTestimonial.addEventListener("click", () => {
            document.getElementById("testimonial-idx").value = "";
            document.getElementById("t-text").value = "";
            document.getElementById("t-author").value = "";
            document.getElementById("t-title").value = "";
            document.getElementById("testimonial-modal-title").textContent = "Add New Review";
            document.getElementById("modal-edit-testimonial").classList.add("open");
        });
    }

    document.getElementById("cms-testimonials-list").addEventListener("click", (e) => {
        if (e.target.classList.contains("edit-testimonial-btn")) {
            const idx = parseInt(e.target.getAttribute("data-index"), 10);
            const t = cmsData.testimonials[idx];

            document.getElementById("testimonial-idx").value = idx;
            document.getElementById("t-text").value = t.text;
            document.getElementById("t-author").value = t.author;
            document.getElementById("t-title").value = t.title;
            document.getElementById("testimonial-modal-title").textContent = "Edit Review Details";
            document.getElementById("modal-edit-testimonial").classList.add("open");
        }
        if (e.target.classList.contains("delete-testimonial-btn")) {
            const idx = parseInt(e.target.getAttribute("data-index"), 10);
            if (confirm("Are you sure you want to delete this review?")) {
                cmsData.testimonials.splice(idx, 1);
                renderCMSTestimonials();
            }
        }
    });

    if (formTestimonialModal) {
        formTestimonialModal.addEventListener("submit", (e) => {
            e.preventDefault();
            const idxVal = document.getElementById("testimonial-idx").value;
            const text = document.getElementById("t-text").value.trim();
            const author = document.getElementById("t-author").value.trim();
            const title = document.getElementById("t-title").value.trim();

            const updatedObj = { text, author, title };

            if (idxVal === "") {
                cmsData.testimonials.push(updatedObj);
            } else {
                cmsData.testimonials[parseInt(idxVal, 10)] = updatedObj;
            }

            document.getElementById("modal-edit-testimonial").classList.remove("open");
            renderCMSTestimonials();
        });
    }

    // GALLERY CRUD
    const btnAddGallery = document.getElementById("btn-add-gallery");
    const formGalleryModal = document.getElementById("form-gallery-modal");

    if (btnAddGallery) {
        btnAddGallery.addEventListener("click", () => {
            document.getElementById("gallery-idx").value = "";
            document.getElementById("g-title").value = "";
            document.getElementById("g-desc").value = "";
            document.getElementById("g-src").value = "assets/wedding.png";
            document.getElementById("gallery-modal-title").textContent = "Add Marquee Image";
            document.getElementById("modal-edit-gallery").classList.add("open");
        });
    }

    document.getElementById("cms-gallery-list").addEventListener("click", (e) => {
        if (e.target.classList.contains("edit-gallery-btn")) {
            const idx = parseInt(e.target.getAttribute("data-index"), 10);
            const g = cmsData.gallery[idx];

            document.getElementById("gallery-idx").value = idx;
            document.getElementById("g-title").value = g.title;
            document.getElementById("g-desc").value = g.desc;
            document.getElementById("g-src").value = g.src;
            document.getElementById("gallery-modal-title").textContent = "Edit Marquee Details";
            document.getElementById("modal-edit-gallery").classList.add("open");
        }
        if (e.target.classList.contains("delete-gallery-btn")) {
            const idx = parseInt(e.target.getAttribute("data-index"), 10);
            if (confirm("Are you sure you want to delete this marquee image?")) {
                cmsData.gallery.splice(idx, 1);
                renderCMSGallery();
            }
        }
    });

    if (formGalleryModal) {
        formGalleryModal.addEventListener("submit", (e) => {
            e.preventDefault();
            const idxVal = document.getElementById("gallery-idx").value;
            const title = document.getElementById("g-title").value.trim();
            const desc = document.getElementById("g-desc").value.trim();
            const src = document.getElementById("g-src").value.trim();

            const updatedObj = { title, desc, src };

            if (idxVal === "") {
                cmsData.gallery.push(updatedObj);
            } else {
                cmsData.gallery[parseInt(idxVal, 10)] = updatedObj;
            }

            document.getElementById("modal-edit-gallery").classList.remove("open");
            renderCMSGallery();
        });
    }

    // 8. Publish changes to localstorage database & Hydrate
    if (globalSaveBtn) {
        globalSaveBtn.addEventListener("click", () => {
            // Save narrative
            cmsData.about.subtitle = document.getElementById("edit-about-subtitle").value.trim();
            cmsData.about.title = document.getElementById("edit-about-title").value.trim();
            cmsData.about.highlight = document.getElementById("edit-about-highlight").value.trim();
            cmsData.about.paragraph1 = document.getElementById("edit-about-p1").value.trim();
            cmsData.about.paragraph2 = document.getElementById("edit-about-p2").value.trim();

            // Save contact details
            cmsData.contact.address = document.getElementById("edit-contact-address").value.trim();
            cmsData.contact.phone1 = document.getElementById("edit-contact-phone1").value.trim();
            cmsData.contact.phone2 = document.getElementById("edit-contact-phone2").value.trim();
            cmsData.contact.email = document.getElementById("edit-contact-email").value.trim();
            cmsData.contact.instagram = document.getElementById("edit-contact-instagram").value.trim();
            cmsData.contact.whatsapp = document.getElementById("edit-contact-whatsapp").value.trim();
            cmsData.contact.web3formsKey = document.getElementById("edit-contact-web3forms-key").value.trim();

            // Store in LocalStorage
            localStorage.setItem("imperial_moments_data", JSON.stringify(cmsData));

            // Hydrate instantly
            hydrateWebsite();

            // Disable button & show spinner loading status
            const originalContent = globalSaveBtn.innerHTML;
            globalSaveBtn.disabled = true;
            globalSaveBtn.innerHTML = `<span>Publishing... <i class="fa-solid fa-spinner fa-spin"></i></span>`;

            // Publish globally to ExtendsClass API
            const binUrl = "https://extendsclass.com/api/json-storage/bin/eaffcfa";
            fetch(binUrl, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(cmsData)
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Cloud update failed (Status: " + response.status + ")");
            })
            .then(result => {
                // Restore button state
                globalSaveBtn.disabled = false;
                globalSaveBtn.innerHTML = originalContent;

                // Show Toast Alert
                const toast = document.getElementById("cms-success-toast");
                if (toast) {
                    const desc = toast.querySelector(".toast-desc");
                    if (desc) {
                        desc.textContent = "The database updates were successfully published live globally.";
                    }
                    toast.classList.add("show");
                    setTimeout(() => {
                        toast.classList.remove("show");
                    }, 4000);
                }
            })
            .catch(err => {
                console.error("Database save failed:", err);
                globalSaveBtn.disabled = false;
                globalSaveBtn.innerHTML = originalContent;
                alert("Error publishing changes: " + err.message + "\nYour changes are saved locally but could not be sent to the server. Please check your internet connection.");
            });
        });
    }

    document.getElementById("current-year").textContent = new Date().getFullYear();
});

