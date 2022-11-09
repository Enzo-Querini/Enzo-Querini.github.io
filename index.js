let a, ffd, ffe, fuerzaNeta, fx, masa, newtons, grados, mat, material, pesoy, friccionDinamica, friccionEstatica;
const gravedad = 9.8;
let checkInclinacion = document.getElementById("checkInclinacion");
let checkFriccion = document.getElementById("checkFriccion");
let friccionSelect = document.getElementById("friccionSelect");
//importante donde se encuentran las variables para no volverlas a inicializar sin necesidad
function calcular(){
    console.log("inicio el calculo")
    masa = parseFloat(document.getElementById("masa").value);
    newtons = parseFloat(document.getElementById("newtons").value);
    //se obtienen los newtons y la masa
    fx = newtons;
    if(checkInclinacion.checked){
        grados = parseFloat(document.getElementById("grados").value);
        if(grados > 0 && grados < 90){ // el valor tiene que estar entre 0 y 90 grados para que el calculo sea correcto
            console.log("grados correctos")
            fx = (fx + ((masa * gravedad) * Math.sin(((grados * Math.PI) / 180))));
            pesoy = ((masa * gravedad) * Math.cos(((grados * Math.PI) / 180)));
            document.getElementById("inclinacionAlert").innerHTML = "";
        }else{
            console.log("grados incorrectos")
            document.getElementById("inclinacionAlert").innerHTML = "el valor tiene que estar entre 0 y 90 grados"; // avisamos al usuario que el valor introducido es incorrecto cambiando el texto dentro del elemento id"inclinacionAlert"
        }
    }
    console.log(checkFriccion.checked)
    if(checkFriccion.checked){
        material = friccionSelect.selectedIndex;
        switch(friccionSelect.selectedIndex){
            case 0:
                friccionEstatica = 0.5;
                friccionDinamica = 0.3;
            break;
            case 1:
                friccionEstatica = 0.03;
                friccionDinamica = 0.02;
            break;
            case 2:
                friccionEstatica = 0.04;
                friccionDinamica = 0.04;
            break;
            case 3:
                friccionEstatica = 1;
                friccionDinamica = 0.8;
            break;
            case 4:
                friccionEstatica = 0.9;
                friccionDinamica = 0.4;
            break;
            case 5:
                friccionEstatica = 0.1;
                friccionDinamica = 0.05;
            break;
            case 6:
                friccionEstatica = 0.5;
                friccionDinamica = 0.4;
            break;
            case 7:
                friccionEstatica = 0.61;
                friccionDinamica = 0.47;
            break;
            case 8:
                friccionEstatica = 0.02;
                friccionDinamica = 0.003;
            break;
            case 9:
                isNaN(parseFloat(document.getElementById("friccionEstatica").value)) ? friccionEstatica = 0 : friccionEstatica = parseFloat(document.getElementById("friccionEstatica").value);                friccionDinamica = parseFloat(document.getElementById("friccionDinamica").value)
                isNaN(parseFloat(document.getElementById("friccionDinamica").value)) ? friccionDinamica = 0 : friccionDinamica = parseFloat(document.getElementById("friccionEstatica").value);                friccionDinamica = parseFloat(document.getElementById("friccionDinamica").value)
            break;
        }
        console.log(friccionEstatica,friccionDinamica)
    }

}