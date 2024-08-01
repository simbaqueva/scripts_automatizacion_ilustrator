#target illustrator

// Función para exportar la selección como un archivo PNG
function exportSelectionAsPNG() {
    var doc = app.activeDocument;
    var selection = doc.selection;

    if (selection.length > 0) {
        var exportOptions = new ExportOptionsPNG24();
        var exportFolderPath = "X:/Publicidad1/Firma 2021/FIRMAS 2024"; // Ruta de la carpeta de destino

        var fileName = prompt("Por favor, ingrese el nombre del archivo:", "");
        
        if (fileName) {
            // Normalizar el nombre del archivo
            var normalizedFileName = normalizeFileName(fileName);
            var filePath = exportFolderPath + "/" + normalizedFileName + ".png";
            var file = new File(filePath);
            
            if (file.exists) {
                var confirmReplace = confirm("El archivo ya existe en esta ubicación. ¿Desea reemplazarlo?");
                if (!confirmReplace) {
                    return; // Cancela la operación si el usuario elige no reemplazar el archivo
                }
            }
            
            exportOptions.artBoardClipping = true;
            doc.exportFile(file, ExportType.PNG24, exportOptions);
            
            alert("La selección se ha exportado como PNG con éxito en la ruta: " + filePath);
        } else {
            alert("No se proporcionó un nombre de archivo válido.");
        }
    } else {
        alert("No hay nada seleccionado en el documento.");
    }
}

// Función para eliminar caracteres no válidos del nombre del archivo y normalizarlo
function normalizeFileName(name) {
    // Reemplaza caracteres no válidos para nombres de archivo y elimina guiones al final
    var invalidChars = /[^a-zA-Z0-9\s]/g;
    name = name.replace(invalidChars, ''); // Eliminar caracteres no válidos
    name = name.replace(/\s+/g, ' '); // Reemplazar múltiples espacios por uno solo
    name = name.replace(/^\s+|\s+$/g, ''); // Eliminar espacios al principio y al final
    name = name.replace(/\s+/g, '-'); // Reemplazar espacios por guiones
    return name;
}

// Ejecutar la función para exportar la selección como PNG
exportSelectionAsPNG();
