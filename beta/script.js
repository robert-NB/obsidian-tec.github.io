// Función para el efecto máquina de escribir
function typeWriterEffect() {
    const title = document.getElementById('title');
    const originalText = title.textContent;
    title.textContent = '';
    
    let i = 0;
    const speed = 100;
    
    function type() {
        if (i < originalText.length) {
            title.textContent += originalText.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Función para la navegación suave
function setupSmoothScrolling() {
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offset = 70;
                const targetPosition = targetElement.offsetTop - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Actualizar la clase active
                document.querySelectorAll('nav a').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });
}

// Función para cargar imágenes diferidas
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                observer.unobserve(img);
                
                gsap.from(img, {
                    duration: 0.8,
                    opacity: 0,
                    scale: 0.95,
                    ease: "power2.out"
                });
            }
        });
    }, { threshold: 0.1 });

    images.forEach(img => imageObserver.observe(img));
}

// Función para el modo oscuro
function setupDarkMode() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    // Comprobar preferencia del sistema o almacenamiento local
    const currentTheme = localStorage.getItem('theme') || 
                        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    // Alternar tema
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        const isDark = body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        
        themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        themeToggle.setAttribute('aria-label', isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    });
}

// Configuración inicial de GSAP y ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Configuración de animaciones al hacer scroll
function setupScrollAnimations() {
    // Animación de secciones
    gsap.utils.toArray("section").forEach((section) => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out"
        });
    });

    // Animación de proyectos
    gsap.utils.toArray(".proyecto").forEach((proyecto) => {
        gsap.from(proyecto, {
            scrollTrigger: {
                trigger: proyecto,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 30,
            duration: 1,
            ease: "power3.out"
        });
    });
}

// Inicialización cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
    // Efecto máquina de escribir
    typeWriterEffect();
    
    // Animación inicial del título
    gsap.from("#title", {
        duration: 1,
        y: -50,
        opacity: 0,
        ease: "power3.out"
    });

    // Configurar scroll suave
    setupSmoothScrolling();
    
    // Configurar animaciones de scroll
    setupScrollAnimations();
    
    // Carga diferida de imágenes
    lazyLoadImages();
    
    // Configurar modo oscuro
    setupDarkMode();

    // Configurar scroll para sección activa
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav a');
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});