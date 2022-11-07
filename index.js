var a, f, ffd, ffe, fuerzaNeta, fx, g, inc, m, mat, material, pesoy, ud, ue;
console.log("\"\n   _____      _            _           _                    __ _     _           \n  / ____|    | |          | |         | |                  / _(_)   (_)          \n | |     __ _| | ___ _   _| | __ _  __| | ___  _ __ __ _  | |_ _ ___ _  ___ __ _ \n | |    / _` | |/ __| | | | |/ _` |/ _` |/ _ \\| '__/ _` | |  _| / __| |/ __/ _` |\n | |___| (_| | | (__| |_| | | (_| | (_| | (_) | | | (_| | | | | \\__ \\ | (_| (_| |\n  \\_____\\__,_|_|\\___|\\__,_|_|\\__,_|\\__,_|\\___/|_|  \\__,_| |_| |_|___/_|\\___\\__,_|\n\n");
m = Number.parseFloat(prompt("Ingrese la masa del cuerpo (Kilogramos) "));
f = Number.parseFloat(prompt("Ingrese la fuerza aplicada al cuerpo (Newton)(Ingresar valor negativo (-) para mover el objeto en la direccion opuesta) "));
g = 9.8;
fx = f;
function pesoy(m, g) {
    pesoy = (m * g);
}
if ((prompt("\u00bfEl plano esta inclinado? (s/n) ") === "s")) {
    inc = Number.parseInt(prompt("\u00bfCuantos grados(\u00b0) esta inclinado el plano? "));
    while (((inc > 90) || (inc < 0))) {
        console.log("No es posible, ingrese otro valor ");
        inc = Number.parseInt(prompt("\u00bfCuantos grados(\u00b0) esta inclinado el plano? "));
    }
    fx = (fx + ((m * g) * math.sin(((inc * 3.14159) / 180))));
    pesoy = ((m * g) * math.cos(((inc * 3.14159) / 180)));
}
if ((prompt("\u00bfHay friccion? (s/n) ") === "s")) {
    mat = {"a": "Madera sobre madera", "b": "Acero sobre hielo", "c": "Tefl\u00f3n sobre tefl\u00f3n", "d": "Caucho sobre cemento seco", "e": "Vidrio sobre vidrio", "f": "Esqu\u00ed sobre nieve", "g": "Madera sobre cuero", "h": "Aluminio sobre acero", "i": "Articulaciones humanas", "j": "Personalizado"};
    console.log(mat);
    material = prompt("\u00bfQue materiales componen a los cuerpos? ");
    if ((material === "a")) {
        ue = 0.5;
        ud = 0.3;
    } else {
        if ((material === "b")) {
            ue = 0.03;
            ud = 0.02;
        } else {
            if ((material === "c")) {
                ue = 0.04;
                ud = 0.04;
            } else {
                if ((material === "d")) {
                    ue = 1;
                    ud = 0.8;
                } else {
                    if ((material === "e")) {
                        ue = 0.9;
                        ud = 0.4;
                    } else {
                        if ((material === "f")) {
                            ue = 0.1;
                            ud = 0.05;
                        } else {
                            if ((material === "g")) {
                                ue = 0.5;
                                ud = 0.4;
                            } else {
                                if ((material === "h")) {
                                    ue = 0.61;
                                    ud = 0.47;
                                } else {
                                    if ((material === "i")) {
                                        ue = 0.02;
                                        ud = 0.003;
                                    } else {
                                        if ((material === "j")) {
                                            ue = Number.parseFloat(prompt("Coeficiente de friccion estatico: "));
                                            ud = Number.parseFloat(prompt("Coeficiente de friccion dinamico: "));
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
    ffe = (ue * pesoy);
    ffd = (ud * pesoy);
    fuerzaNeta = (fx - ffd);
    if (ffe > abs(fx)) {
        console.log("Fuerza Aplicada:", f, "Newton\nFuerza de Friccion Estatica:", ffe, "Newton\nEste objeto no se mueve porque la friccion entre los cuerpos es muy grande");
        exit();
    } else {
        a = (fuerzaNeta / m);
    }
} else {
    a = (fx / m);
    if ((a === 0)) {
        console.log("Este objeto no se mueve");
    }
}
console.log("El objeto tiene una aceleracion de", a, "m/s^2");


