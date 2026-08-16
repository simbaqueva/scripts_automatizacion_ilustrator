# Script de Illustrator: Colocar Archivos desde Carpeta

Script en ExtendScript (JSX) para Adobe Illustrator que permite seleccionar una carpeta, elegir uno o varios archivos de imagen/vector con vista previa, y colocarlos automáticamente en la mesa de trabajo activa del documento abierto.

---

## Índice

1. [Documentación de Usuario](#documentación-de-usuario-para-clientes-y-usuarios-finales)
   - [¿Qué hace este script?](#qué-hace-este-script)
   - [Requisitos previos](#requisitos-previos)
   - [Instalación](#instalación)
   - [Cómo usarlo](#cómo-usarlo-paso-a-paso)
   - [Formatos compatibles](#formatos-compatibles)
   - [Preguntas frecuentes](#preguntas-frecuentes)
   - [Solución de problemas](#solución-de-problemas-para-el-usuario)
2. [Documentación Técnica](#documentación-técnica-para-desarrolladores-y-mantenedores)
   - [Arquitectura general](#arquitectura-general)
   - [Estructura del código](#estructura-del-código)
   - [Referencia de funciones](#referencia-de-funciones)
   - [Decisiones de diseño y bugs corregidos](#decisiones-de-diseño-y-bugs-corregidos)
   - [Limitaciones conocidas](#limitaciones-conocidas)
   - [Posibles mejoras futuras](#posibles-mejoras-futuras)
   - [Código fuente completo](#código-fuente-completo)

---

# Documentación de Usuario (Para Clientes y Usuarios Finales)

## ¿Qué hace este script?

Este script te permite elegir una carpeta de tu computadora, ver la lista de imágenes y archivos vectoriales que contiene, previsualizarlos, seleccionar uno o varios, y colocarlos automáticamente centrados en la mesa de trabajo (artboard) que tengas activa en Illustrator — sin necesidad de usar el menú **Archivo > Colocar** manualmente para cada uno.

## Requisitos previos

- Tener **Adobe Illustrator** abierto.
- Tener **un documento abierto** con al menos una mesa de trabajo (el script no funciona si no hay ningún documento activo).
- Tener el archivo del script guardado con extensión **`.jsx`**.

## Instalación

1. Guardá el código como un archivo de texto con extensión `.jsx`, por ejemplo: `ColocarArchivos.jsx`.
2. Podés ejecutarlo de dos formas:
   - **Uso ocasional:** En Illustrator, andá a `Archivo > Scripts > Otro script...` y seleccioná el archivo `.jsx` cada vez que lo necesites.
   - **Uso frecuente:** Copiá el archivo dentro de la carpeta de scripts de Illustrator para que aparezca directo en el menú `Archivo > Scripts`:
     - **Windows:** `C:\Program Files\Adobe\Adobe Illustrator [versión]\Presets\es_ES\Scripts`
     - Después de copiarlo ahí, **reiniciá Illustrator** para que el script aparezca en el menú.

## Cómo usarlo (paso a paso)

1. Abrí (o creá) un documento en Illustrator y asegurate de que la mesa de trabajo donde querés colocar los archivos esté activa.
2. Ejecutá el script (`Archivo > Scripts > ColocarArchivos`, o el método que hayas elegido en la instalación).
3. Se abrirá un explorador de carpetas nativo de Windows: **elegí la carpeta** donde están tus imágenes o vectores.
4. Aparecerá una ventana con dos columnas:
   - **Izquierda:** lista de todos los archivos compatibles encontrados en la carpeta.
   - **Derecha:** vista previa del archivo resaltado.
5. Para **seleccionar un solo archivo**, hacé clic sobre él.
6. Para **seleccionar varios archivos**:
   - Mantené `Ctrl` presionado y hacé clic en cada uno que quieras agregar.
   - O mantené `Shift` presionado y hacé clic en el primero y el último de un rango para seleccionar todo lo que está en el medio.
7. Al seleccionar un archivo de imagen (JPG, PNG, GIF, TIF, BMP, PSD), vas a ver su **miniatura** en el panel derecho. Si es un archivo vectorial (AI, EPS, SVG, PDF), vas a ver el nombre y el tipo de archivo, sin miniatura (ver [Formatos compatibles](#formatos-compatibles)).
8. Cuando termines de seleccionar, hacé clic en **"Colocar"**.
9. Los archivos elegidos se van a insertar automáticamente en el centro de la mesa de trabajo activa. Si elegiste varios, se acomodan en una pequeña cascada (uno superpuesto al otro con un leve desplazamiento) para que puedas separarlos fácilmente después.
10. Si te arrepentís, podés hacer clic en **"Cancelar"** en cualquier momento y no se va a colocar nada.

## Formatos compatibles

| Categoría | Formatos | ¿Tiene vista previa? |
|---|---|---|
| Imágenes (raster) | JPG, JPEG, PNG, GIF, TIF, TIFF, BMP, PSD | ✅ Sí, miniatura real |
| Vectores | AI, EPS, SVG, SVGZ, PDF | ⚠️ No — se muestra solo el nombre y tipo de archivo |

> Los archivos que no correspondan a ninguno de estos formatos (documentos de texto, videos, carpetas, etc.) **no aparecen** en la lista.

## Preguntas frecuentes

**¿Puedo elegir archivos de distintas carpetas en una misma ejecución?**
No. Cada vez que ejecutás el script elegís una sola carpeta. Si necesitás archivos de dos carpetas distintas, ejecutá el script dos veces.

**¿Los archivos quedan vinculados (linked) o incrustados (embedded)?**
Quedan **vinculados**, igual que con `Archivo > Colocar` normal de Illustrator. Si movés o borrás el archivo original de tu computadora, el vínculo se rompe.

**¿Por qué no veo la miniatura de mi archivo SVG o EPS?**
Es una limitación de Illustrator: el cuadro de diálogo de scripts no puede generar automáticamente una miniatura de archivos vectoriales sin abrirlos primero. Vas a ver el nombre y la extensión igualmente, así podés identificarlo.

**¿Qué pasa si la carpeta que elijo no tiene ningún archivo compatible?**
El script te va a avisar con un mensaje ("No se encontraron imágenes ni vectores compatibles en esta carpeta") y no va a pasar nada más.

## Solución de problemas (para el usuario)

| Problema | Causa probable | Qué hacer |
|---|---|---|
| Me dice "No hay ningún documento abierto" | No tenés ningún archivo `.ai` abierto | Abrí o creá un documento antes de ejecutar el script |
| No aparece ningún archivo en la lista | La carpeta elegida no tiene imágenes ni vectores compatibles, o están dentro de subcarpetas | El script no busca dentro de subcarpetas; elegí la carpeta exacta donde están los archivos |
| Los archivos quedan superpuestos casi exactamente | Colocaste varios archivos a la vez | Es normal — el script los escalona levemente; seleccionalos y movelos manualmente con las flechas del teclado o el mouse |
| Me aparece un mensaje "No se pudo colocar: [archivo]" | El archivo puede estar dañado, movido, o Illustrator no tiene permisos para leerlo | Verificá que el archivo abra normalmente por fuera de Illustrator |

---

# Documentación Técnica (Para Desarrolladores y Mantenedores)

## Arquitectura general

El script es un único archivo `.jsx` ejecutado dentro del motor **ExtendScript** de Adobe Illustrator (JavaScript ES3, sin las APIs de navegador ni funciones modernas de ES6+). Se divide en cuatro bloques funcionales:

1. **Configuración** — listas de extensiones soportadas.
2. **Utilidades** — funciones puras de apoyo (extensión de archivo, corrección de rutas, filtros).
3. **UI (ScriptUI)** — diálogo modal con listbox de selección múltiple y panel de vista previa.
4. **Lógica de colocación** — inserción de los `PlacedItem` en el documento activo vía la API de Illustrator (`app.activeDocument`).

No hay dependencias externas ni llamadas de red. Todo corre de forma síncrona y local.

## Estructura del código

```
IMAGE_EXT, VECTOR_EXT, ALL_EXT     → constantes de configuración
getExtension(name)                  → utilidad
fixFile(file)                       → utilidad (corrección de encoding)
isSupportedFile(file)               → utilidad (filtro)
indexOfExt(arr, val)                → utilidad (helper de búsqueda, ES3-safe)
isRaster(file)                      → utilidad (clasificación)
showFileList(files)                 → UI: construye y muestra el diálogo, retorna File[] seleccionados
placeFilesOnArtboard(files)         → lógica: coloca los archivos en la mesa de trabajo activa
placeFilesFromFolder()              → función principal / punto de entrada
placeFilesFromFolder();             → invocación (se ejecuta al correr el script)
```

## Referencia de funciones

### `getExtension(name)`
Recibe un `String` (nombre de archivo) y devuelve la extensión en minúsculas sin el punto. Si no hay extensión, devuelve `""`.

### `fixFile(file)`
**Problema que resuelve:** el objeto `Folder.getFiles()` de ExtendScript en Windows puede devolver objetos `File` cuya propiedad `.fsName` / `.name` está **codificada en URI** (los espacios se representan como `%20`, tildes y otros caracteres especiales también se codifican). Esto ocurre especialmente cuando la ruta contiene caracteres no-ASCII o espacios, dependiendo de la versión de Illustrator/SO.

**Comportamiento:**
```javascript
function fixFile(file) {
    var decodedPath = decodeURI(file.fsName);
    var fixed = new File(decodedPath);
    return fixed.exists ? fixed : file;
}
```
Decodifica la ruta con `decodeURI()`, construye un nuevo `File` con la ruta decodificada, y solo lo usa si ese archivo **efectivamente existe** en disco (`fixed.exists`). Si no existe (por ejemplo, si el archivo original no tenía codificación y decodificarlo generó una ruta inválida), hace fallback al objeto original. Esto lo hace seguro de aplicar sobre cualquier archivo, esté o no codificado.

### `isSupportedFile(file)`
Filtra: retorna `true` solo si `file` es instancia de `File` (no `Folder`) y su extensión está en `ALL_EXT`.

### `indexOfExt(arr, val)`
Reimplementación manual de `Array.indexOf()`. Se usa en vez del método nativo porque **ExtendScript (ES3) no garantiza soporte de `Array.prototype.indexOf`** en todas las versiones del motor de Illustrator — usar la versión manual evita errores de compatibilidad.

### `isRaster(file)`
Retorna `true` si la extensión del archivo pertenece a `IMAGE_EXT` (formatos con vista previa nativa soportada por el control `image` de ScriptUI).

### `showFileList(files)`
Construye el diálogo (`Window("dialog", ...)`) con:
- Un `listbox` con `multiselect: true`, poblado únicamente con los archivos que pasan `isSupportedFile()`, ya procesados por `fixFile()`.
- Un array paralelo `validFiles` que mantiene **correspondencia 1 a 1 por índice** con los ítems del listbox — esto es crítico, ver [bugs corregidos](#decisiones-de-diseño-y-bugs-corregidos).
- Un panel de vista previa (`image` control) y un `statictext` para mensajes/fallback.
- Callback `listBox.onChange = updatePreview` que actualiza la vista previa en cada cambio de selección.
- Botones `Colocar` / `Cancelar`, cada uno seteando `selectedFiles` y cerrando la ventana (`win.close()`), lo cual desbloquea la ejecución síncrona y permite que la función retorne.

**Retorno:** `File[]` — array de objetos `File` seleccionados (vacío si se cancela).

**Nota sobre `listBox.selection`:** en ScriptUI, cuando `multiselect: true`, `listBox.selection` puede ser `null` (nada seleccionado), un objeto único (`ListItem`), o un **array de `ListItem`** si hay más de uno seleccionado. El código verifica el tipo con `sel instanceof Array` para manejar ambos casos.

### `placeFilesOnArtboard(files)`
1. Valida que exista al menos un documento abierto (`app.documents.length`).
2. Obtiene la mesa de trabajo **activa** vía `doc.artboards.getActiveArtboardIndex()` y `doc.artboards[abIndex]`.
3. Calcula el centro de esa mesa de trabajo a partir de `artboardRect` (formato `[left, top, right, bottom]` en el sistema de coordenadas de Illustrator, donde el eje Y crece hacia abajo desde arriba pero los valores de `top`/`bottom` siguen la convención de PostScript — de ahí el cálculo `centerY + (h/2) - offset` al posicionar, en vez de restar).
4. Por cada archivo:
   - Crea un `PlacedItem` vacío con `doc.placedItems.add()`.
   - Le asigna el archivo con `placedItem.file = files[i]` (esto es lo que **coloca/enlaza** el archivo, equivalente a `Archivo > Colocar`, a diferencia de `app.open()` que abriría un documento nuevo).
   - Centra el item usando sus dimensiones reales (`placedItem.width`, `placedItem.height`).
   - Aplica un offset incremental (`offsetStep = 20pt`) para que múltiples archivos colocados a la vez no queden exactamente superpuestos (cascada).
5. Envuelve cada colocación individual en `try/catch` para que un archivo corrupto o inaccesible no interrumpa la colocación del resto del lote.
6. Llama a `app.redraw()` al final para forzar el refresco visual del canvas.

### `placeFilesFromFolder()`
Punto de entrada. Orquesta: `Folder.selectDialog()` → `folder.getFiles()` → `showFileList()` → `placeFilesOnArtboard()`. Corta el flujo temprano (`return`) si el usuario cancela en cualquier paso o si la carpeta no tiene archivos.

## Decisiones de diseño y bugs corregidos

Este script es el resultado de iterar sobre una versión inicial con varios problemas. Registro de los principales, para referencia de mantenimiento:

| # | Problema original | Causa raíz | Corrección aplicada |
|---|---|---|---|
| 1 | El script no abría ningún archivo al pegar una ruta | Se usaba `prompt()`, una función de navegador que **no existe en ExtendScript** | Reemplazado por `Folder.selectDialog()`, el selector nativo de carpetas de Illustrator |
| 2 | Se abría un archivo distinto al seleccionado en la lista (cuando había subcarpetas mezcladas) | El índice del `listbox` (que solo mostraba `File`, filtrando `Folder`) se usaba para indexar el array `files` original **sin filtrar**, desalineando los índices | Se introdujo un array paralelo `validFiles`, poblado en el mismo momento y orden que se agregan los ítems al listbox, garantizando correspondencia 1:1 |
| 3 | El botón "Abrir/Colocar" no hacía nada visible | Combinación del bug #2 más falta de manejo de `listBox.selection === null` | Se agregó selección por defecto (`listBox.selection = 0`) y validaciones explícitas |
| 4 | La vista previa nunca cargaba, sin error visible | Rutas devueltas por `Folder.getFiles()` venían **codificadas en URI** (`%20` en vez de espacios), por lo que el `File` construido a partir de esa ruta apuntaba a una ubicación inexistente; la carga fallaba silenciosamente | Función `fixFile()` que decodifica con `decodeURI()` y reconstruye el `File`, verificando `exists` antes de usarlo |
| 5 | `Error 19: Argumento no válido null` en tiempo de ejecución, línea `previewImage.image = null;` | El control `image` de ScriptUI **no acepta `null`** como valor asignable en esta versión/build de Illustrator | Se envolvió la asignación en `try { previewImage.image = null; } catch (e) {}` para que el intento de "limpiar" la vista previa no interrumpa la ejecución |
| 6 | Se abrían documentos nuevos en vez de insertar en el activo | Uso de `app.open(selectedFile)`, que abre el archivo como documento independiente | Reemplazado por `doc.placedItems.add()` + `placedItem.file = ...`, que coloca/enlaza el archivo dentro del documento activo |

## Limitaciones conocidas

- **Sin vista previa para vectores (AI, EPS, SVG, PDF):** el control `image` de ScriptUI solo puede renderizar formatos raster nativos (PNG/JPG/GIF principalmente). Generar una miniatura de un vector requeriría un paso adicional de rasterización (crear documento temporal, colocar, exportar a PNG, cerrar sin guardar), lo cual introduce latencia perceptible (1–3 s) por cada archivo previsualizado. Se optó deliberadamente por **no implementarlo** para mantener la UI responsiva; queda documentado como mejora opcional.
- **No recorre subcarpetas:** `folder.getFiles()` es superficial (no recursivo). Si el usuario necesita archivos anidados, debe seleccionar la subcarpeta específica.
- **Una sola carpeta por ejecución:** no hay forma de combinar archivos de rutas distintas en una misma sesión del diálogo.
- **`fixFile()` es una heurística, no una garantía:** si tanto la ruta codificada como la decodificada apuntan a archivos existentes distintos (caso extremadamente improbable pero no imposible), podría preferir la ruta incorrecta. En la práctica, esto no ha presentado casos de falla.
- **El offset de cascada es fijo (`20pt`):** en colocaciones de muchos archivos (10+), la cascada puede salirse visualmente de la mesa de trabajo. No hay wrap-around ni grilla automática.

## Posibles mejoras futuras

- Vista previa rasterizada bajo demanda para archivos vectoriales (con indicador de carga tipo spinner).
- Checkbox "Incluir subcarpetas" que recorra el árbol de directorios recursivamente.
- Opción de organizar los archivos colocados en grilla en vez de cascada, con espaciado configurable.
- Recordar la última carpeta usada (`Folder.selectDialog` puede recibir una ruta inicial) guardando la preferencia en un archivo `.json` local o en `Folder.userData`.
- Checkbox para elegir entre "vincular" (comportamiento actual) o "incrustar" el archivo colocado (`placedItem.embed()`).

## Código fuente completo

```javascript
// ================== CONFIG ==================
var IMAGE_EXT = ["jpg", "jpeg", "png", "gif", "tif", "tiff", "bmp", "psd"];
var VECTOR_EXT = ["ai", "eps", "svg", "svgz", "pdf"];
var ALL_EXT = IMAGE_EXT.concat(VECTOR_EXT);

// ================== UTILIDADES ==================
function getExtension(name) {
    var dot = name.lastIndexOf(".");
    if (dot === -1) return "";
    return name.substring(dot + 1).toLowerCase();
}

// Corrige archivos cuya ruta viene codificada en URI (%20, etc.)
function fixFile(file) {
    var decodedPath = decodeURI(file.fsName);
    var fixed = new File(decodedPath);
    return fixed.exists ? fixed : file; // si no existe decodificado, usa el original
}

function isSupportedFile(file) {
    if (!(file instanceof File)) return false;
    var ext = getExtension(file.name);
    return (indexOfExt(ALL_EXT, ext) !== -1);
}

function indexOfExt(arr, val) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === val) return i;
    }
    return -1;
}

function isRaster(file) {
    return indexOfExt(IMAGE_EXT, getExtension(file.name)) !== -1;
}

// ================== DIÁLOGO DE SELECCIÓN ==================
function showFileList(files) {
    var win = new Window("dialog", "Seleccionar archivos para colocar");
    win.orientation = "row";

    // --- Columna izquierda: lista ---
    var leftGroup = win.add("group");
    leftGroup.orientation = "column";
    leftGroup.add("statictext", undefined, "Archivos (Ctrl/Shift para varios):");
    var listBox = leftGroup.add("listbox", [0, 0, 320, 380], undefined, { multiselect: true });

    var validFiles = [];
    for (var i = 0; i < files.length; i++) {
        if (isSupportedFile(files[i])) {
            var fixed = fixFile(files[i]);            // corrige la ruta
            var displayName = decodeURI(fixed.name);    // nombre legible
            listBox.add("item", displayName);
            validFiles.push(fixed);
        }
    }

    if (validFiles.length === 0) {
        alert("No se encontraron imágenes ni vectores compatibles en esta carpeta.");
        win.close();
        return null;
    }

    // --- Columna derecha: vista previa ---
    var rightGroup = win.add("panel", [330, 0, 580, 380], "Vista previa");
    rightGroup.orientation = "column";
    rightGroup.alignChildren = "center";
    var previewImage = rightGroup.add("image", [10, 10, 240, 240], undefined);
    var previewLabel = rightGroup.add("statictext", undefined, "", { multiline: true });
    previewLabel.preferredSize.width = 220;

    function updatePreview() {
        try { previewImage.image = null; } catch (e) {}
        previewLabel.text = "";
        if (!listBox.selection) return;

        var sel = listBox.selection;
        var lastIndex = (sel instanceof Array) ? sel[sel.length - 1].index : sel.index;
        var f = validFiles[lastIndex];

        if (isRaster(f)) {
            try {
                if (!f.exists) {
                    previewLabel.text = decodeURI(f.name) + "\n(archivo no encontrado en disco)";
                } else {
                    previewImage.image = f;
                }
            } catch (e) {
                previewLabel.text = decodeURI(f.name) + "\n(no se pudo previsualizar: " + e.message + ")";
            }
        } else {
            previewLabel.text = decodeURI(f.name) + "\n\nArchivo vectorial (" + getExtension(f.name).toUpperCase() + ")\nVista previa no disponible.";
        }
    }

    listBox.onChange = updatePreview;
    listBox.selection = 0;
    updatePreview(); // muestra la vista previa del primero al abrir

    // --- Botones ---
    var buttonGroup = win.add("group");
    buttonGroup.orientation = "row";
    buttonGroup.alignment = "right";
    var okButton = buttonGroup.add("button", undefined, "Colocar");
    var cancelButton = buttonGroup.add("button", undefined, "Cancelar");

    var selectedFiles = [];

    okButton.onClick = function() {
        if (listBox.selection) {
            var sel = listBox.selection;
            if (sel instanceof Array) {
                for (var j = 0; j < sel.length; j++) {
                    selectedFiles.push(validFiles[sel[j].index]);
                }
            } else {
                selectedFiles.push(validFiles[sel.index]);
            }
        }
        win.close();
    };

    cancelButton.onClick = function() {
        selectedFiles = [];
        win.close();
    };

    win.center();
    win.show();
    return selectedFiles;
}

// ================== COLOCAR EN LA MESA DE TRABAJO ==================
function placeFilesOnArtboard(files) {
    if (!app.documents.length) {
        alert("No hay ningún documento abierto en Illustrator.");
        return;
    }

    var doc = app.activeDocument;
    var abIndex = doc.artboards.getActiveArtboardIndex();
    var ab = doc.artboards[abIndex];
    var abRect = ab.artboardRect;
    var centerX = (abRect[0] + abRect[2]) / 2;
    var centerY = (abRect[1] + abRect[3]) / 2;

    var offset = 0;
    var offsetStep = 20;

    for (var i = 0; i < files.length; i++) {
        try {
            var placedItem = doc.placedItems.add();
            placedItem.file = files[i];

            var w = placedItem.width;
            var h = placedItem.height;
            var x = centerX - (w / 2) + offset;
            var y = centerY + (h / 2) - offset;
            placedItem.position = [x, y];

            offset += offsetStep;
        } catch (e) {
            alert("No se pudo colocar: " + decodeURI(files[i].name) + "\n" + e.message);
        }
    }

    app.redraw();
}

// ================== FUNCIÓN PRINCIPAL ==================
function placeFilesFromFolder() {
    var folder = Folder.selectDialog("Selecciona la carpeta con las imágenes/vectores:");
    if (!folder) return;

    var files = folder.getFiles();
    if (!files || files.length === 0) {
        alert("La carpeta no tiene archivos.");
        return;
    }

    var selectedFiles = showFileList(files);
    if (selectedFiles && selectedFiles.length > 0) {
        placeFilesOnArtboard(selectedFiles);
    }
}

placeFilesFromFolder();
```

---

*Documento generado como referencia de instalación, uso y mantenimiento del script `ColocarArchivos.jsx`.*
