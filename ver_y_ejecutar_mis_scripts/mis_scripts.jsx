#target illustrator

// Función para obtener la lista de scripts en la carpeta proporcionada
function getScriptFiles(customPath) {
    var scriptsFolder = new Folder(customPath);
    if (!scriptsFolder.exists) {
        alert("La carpeta especificada no existe.");
        return [];
    }
    var files = scriptsFolder.getFiles();
    var scriptFiles = [];
    for (var i = 0; i < files.length; i++) {
        if (files[i] instanceof File && files[i].name.toLowerCase().indexOf(".jsx") !== -1) {
            scriptFiles.push(files[i]);
        }
    }
    return scriptFiles;
}

// Función para mostrar la lista de scripts y ejecutar el seleccionado
function runScript() {
    // Especifica aquí la ruta de tu carpeta de scripts, asegurándote de usar barras inclinadas o dobles barras invertidas
    var customPath = "C:/Users/csarmiento/Downloads/scripts/ilustrator";  // O "C:\\Users\\csarmiento\\Downloads\\scripts\\ilustrator"

    var scriptFiles = getScriptFiles(customPath);

    if (scriptFiles.length === 0) {
        alert("No se encontraron scripts en la carpeta especificada.");
        return;
    }

    var window = new Window("dialog", "Ejecutar script");
    window.alwaysInFront = true; // Set the window to be always in front

    var listBox = window.add("listbox", [20, 20, 380, 380], undefined, { multiselect: false });

    for (var i = 0; i < scriptFiles.length; i++) {
        listBox.add("item", scriptFiles[i].name);
    }

    var runButton = window.add("button", undefined, "Ejecutar");
    var cancelButton = window.add("button", undefined, "Cancelar");

    runButton.onClick = function() {
        if (listBox.selection) {
            var selectedScript = scriptFiles[listBox.selection.index];
            $.evalFile(selectedScript.fsName);
        }
        window.close();
    };
    cancelButton.onClick = function() {
        window.close();
    };

    window.center();
    window.show();
}

runScript();