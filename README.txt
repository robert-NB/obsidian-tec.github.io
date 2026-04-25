PORTFOLIO - BUILD DE PRODUCCION
================================

Este paquete contiene la web ya compilada con rutas RELATIVAS,
por lo que funciona en cualquier ubicacion:
  - Raiz de un dominio (https://tudominio.com/)
  - Subcarpeta de GitHub Pages (https://usuario.github.io/repo/)
  - Apertura en local con un servidor estatico

-------------------------------------------------
1) PROBARLO EN LOCAL
-------------------------------------------------
Desde la carpeta descomprimida:
   npx serve .
Abre la URL que muestra (ej. http://localhost:3000).

Alternativa con Python:
   python -m http.server 8080
Abre http://localhost:8080

-------------------------------------------------
2) SUBIRLO A GITHUB PAGES
-------------------------------------------------
Sube TODO el contenido de esta carpeta (incluido index.html,
assets/, 404.html, favicon.ico, etc.) a la raiz de la rama
que sirva GitHub Pages (normalmente "main" carpeta /root,
o la rama "gh-pages").

En Settings > Pages: Source = Deploy from a branch.

-------------------------------------------------
3) SUBIRLO A UN DOMINIO PROPIO (cPanel/FTP)
-------------------------------------------------
Sube todo el contenido a la carpeta public_html (o equivalente).
