// Función para obtener la lista de archivos en una ruta
function getFilesInDirectory(folderPath) {
    var folder = new Folder(folderPath);
    var files = folder.getFiles();
    return files;
}

// Función para mostrar la lista de archivos en un cuadro de diálogo
function showFileList(files) {
    var window = new Window("dialog", "Seleccionar archivo");
    var listBox = window.add("listbox", [20, 20, 580, 380], undefined, { multiselect: false });

    for (var i = 0; i < files.length; i++) {
        if (files[i] instanceof File) {
            listBox.add("item", files[i].name);
        }
    }

    var okButton = window.add("button", undefined, "Abrir");
    var cancelButton = window.add("button", undefined, "Cancelar");

    var selectedIndex = null;
    okButton.onClick = function() {
        if (listBox.selection) {
            selectedIndex = listBox.selection.index + 1;
        }
        window.close();
    };
    cancelButton.onClick = function() {
        window.close();
    };

    window.center();
    window.show();
    return selectedIndex;
}

// Función principal
function openFileFromFolder() {
    // Pedir al usuario la ruta de la carpeta
    var folderPath = prompt("Ingresa la ruta de la carpeta con los archivos a abrir:");
    if (folderPath) {
        // Obtener la lista de archivos en la carpeta
        var files = getFilesInDirectory(folderPath);

        // Mostrar la lista de archivos en un cuadro de diálogo
        var selectedIndex = showFileList(files);

        // Abrir el archivo seleccionado
        if (selectedIndex) {
            var selectedFile = files[selectedIndex - 1];
            if (selectedFile instanceof File) {
                app.open(selectedFile);
            }
        }
    }
}

// Ejecutar la función principal
openFileFromFolder();
