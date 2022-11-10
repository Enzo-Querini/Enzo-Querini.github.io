let a, ffd, ffe, fuerzaNeta, fx, masa, newtons, grados, mat, material, pesoy, friccionDinamica, friccionEstatica, selector;
const gravedad = 9.8;
//procedemos a relacionar los elementos html con el js
let checkInclinacion = document.getElementById("checkInclinacion");
let contenedorInclinacion = document.getElementById("contenedorInclinacion");
let checkFriccion = document.getElementById("checkFriccion");
let contenedorFriccionSelect = document.getElementById("contenedorFriccionSelect");
let friccionSelect = document.getElementById("friccionSelect");
const contenedorCoeficientes = document.getElementById("contenedorCoeficientes");
//importante donde se encuentran las variables para no volverlas a inicializar sin necesidad
gradosLoader();
friccionSelectLoader();
calcular();
function calcular(){
    selector = true;
    document.getElementById("result").innerHTML = ""
    masa = parseFloat(document.getElementById("masa").value);
    isNaN(parseFloat(document.getElementById("masa").value)) ? masa = 0 : masa = parseFloat(document.getElementById("masa").value);
    isNaN(parseFloat(document.getElementById("newtons").value)) ? newtons = 0 : newtons = parseFloat(document.getElementById("newtons").value);
    //se obtienen los newtons y la masa
    fx = newtons;
    pesoy = masa * gravedad;
    if(checkInclinacion.checked){
        grados = parseFloat(document.getElementById("grados").value);
        if(grados > 0 && grados < 90){ // el valor tiene que estar entre 0 y 90 grados para que el calculo sea correcto
            console.log("grados correctos")
            fx = (fx + ((masa * gravedad) * Math.sin(((grados * Math.PI) / 180))));
            pesoy = ((masa * gravedad) * Math.cos(((grados * Math.PI) / 180)));
            document.getElementById("inclinacionAlert").innerHTML = "";
        }else if(isNaN(grados) == false){
            document.getElementById("inclinacionAlert").innerHTML = "el valor tiene que estar entre 0 y 90 grados"; // avisamos al usuario que el valor introducido es incorrecto cambiando el texto dentro del elemento id"inclinacionAlert"
        }else{
            document.getElementById("inclinacionAlert").innerHTML = "introduzca un numero";
            grados = 0
        }
    }else{
        document.getElementById("inclinacionAlert").innerHTML = "";
    }
    if(checkFriccion.checked){
        friccionSelect = document.getElementById("friccionSelect");
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
                isNaN(parseFloat(document.getElementById("friccionEstatica").value)) ? friccionEstatica = 0 : friccionEstatica = parseFloat(document.getElementById("friccionEstatica").value);
                isNaN(parseFloat(document.getElementById("friccionDinamica").value)) ? friccionDinamica = 0 : friccionDinamica = parseFloat(document.getElementById("friccionDinamica").value);
            //este de arriba chequea si no hay valor introducido o si el valor no es un numero, entonces se le asigna 0 para que el calculo pueda hacerse
            break;
        }
        ffe = (friccionEstatica * pesoy);
        ffd = (friccionDinamica * pesoy);
        fuerzaNeta = (fx - ffd);
        if (ffe > Math.abs(fx) && selector) {
            selector = false;
            document.getElementById("result").innerHTML = "Este objeto no se mueve porque la friccion entre los cuerpos es muy grande"
            console.log("Fuerza Aplicada:", newtons, "Newton\nFuerza de Friccion Estatica: ", ffe, "Newton\nEste objeto no se mueve porque la friccion entre los cuerpos es muy grande");
        } else {
            a = (fuerzaNeta / masa);
        }
    }else if(selector){
        friccionEstatica = 0;
        friccionDinamica = 0;
        a = (fx / masa);
        console.log(a)
        if ((a === 0)) {
            selector = false
            document.getElementById("result").innerHTML = "Este objeto no se mueve"
            console.log("Este objeto no se mueve");
        }
    }
    if(selector){
    document.getElementById("result").innerHTML = "El objeto tiene una aceleracion de "+a+" m/s^2"
    console.log("El objeto tiene una aceleracion de", a, "m/s^2")
    }
}
//funciones que se encargan de actualizar la pagina
function gradosLoader(){
    if(checkInclinacion.checked){
        contenedorInclinacion.innerHTML = `
        <label for="grados">¿Cuantos grados° esta inclinado el plano? </label>
        <input id="grados" type="text" placeholder="45" onkeyup="calcular()">
        `
    }else{
        contenedorInclinacion.innerHTML = "";
    }
}
function friccionSelectLoader(){
    if(checkFriccion.checked){
        contenedorFriccionSelect.innerHTML = `
        <label for="friccionSelect">Composicion de los materiales</label>
        <select name="friccionSelect" id="friccionSelect" onchange="coeficientesLoader(),calcular()">
            <option>Madera sobre madera</option>
            <option>Acero sobre hielo</option>
            <option>Teflón sobre teflón</option>
            <option>Caucho sobre cemento seco</option>
            <option>Vidrio sobre vidrio</option>
            <option>Esquí sobre nieve</option>
            <option>Madera sobre cuero</option>
            <option>Aluminio sobre acero</option>
            <option>Articulaciones humanas</option>
            <option>Personalizado</option>
        </select>
        `
    }else{
        contenedorFriccionSelect.innerHTML = "";
    }
}
function coeficientesLoader(){
    friccionSelect = document.getElementById("friccionSelect");
    if(checkFriccion.checked && friccionSelect.selectedIndex == 9){
        console.log("corrio el if")
        contenedorCoeficientes.innerHTML = `
        <article>
            <label for="friccionEstatica">Coeficiente de friccion estatico</label>
            <input id="friccionEstatica" type="text" placeholder="0.5" onkeyup="calcular()">
        </article>
        <article>
            <label for="friccionDinamica">Coeficiente de friccion dinamico</label>
            <input id="friccionDinamica" type="text" placeholder="0.3" onkeyup="calcular()">
        </article>
        `
    }else{
        contenedorCoeficientes.innerHTML = "";
    }
}