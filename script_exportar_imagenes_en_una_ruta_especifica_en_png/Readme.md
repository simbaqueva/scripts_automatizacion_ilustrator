# Exportar Selección como PNG Script

Este script de Adobe Illustrator exporta la selección actual en el documento como un archivo PNG, solicitando al usuario que ingrese el nombre del archivo y manejando la normalización del nombre.

## Funcionalidad

- **Exportar Selección**: Permite exportar la selección actual en el documento como un archivo PNG.
- **Nombre del Archivo**: Solicita al usuario que ingrese un nombre para el archivo y normaliza el nombre eliminando caracteres no válidos y reemplazando espacios por guiones.
- **Manejo de Archivos**: Verifica si el archivo ya existe y pregunta si se debe reemplazar.
- **Notificación de Finalización**: Muestra una alerta indicando que la exportación fue exitosa.

## Instrucciones de Uso

1. **Descargar el Script**

   Descarga el archivo `.jsx` y guárdalo en tu computadora.

2. **Ejecutar el Script en Adobe Illustrator**

   - Abre Adobe Illustrator.
   - Ve a `Archivo` > `Secuencias de comandos` > `Otro script...`.
   - Selecciona el archivo `.jsx` que descargaste.

3. **Exportar la Selección como PNG**

   - Selecciona los objetos en el documento que deseas exportar.
   - El script solicitará que ingreses un nombre para el archivo.
   - El script normalizará el nombre del archivo eliminando caracteres no válidos y reemplazando espacios por guiones.
   - Si el archivo ya existe, el script te preguntará si deseas reemplazarlo.
   - El archivo PNG se guardará en la ruta especificada en el script (`X:/Publicidad1/Firma 2021/FIRMAS 2024`).
   - Al finalizar, se mostrará una alerta indicando que la exportación fue exitosa.

## Requisitos

- Adobe Illustrator

## Detalles del Script

- Verifica si hay una selección en el documento activo.
- Solicita al usuario que ingrese un nombre para el archivo.
- Normaliza el nombre del archivo eliminando caracteres no válidos y reemplazando espacios por guiones.
- Verifica si el archivo ya existe y, si es así, pregunta si se debe reemplazar.
- Exporta la selección como un archivo PNG utilizando las opciones de exportación especificadas.
- Muestra una alerta una vez que la exportación ha sido completada.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## Contribuciones

Las contribuciones son bienvenidas. Si tienes alguna sugerencia o mejora, por favor crea un `issue` o envía un `pull request`.

## Autor

Alvaro Alexander Simbaqueva
