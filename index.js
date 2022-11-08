function calculo(){
    var a, newtons, ffd, ffe, fuerzaNeta, fx, grados, masa, mat, material, pesoy, friccionDinamica, friccionEstatica;
    masa = Number.parseFloat(prompt("Ingrese la masa del cuerpo (Kilogramos) ")); //cambio
    newtons = Number.parseFloat(prompt("Ingrese la fuerza aplicada al cuerpo (Newton)(Ingresar valor negativo (-) para mover el objeto en la direccion opuesta) ")); //cambio
    const gravedad = 9.8;
    fx = newtons;
    if ((prompt("\u00bfEl plano esta inclinado? (s/n) ") === "s")) {//cambio
        grados = Number.parseInt(prompt("\u00bfCuantos grados(\u00b0) esta inclinado el plano? ")); //cambio
        while (((grados > 90) || (grados < 0))) {
            console.log("No es posible, ingrese otro valor ");//cambio
            grados = Number.parseInt(prompt("\u00bfCuantos grados(\u00b0) esta inclinado el plano? "));//cambio
        }
        fx = (fx + ((masa * gravedad) * Math.sin(((grados * Math.PI) / 180))));
        pesoy = ((masa * gravedad) * Math.cos(((grados * Math.PI) / 180)));
    }
    if ((prompt("\u00bfHay friccion? (s/n) ") === "s")) { //cambio
        mat = {"a": "Madera sobre madera", "b": "Acero sobre hielo", "c": "Tefl\u00f3n sobre tefl\u00f3n", "d": "Caucho sobre cemento seco", "e": "Vidrio sobre vidrio", "f": "Esqu\u00ed sobre nieve", "g": "Madera sobre cuero", "h": "Aluminio sobre acero", "i": "Articulaciones humanas", "j": "Personalizado"}; //cambio
        console.log(mat);
        material = prompt("\u00bfQue materiales componen a los cuerpos? "); //cambio
        if ((material === "a")) {
            friccionEstatica = 0.5;
            friccionDinamica = 0.3;
        } else {
            if ((material === "b")) {
                friccionEstatica = 0.03;
                friccionDinamica = 0.02;
            } else {
                if ((material === "c")) {
                    friccionEstatica = 0.04;
                    friccionDinamica = 0.04;
                } else {
                    if ((material === "d")) {
                        friccionEstatica = 1;
                        friccionDinamica = 0.8;
                    } else {
                        if ((material === "e")) {
                            friccionEstatica = 0.9;
                            friccionDinamica = 0.4;
                        } else {
                            if ((material === "f")) {
                                friccionEstatica = 0.1;
                                friccionDinamica = 0.05;
                            } else {
                                if ((material === "g")) {
                                    friccionEstatica = 0.5;
                                    friccionDinamica = 0.4;
                                } else {
                                    if ((material === "h")) {
                                        friccionEstatica = 0.61;
                                        friccionDinamica = 0.47;
                                    } else {
                                        if ((material === "i")) {
                                            friccionEstatica = 0.02;
                                            friccionDinamica = 0.003;
                                        } else {
                                            if ((material === "j")) {
                                                friccionEstatica = Number.parseFloat(prompt("Coeficiente de friccion estatico: ")); //cambio
                                                friccionDinamica = Number.parseFloat(prompt("Coeficiente de friccion dinamico: ")); //cambio
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        ffe = (friccionEstatica * pesoy);
        ffd = (friccionDinamica * pesoy);
        fuerzaNeta = (fx - ffd);
        if ((ffe > Math.abs(fx))) {
            console.log("Fuerza Aplicada:", newtons, "Newton\nFuerza de Friccion Estatica:", ffe, "Newton\nEste objeto no se mueve porque la friccion entre los cuerpos es muy grande");
            exit();
        } else {
            a = (fuerzaNeta / masa);
        }
    } else {
        a = (fx / masa);
        if ((a === 0)) {
            console.log("Este objeto no se mueve");
        }
    }
    console.log("El objeto tiene una aceleracion de", a, "m/s^2")
    }