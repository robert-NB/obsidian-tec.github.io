const noticesContainer = document.getElementById('noticesContainer');
const loader = document.getElementById('loader');

const feeds = [
    'https://feeds.feedburner.com/TheHackersNews', // Noticias de ciberseguridad
    'https://www.wired.com/feed/category/security/latest/rss/',
    'https://www.technologyreview.com/feed/', // Noticias de MIT Technology Review
    'https://www.cisa.gov/news-events/cybersecurity-advisories', // Noticias de CISA
    'https://rss.artificialintelligence-news.com/', // Noticias de IA
];

async function fetchNews() {
    loader.style.display = 'block';

    for (const feed of feeds) {
        const url = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feed)}`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            data.items.slice(0, 3).forEach(noticia => {
                const card = document.createElement('div');
                card.className = 'notice-card card';  // Se añadió la clase 'card' para animación
                card.innerHTML = `
                    <h2 class="notice-title">${noticia.title}</h2>
                    <p class="notice-description">${noticia.description.slice(0, 150)}...</p>
                    <a class="notice-link" href="${noticia.link}" target="_blank">Leer más →</a>
                `;
                noticesContainer.appendChild(card);
            });

        } catch (error) {
            console.error('Error cargando noticias:', error);
        }
    }

    loader.style.display = 'none';

    // Animación GSAP para las tarjetas de noticias
    gsap.utils.toArray('.notice-card').forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 30,
            duration: 0.6,
            delay: index * 0.15,
            ease: "back.out(1)"
        });
    });
}

fetchNews();
