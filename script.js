var UpperLeft = document.getElementById("UpperLeft");
var UpperRight = document.getElementById("UpperRight");
var BottomLeft = document.getElementById("BottomLeft");
var BottomRight = document.getElementById("BottomRight");
var cssResult = document.getElementById("cssResult");

var box = document.getElementById("box-preview");

UpperLeft.onchange = atualizarPreview;
UpperRight.onchange = atualizarPreview;
BottomLeft.onchange = atualizarPreview;
BottomRight.onchange = atualizarPreview;

function atualizarPreview(){
    //validarCampos();

    var propriedade = "border-radius: " + 
    UpperLeft.value + "px " + UpperRight.value + "px " +
    BottomLeft.value + "px " + BottomRight.value + "px;";

    console.log("Propriedade: " + propriedade);

    cssResult.value = propriedade;

    box.style = propriedade;
}

