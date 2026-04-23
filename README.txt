============================================================
  PORTFOLIO ROBERT BONMATÍ — BUILD DE PRODUCCIÓN
============================================================

Este ZIP contiene el sitio ya compilado, listo para subir.

------------------------------------------------------------
  OPCIÓN 1 — GITHUB PAGES (tu caso)
------------------------------------------------------------

Este build está configurado para servirse desde:
  https://robert-nb.github.io/obsidian-tec.github.io/

Pasos:
  1. En GitHub, crea (o usa) el repo: obsidian-tec.github.io
  2. Sube TODO el contenido de esta carpeta a la raíz del repo
     en la rama "main" (o "gh-pages").
  3. En el repo: Settings → Pages
       - Source: "Deploy from a branch"
       - Branch: main  /  (root)
       - Guardar.
  4. Espera 1-2 min y abre la URL de arriba.

IMPORTANTE: el archivo 404.html DEBE estar junto a index.html.
Sirve para que las rutas internas funcionen al recargar.

------------------------------------------------------------
  OPCIÓN 2 — DOMINIO PROPIO (Apache / cPanel / Hostinger…)
------------------------------------------------------------

Si vas a usar un dominio propio en la RAÍZ (ej. midominio.com):

  1. Antes de compilar, edita vite.config.ts y pon:
        base: "/"
     Luego ejecuta:  npm run build
     (Si subes este ZIP tal cual a un dominio raíz NO cargará,
      porque está compilado con base /obsidian-tec.github.io/.)

  2. Sube el contenido a public_html/ (o www/).
  3. El archivo .htaccess incluido se encarga del routing.

------------------------------------------------------------
  OPCIÓN 3 — PROBARLO EN LOCAL
------------------------------------------------------------

Necesitas Node.js instalado.

  npx serve .
       → abre http://localhost:3000/obsidian-tec.github.io/

  o con Python:
  python -m http.server 8080
       → abre http://localhost:8080/obsidian-tec.github.io/

------------------------------------------------------------
  CV
------------------------------------------------------------

Reemplaza el archivo cv-robert-bonmati.pdf por el tuyo
(mismo nombre) para que el botón "Descargar CV" funcione.

============================================================
