document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Validación básica
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !message) {
                alert('Por favor completa todos los campos');
                return;
            }
            
            // Simular envío (en un caso real usarías fetch o AJAX)
            console.log('Formulario enviado:', { name, email, message });
            
            // Mostrar feedback al usuario
            alert('Mensaje enviado con éxito. ¡Gracias por contactarme!');
            contactForm.reset();
            
            // Animación de confirmación
            gsap.fromTo(contactForm, 
                { backgroundColor: 'rgba(149, 87, 177, 0.2)' },
                { 
                    backgroundColor: 'transparent',
                    duration: 2,
                    ease: "power2.out"
                }
            );
        });
    }
    
    // Animaciones GSAP
    gsap.from('.contact-container', {
        scrollTrigger: {
            trigger: '.contact-main',
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out"
    });
    
    // Efecto hover en los métodos de contacto
    const contactMethods = document.querySelectorAll('.contact-method');
    contactMethods.forEach(method => {
        method.addEventListener('mouseenter', () => {
            gsap.to(method, {
                x: 5,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        method.addEventListener('mouseleave', () => {
            gsap.to(method, {
                x: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
});