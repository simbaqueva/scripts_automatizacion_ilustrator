# Ejecutar Scripts en Adobe Illustrator

Este script de Adobe Illustrator permite ejecutar otros scripts `.jsx` almacenados en una carpeta especificada por el usuario. Es útil para gestionar y ejecutar scripts personalizados desde una ubicación centralizada.

## Instrucciones de Uso

1. **Configurar la Ruta de la Carpeta de Scripts**

   Abre el archivo del script en Adobe Illustrator y especifica la ruta de tu carpeta de scripts en la variable `customPath`. Asegúrate de usar barras inclinadas (`/`) o dobles barras invertidas (`\\`) en la ruta.

   ```javascript
   var customPath = "C:/Users/csarmiento/Downloads/scripts/ilustrator"; // O "C:\\Users\\csarmiento\\Downloads\\scripts\\ilustrator"
   
2. Ejecutar el Script

Ejecuta el script en Adobe Illustrator. Aparecerá una ventana de diálogo con una lista de todos los scripts .jsx en la carpeta especificada.

Seleccionar y Ejecutar un Script

Selecciona el script que deseas ejecutar de la lista y haz clic en "Ejecutar". Si deseas cancelar la operación, haz clic en "Cancelar".

Requisitos
Adobe Illustrator
Scripts en formato .jsx almacenados en la carpeta especificada
Funcionalidad
Obtener la Lista de Scripts

La función getScriptFiles(customPath) obtiene todos los archivos .jsx en la carpeta especificada y los retorna en un arreglo.

Mostrar la Lista de Scripts y Ejecutar el Seleccionado

La función runScript() muestra una ventana de diálogo con la lista de scripts obtenidos. Permite al usuario seleccionar y ejecutar un script de la lista.

Advertencias
Asegúrate de que la ruta de la carpeta especificada es correcta.
La carpeta debe contener scripts en formato .jsx.
Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.