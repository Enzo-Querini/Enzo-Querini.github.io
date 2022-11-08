let a, ffd, ffe, fuerzaNeta, fx, masa, newtons, grados, mat, material, pesoy, friccionDinamica, friccionEstatica;
const gravedad = 9.8;
let checkInclinacion = document.getElementById("checkInclinacion");
let checkFriccion = document.getElementById("checkFriccion");
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

}