#target illustrator

// Define la ruta de exportación fija
var fixedExportFolderPath = "C:\\Users\\csarmiento\\Downloads\\IMAGENES_FOLLETO"; // Cambia esta ruta según tus necesidades

var exportFolder = new Folder(fixedExportFolderPath);

if (!exportFolder.exists) {
    alert("La carpeta de destino especificada no existe. Verifica la ruta: " + fixedExportFolderPath);
} else {
    var doc = app.activeDocument;

    // Verifica si hay al menos una capa en el documento
    if (doc.layers.length === 0) {
        alert("No hay ninguna capa en el documento.");
    } else {
        // Obtener las capas seleccionadas
        var selectedLayers = getSelectedLayers(doc);

        if (selectedLayers.length === 0) {
            alert("No hay capas seleccionadas.");
        } else {
            // Iterar a través de las capas seleccionadas
            for (var i = 0; i < selectedLayers.length; i++) {
                var layer = selectedLayers[i];

                // Asegúrate de que la capa esté visible y desbloqueada
                if (layer.visible && !layer.locked) {
                    // Oculta todas las capas excepto la actual
                    hideOtherLayers(doc.layers, layer);

                    // Exporta la capa seleccionada
                    var exportOptions = new ExportOptionsPNG24(); // Opciones de exportación
                    var exportFile = new File(exportFolder.fsName + "/" + layer.name.replace(/[^a-z0-9]/gi, '_').toLowerCase() + ".png"); // Ruta y nombre del archivo de exportación
                    doc.exportFile(exportFile, ExportType.PNG24, exportOptions); // Exporta la capa seleccionada
                    alert("La capa '" + layer.name + "' ha sido exportada correctamente a la ruta: " + exportFolder.fsName);

                    // Restaura la visibilidad de las capas
                    restoreLayersVisibility(doc.layers);
                }
            }
        }
    }
}

// Función para obtener las capas seleccionadas
function getSelectedLayers(doc) {
    var selectedLayers = [];
    for (var i = 0; i < doc.layers.length; i++) {
        var layer = doc.layers[i];
        // Verifica si hay objetos seleccionados en la capa
        if (layer.visible && !layer.locked && hasSelectedObjects(layer)) {
            selectedLayers.push(layer);
        }
    }
    return selectedLayers;
}

// Función para verificar si hay objetos seleccionados en la capa
function hasSelectedObjects(layer) {
    for (var j = 0; j < layer.pageItems.length; j++) {
        if (layer.pageItems[j].selected) {
            return true;
        }
    }
    return false;
}

// Función para ocultar todas las capas excepto la seleccionada
function hideOtherLayers(layers, selectedLayer) {
    for (var i = 0; i < layers.length; i++) {
        if (layers[i] != selectedLayer && layers[i].visible) {
            layers[i].visible = false;
        }
    }
}

// Función para restaurar la visibilidad de las capas
function restoreLayersVisibility(layers) {
    for (var i = 0; i < layers.length; i++) {
        layers[i].visible = true;
    }
}
