# Convertir Texto a Curvas Script

Este script de Adobe Illustrator convierte todos los textos en un documento a curvas (trazos), lo que es útil para preparar archivos para la impresión o para asegurar que las fuentes no se pierdan.

## Funcionalidad

- **Convertir Textos a Curvas**: Recorre todas las capas y subcapas del documento, convirtiendo todos los cuadros de texto en trazos.
- **Notificación de Finalización**: Muestra una alerta indicando que todos los textos se han convertido a curvas.

## Instrucciones de Uso

1. **Descargar el Script**

   Descarga el archivo `.jsx` y guárdalo en tu computadora.

2. **Ejecutar el Script en Adobe Illustrator**

   - Abre Adobe Illustrator.
   - Ve a `Archivo` > `Secuencias de comandos` > `Otro script...`.
   - Selecciona el archivo `.jsx` que descargaste.

3. **Convertir Textos a Curvas**

   - El script recorrerá todas las capas y subcapas del documento, convirtiendo todos los cuadros de texto en trazos.
   - Al finalizar, se mostrará una alerta indicando que todos los textos se han convertido a curvas.

## Requisitos

- Adobe Illustrator

## Detalles del Script

- Recorre todas las capas del documento activo.
- Dentro de cada capa, procesa todos los elementos de página (page items).
- Convierte los cuadros de texto (`TextFrame`) a curvas.
- Procesa recursivamente los grupos (`GroupItem`) y sus elementos.
- Muestra una alerta una vez que todos los textos han sido convertidos a curvas.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## Contribuciones

Las contribuciones son bienvenidas. Si tienes alguna sugerencia o mejora, por favor crea un `issue` o envía un `pull request`.

## Autor

Alvaro Alexander Simbaqueva
