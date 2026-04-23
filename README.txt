====================================================
 PORTFOLIO — Robert Bonmatí Muñoz
 Build de producción listo para desplegar
====================================================

CONTENIDO
---------
- index.html          → entrada principal de la web
- assets/             → JS, CSS e imágenes optimizadas
- cv-robert-bonmati.pdf → tu CV descargable (REEMPLAZAR por el real)
- .htaccess           → config para Apache / cPanel / Hostinger
- _redirects          → config para Netlify / Cloudflare Pages
- netlify.toml        → config alternativa Netlify
- vercel.json         → config para Vercel

----------------------------------------------------
 EJECUTAR EN LOCAL (probar antes de subir)
----------------------------------------------------

OPCIÓN A — Node.js (recomendado):
   npx serve .
   Abre http://localhost:3000

OPCIÓN B — Python 3:
   python -m http.server 8080
   Abre http://localhost:8080

OPCIÓN C — Doble clic en index.html
   Funciona pero algunas rutas internas pueden fallar.

----------------------------------------------------
 SUBIR A TU DOMINIO WEB
----------------------------------------------------

1) HOSTING TRADICIONAL (cPanel, Hostinger, IONOS, SiteGround...)
   - Entra en el File Manager o conecta por FTP (FileZilla).
   - Sube TODO el contenido de esta carpeta a "public_html/"
     (o la carpeta raíz de tu dominio).
   - El archivo .htaccess ya gestiona las rutas SPA.
   - Listo: visita https://tudominio.com

2) NETLIFY
   - https://app.netlify.com → "Add new site" → "Deploy manually"
   - Arrastra esta carpeta entera. Listo.

3) VERCEL
   - https://vercel.com → "Add New" → "Project"
   - Sube esta carpeta o conéctala con GitHub.

4) CLOUDFLARE PAGES / GITHUB PAGES
   - Sube el contenido al repositorio y conecta el servicio.

----------------------------------------------------
 REEMPLAZAR EL CV
----------------------------------------------------
Sustituye el archivo "cv-robert-bonmati.pdf" por tu CV real
manteniendo EXACTAMENTE el mismo nombre.

----------------------------------------------------
 HTTPS / SSL
----------------------------------------------------
La mayoría de hostings activan HTTPS automáticamente
(Let's Encrypt). Si no, actívalo desde el panel de tu hosting.
