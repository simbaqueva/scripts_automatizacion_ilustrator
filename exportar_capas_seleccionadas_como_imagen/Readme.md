# Exportador de Capas de Illustrator

Este script de Adobe Illustrator permite exportar capas seleccionadas como archivos PNG. Es útil para diseñadores que necesitan exportar múltiples capas de un archivo de Illustrator sin tener que ocultar y mostrar capas manualmente.

## Características

- Exporta solo las capas visibles y desbloqueadas que tienen objetos seleccionados.
- Guarda los archivos PNG en una carpeta específica.
- Restaura la visibilidad de todas las capas después de la exportación.

## Requisitos

- Adobe Illustrator (versión compatible con scripts de JavaScript).
- Acceso a la carpeta de destino especificada en el script.

## Instrucciones de Uso

1. Abre Adobe Illustrator y carga tu archivo.
2. Selecciona los objetos dentro de las capas que deseas exportar.
3. Abre el panel de Scripts en Illustrator (Archivo > Scripts > Otro script...).
4. Copia y pega el código en un archivo de texto y guárdalo con la extensión `.jsx`.
5. Ejecuta el script desde el panel de Scripts.

## Personalización

Puedes cambiar la ruta de exportación modificando la variable `fixedExportFolderPath` en el código. Asegúrate de que la carpeta exista antes de ejecutar el script.

```javascript
var fixedExportFolderPath = "C:\\Users\\csarmiento\\Downloads\\IMAGENES_FOLLETO"; // Cambia esta ruta según tus necesidades
