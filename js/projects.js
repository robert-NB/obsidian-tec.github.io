document.addEventListener('DOMContentLoaded', () => {
    // Filtrado de proyectos
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            const projects = document.querySelectorAll('.project-detail');
            
            projects.forEach(project => {
                const shouldShow = filter === 'all' || project.classList.contains(filter);
                
                gsap.to(project, {
                    duration: 0.5,
                    opacity: shouldShow ? 1 : 0,
                    height: shouldShow ? 'auto' : 0,
                    marginBottom: shouldShow ? '6rem' : 0,
                    ease: "power2.out",
                    onComplete: () => {
                        project.style.display = shouldShow ? 'grid' : 'none';
                    }
                });
            });
        });
    });

    // Animaciones
    gsap.utils.toArray(".project-detail").forEach((project, i) => {
        gsap.from(project, {
            scrollTrigger: {
                trigger: project,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: "power2.out",
            delay: i * 0.1
        });
    });

    // Efecto parallax
    gsap.utils.toArray(".parallax-bg").forEach(bg => {
        gsap.to(bg, {
            yPercent: 15,
            ease: "none",
            scrollTrigger: {
                trigger: bg.parentElement,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });
    });
});