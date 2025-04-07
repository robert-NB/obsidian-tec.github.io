import { notifier } from './main.js';

// Animación de título hero
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    
    gsap.to(heroTitle, {
        duration: text.length * 0.05,
        text: {
            value: text,
            padSpace: true
        },
        ease: "power2.inOut"
    });
}

// Mostrar proyectos marcados
const bookmarkedGrid = document.getElementById('bookmarked-grid');
const bookmarkedSection = document.querySelector('.bookmarked-projects');

if (bookmarkedGrid) {
    const projects = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('bookmark_')) {
            projects.push(key.replace('bookmark_', ''));
        }
    }
    
    if (projects.length > 0) {
        bookmarkedSection.style.display = 'block';
        
        // Aquí podrías cargar dinámicamente los proyectos marcados
        projects.forEach(projectId => {
            // Esto es un ejemplo - deberías adaptarlo a tus proyectos reales
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.innerHTML = `
                <h3>${projectId.replace('-', ' ')}</h3>
                <p>Proyecto marcado como favorito</p>
                <a href="projects.html#${projectId}" class="project-link">Ver más →</a>
            `;
            bookmarkedGrid.appendChild(projectCard);
        });
    }
}

// Particles Effect
const canvas = document.getElementById('particles-canvas');
if (canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const ctx = canvas.getContext('2d');
    const particles = [];
    const particleCount = window.innerWidth < 768 ? 30 : 100;
    
    // Crear partículas
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 3 + 1,
            speedX: Math.random() * 1 - 0.5,
            speedY: Math.random() * 1 - 0.5,
            color: `rgba(149, 87, 177, ${Math.random() * 0.5 + 0.1})`
        });
    }
    
    // Animación
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(p => {
            p.x += p.speedX;
            p.y += p.speedY;
            
            // Rebotar en los bordes
            if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
            if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
            
            // Dibujar partícula
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
            
            // Conectar partículas cercanas
            particles.forEach(p2 => {
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(149, 87, 177, ${1 - distance/100})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            });
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    // Interacción con el mouse
    canvas.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        particles.forEach(p => {
            const dx = mouseX - p.x;
            const dy = mouseY - p.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
                p.x -= dx * 0.02;
                p.y -= dy * 0.02;
            }
        });
    });
}

// Preloader
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    const progress = document.querySelector('.preloader-progress');
    
    let width = 0;
    const interval = setInterval(() => {
        width += Math.random() * 10;
        progress.style.width = `${width}%`;
        
        if (width >= 100) {
            clearInterval(interval);
            gsap.to(preloader, {
                opacity: 0,
                duration: 0.5,
                onComplete: () => preloader.style.display = 'none'
            });
        }
    }, 100);
});

const noticesContainer = document.getElementById('noticesContainer');

async function fetchNotices() {
    // Cargar el contenido de notices.html
    const response = await fetch('notices.html');
    const text = await response.text();

    // Crear un contenedor temporal para parsear el HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = text;

    // Obtener las noticias de notices.html (ajusta la clase según tu estructura)
    const noticeItems = tempDiv.querySelectorAll('.notice-card');

    // Mostrar solo las dos primeras noticias
    for (let i = 0; i < 2; i++) {
        if (noticeItems[i]) {
            const card = noticeItems[i].cloneNode(true); 
            noticesContainer.appendChild(card);
        }
    }
}

fetchNotices();
