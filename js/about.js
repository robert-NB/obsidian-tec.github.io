document.addEventListener('DOMContentLoaded', () => {
    // Animación para la sección sobre mí
    gsap.from('.about-section', {
        scrollTrigger: {
            trigger: '.about-section',
            start: "top 80%",
            toggleActions: "play none none none"
        },
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2
    });

    // Animación para las habilidades
    gsap.from('.skill-category', {
        scrollTrigger: {
            trigger: '.skills-section',
            start: "top 80%",
            toggleActions: "play none none none"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "back.out(1.7)"
    });

    // Animación para la imagen de perfil
    gsap.from('.about-image', {
        scrollTrigger: {
            trigger: '.about-image',
            start: "top 90%",
            toggleActions: "play none none none"
        },
        scale: 0.9,
        opacity: 0,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)"
    });
});