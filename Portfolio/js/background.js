document.addEventListener('DOMContentLoaded', () => {
    const fondo = document.querySelector('.fondo-interactivo');
    const particleCount = window.innerWidth < 768 ? 20 : 50;
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particula');
        
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        const size = Math.random() * 10 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        particle.style.opacity = Math.random() * 0.5 + 0.1;
        
        fondo.appendChild(particle);
    }
    
    // Mouse interaction
    document.addEventListener('mousemove', (e) => {
        const particles = document.querySelectorAll('.particula');
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        particles.forEach(particle => {
            const particleX = particle.offsetLeft + particle.offsetWidth / 2;
            const particleY = particle.offsetTop + particle.offsetHeight / 2;
            const distance = Math.sqrt(
                Math.pow(mouseX - particleX, 2) + 
                Math.pow(mouseY - particleY, 2)
            );
            
            if (distance < 150) {
                const angle = Math.atan2(mouseY - particleY, mouseX - particleX);
                const newX = particleX - Math.cos(angle) * 20;
                const newY = particleY - Math.sin(angle) * 20;
                
                particle.style.transform = `translate(${newX - particleX}px, ${newY - particleY}px)`;
            } else {
                particle.style.transform = 'translate(0, 0)';
            }
        });
    });
});