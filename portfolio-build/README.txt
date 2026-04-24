=================================================================
  Robert Bonmatí — Portfolio (build de producción)
=================================================================

Configurado para GitHub Pages en:
  https://robert-nb.github.io/obsidian-tec.github.io/

-----------------------------------------------------------------
1) PROBAR EN LOCAL (vista previa del build)
-----------------------------------------------------------------
Desde esta carpeta ejecuta:
  npx serve .
Luego abre:  http://localhost:3000/obsidian-tec.github.io/

(Nota: NO abras los .html con doble clic; necesita servidor.)

-----------------------------------------------------------------
2) DESPLEGAR EN GITHUB PAGES (manual)
-----------------------------------------------------------------
a) Sube TODO el contenido de esta carpeta a la raíz del repo
   "obsidian-tec.github.io" en la rama "main".
b) En el repo: Settings > Pages
     Source: Deploy from a branch
     Branch: main  /  Folder: / (root)
c) Espera 1-2 min y abre:
   https://robert-nb.github.io/obsidian-tec.github.io/

-----------------------------------------------------------------
3) DESPLEGAR EN OTRO DOMINIO (raíz, no subcarpeta)
-----------------------------------------------------------------
Si lo subes a la raíz de un dominio (p.ej. www.tudominio.com),
debes recompilar el código fuente con base "/":
  - Edita vite.config.ts: base: "/"
  - Edita public/404.html y src/App.tsx para quitar el prefijo
  - Ejecuta:  npm run build
