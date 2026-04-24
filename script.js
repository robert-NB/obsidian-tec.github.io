document.addEventListener("DOMContentLoaded", () => {
    // Animación del título
    gsap.from("#title", {
        duration: 1,
        y: -50,
        opacity: 0,
        ease: "power3.out"
    });

    // Animación del subtítulo
    gsap.from("#subtitle", {
        duration: 1,
        opacity: 0,
        delay: 0.5,
        ease: "power3.out"
    });

    // Animación de secciones al hacer scroll
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

    // Animación de los proyectos
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
});
