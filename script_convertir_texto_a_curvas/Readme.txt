# Convertir Texto a Curvas Script

Este script de Adobe Illustrator convierte todos los textos en un documento a curvas (trazos), lo que es útil para preparar archivos para la impresión o para asegurar que las fuentes no se pierdan.

## Requisitos

- Adobe Illustrator

## Instrucciones de uso

1. **Descarga el script**: Descarga el archivo `.jsx` y guárdalo en tu computadora.

2. **Ejecuta el script en Adobe Illustrator**:
    - Abre Adobe Illustrator.
    - Ve a `Archivo` > `Secuencias de comandos` > `Otro script...`.
    - Selecciona el archivo `.jsx` que descargaste.

3. **Convertir textos a curvas**:
    - El script recorrerá todas las capas y subcapas del documento, convirtiendo todos los cuadros de texto en trazos.
    - Al finalizar, se mostrará una alerta indicando que todos los textos se han convertido a curvas.

## Detalles del Script

El script realiza las siguientes acciones:

1. Recorre todas las capas del documento activo.
2. Dentro de cada capa, procesa todos los elementos de página (page items).
3. Si el elemento es un cuadro de texto (`TextFrame`), lo convierte a curvas.
4. Si el elemento es un grupo (`GroupItem`), procesa recursivamente todos los elementos del grupo.
5. Muestra una alerta una vez que todos los textos han sido convertidos a curvas.

## Contribuciones

Las contribuciones son bienvenidas. Si tienes alguna sugerencia o mejora, por favor crea un `issue` o envía un `pull request`.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.
