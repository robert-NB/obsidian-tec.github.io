# Portfolio de Robert Bonmatí Muñoz

Sitio estático multipágina en español. Funciona sin instalación ni compilación.

## Vista previa local

Abre `index.html` en el navegador o ejecuta lo siguiente desde la raíz con Python 3.

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Abre [la vista previa local](http://127.0.0.1:8000/) y usa Ctrl+C para detener el servidor.

## Dónde editar cada cosa

- `index.html` contiene la presentación, el retrato, la biografía y el enlace al CV. Sustituye `cv-robert-bonmati.pdf` conservando su nombre para actualizar la descarga. La imagen está en `assets/portrait.jpg`. Si la cambias, revisa el texto alternativo, sus dimensiones y el encuadre en `.portrait-image img`.
- `proyectos.html` contiene los proyectos. Cada elemento de `.project-list` incluye título, enlace, año, descripción y tecnologías.
- `trayectoria.html` contiene la experiencia profesional.
- `stack.html` contiene las tecnologías y sus filtros. Las claves de `data-categories` se separan por espacios y coinciden con el `data-filter` de cada botón. Una tecnología puede pertenecer a varias categorías. Cada tarjeta incluye su icono decorativo y el color de marca en `--tech-color`.
- `contacto.html` contiene el correo y los enlaces sociales.
- Las cinco páginas incluyen la misma navegación. Si cambias el menú, actualízalo en todas y marca el enlace correspondiente con `aria-current="page"`.

## Estilos e interacciones

`css/styles.css` reúne la paleta y los estilos compartidos. La clase de cada página, por ejemplo `.page-stack`, define su acento. Los selectores `data-palette` definen los colores alternativos del retrato.

`js/home.js` gestiona el cambio de color, la inclinación con puntero preciso y las redirecciones desde las antiguas anclas. Con movimiento reducido, el selector sigue funcionando y el retrato permanece estático. `js/site.js` anima la primera entrada de proyectos, experiencia y biografía al desplazarse y redirige el antiguo enlace a «Sobre mí». `js/stack.js` aplica los filtros, anima la cuadrícula y anuncia el número de resultados. Sin JavaScript se muestran el retrato estático y la lista completa de tecnologías.

## GitHub Pages

Publica los archivos desde la raíz de la rama configurada como origen de Pages. Las rutas relativas permiten servir el sitio bajo el subdirectorio del repositorio. Mantén los nombres de las páginas si ya se han compartido sus enlaces.

La navegación se pliega hasta 54 rem. El botón Menú abre los enlaces y Escape lo cierra y devuelve el foco al botón. Sin JavaScript, los enlaces siguen visibles.

Después de editar, comprueba la portada en móvil vertical y horizontal, el menú con teclado, las columnas del stack, el movimiento reducido y la descarga del CV.
