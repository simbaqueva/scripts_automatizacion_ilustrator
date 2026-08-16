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
