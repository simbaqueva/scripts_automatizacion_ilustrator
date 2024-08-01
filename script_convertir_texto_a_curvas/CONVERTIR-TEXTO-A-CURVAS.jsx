#target illustrator

// Función para convertir todos los textos a curvas
function convertTextToOutlines() {
    var doc = app.activeDocument;
    var layers = doc.layers;

    for (var i = 0; i < layers.length; i++) {
        processLayer(layers[i]);
    }

    alert("Todos los textos se han convertido a curvas.");
}

// Función para procesar cada capa y sus subcapas
function processLayer(layer) {
    var pageItems = layer.pageItems;

    for (var j = 0; j < pageItems.length; j++) {
        var item = pageItems[j];

        if (item.typename === "TextFrame") {
            item.createOutline();
        } else if (item.typename === "GroupItem") {
            processGroup(item);
        }
    }
}

// Función para procesar los elementos dentro de un grupo
function processGroup(group) {
    var groupItems = group.pageItems;

    for (var k = 0; k < groupItems.length; k++) {
        var item = groupItems[k];

        if (item.typename === "TextFrame") {
            item.createOutline();
        } else if (item.typename === "GroupItem") {
            processGroup(item);
        }
    }
}

// Ejecutar la función principal
convertTextToOutlines();
