# Portfolio de Agustín Puebla

Portfolio estático con enfoque en servicios de desarrollo web y perfil backend. Abrir `index.html`; el archivo con el nombre anterior conduce a esa entrada. No requiere instalación ni compilación y también funciona desde un servidor estático.

## Organización

- `index.html`: contenido semántico, servicios, precios y proyectos.
- `css/variables.css`: colores y temas oscuro/claro.
- `css/base.css`: tipografía y estilos generales.
- `css/components.css`: componentes visuales.
- `css/responsive.css`: adaptaciones de pantalla y movimiento reducido.
- `js/theme.js`: preferencia visual antes del primer render.
- `js/navigation.js`: menú accesible y selector de tema.
- `js/animations.js`: aparición progresiva opcional; el contenido es visible sin JavaScript.
- `js/main.js`: selección de paquete y preparación de consulta.
- `assets/icons/favicon.svg`: favicon AP.
- `assets/images/marianestilista/`: 17 capturas reales del sitio, reservas, versión móvil y panel administrativo. Cada imagen tiene dimensiones, texto alternativo y carga diferida; se abre completa en otra pestaña.

## Contacto

El correo de contacto es **agupuebla17@gmail.com**. El formulario prepara una consulta y un enlace `mailto:` con asunto y cuerpo codificados. El visitante abre su aplicación de correo y confirma allí el envío. También puede copiar el mensaje manualmente. No hay un endpoint de envío ni se almacenan los datos del formulario.

## Antes de publicar

1. Confirmar la URL definitiva del portfolio. Incorporar en el head de `index.html` un `link rel="canonical"` y una meta `og:url` con esa URL absoluta HTTPS. Se omiten de momento para no atribuir un dominio inexistente ni confundirlo con el repositorio de CVs.
2. Agregar una imagen social real y su URL absoluta en `og:image`, con `og:image:alt`. Ya están configurados título, descripción, tipo, idioma y favicon.
3. Confirmar URL pública y repositorio de Marian Estilista antes de incorporar botones de demo/código. No se asumió que el repositorio fuera privado.
4. Mantener las capturas en `assets/images/marianestilista/` junto con el resto de los archivos del sitio.
5. Revisar precios y alcance. Hosting y dominio se contratan y pagan por separado.
6. Subir `index.html`, `css/`, `js/` y `assets/` juntos al hosting elegido; no se ha realizado ningún despliegue.

Las fuentes se solicitan a Google Fonts; hay tipografías locales de respaldo si no hay conexión.

## Fuentes de contenido

El detalle de servicios, tecnologías y Marian Estilista proviene del pedido del propietario. El 22/09/2026 se consultó [GitHub PueblaTL](https://github.com/PueblaTL), que muestra los repositorios destacados, y [Sistema GPPS](https://github.com/PainemalBraian/Sistema-GPPS), cuyo README documenta Java, JavaFX, Maven y MySQL. Se seleccionaron tres proyectos complementarios y se omitió el generador de CVs por menor relevancia comercial. LinkedIn no permitió lectura pública; se conservó únicamente el enlace proporcionado. No se añadieron experiencia, métricas ni capturas inventadas.

## Escala visual

El tamaño base es 125% (20px con la configuración habitual del navegador). Anchos, espacios y controles usan rem para acompañar esa escala. Los puntos de adaptación y el menú móvil se ajustaron a la escala ampliada. No se modifica el zoom del navegador.
