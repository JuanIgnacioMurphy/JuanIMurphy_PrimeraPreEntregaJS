alert("¡Hola! Bienvenido a la consultora laboral Pochoclo Hnos.")


function asesorar() {
    let check = prompt("¿Querés que te asesore para que consigas un gran trabajo?").toLowerCase()

    while ((check !== "si") && (check !== "sí")) {

        if (check == "no") {
            let secondCheck = confirm("Pero mirá que podés hacer muchísima guita eh... te interesa?")
            if (secondCheck) {
                alert("Eso! Ahora sí! Me alegra que hayas recapacitado")
                check = "si"
            }
        } else {
            check = prompt("Es una gran oportunidad. ¿Querés que te tire la posta?")
        }
    }
    alert("Muy bien, te voy a hacer algunas preguntas para poder asesorarte. Y quedate tranquilo que acá no hay nada del estilo ser 'ser tu propio jefe' ni nada de eso.")

    let ready = confirm("Estás listo?")

    if (ready) {
        let workplace = prompt("Cuál de estos ambientes te parece el ideal para trabajar (Elegí un número) 1: tu casa 2:una oficina sin ventanas 3:salón de uñas acrilicas")

        switch (workplace) {
            case "1":
                alert("Claaaro")
                break
            case "2":
                alert("No te creo nada...")
                break
            case "3":
                alert("Bueno, si vos decís")
                break
                default:
                    alert("No te entendí... pero no importa. El trabajo que quiero recomendarte podés hacerlo desde cualquier lado")
        }
    }

    alert("Ahora vamos a lo más importante...")
    alert("Para darte mi recomendación laboral, antes tengo que hacerte una pregunta. Si respondés bien, te doy mi consejo...")

    let intentos = 1
    let question = false

    do {

        let finalQuestion = prompt("Ingresá el nombre de mejor país del mundo. Ojo, tenés solo tres intentos").toLowerCase()


        if (finalQuestion == "argentina" && intentos <= 3) {
            alert("Muy bien! Acertaste!")
            alert("Mi recomendación es...")
            alert("ANOTATE EN CODER!!!!")
            question = true
        } else {
            alert("Mmm, respuesta incorrecta")
            intentos ++
            if (intentos > 3) {
                alert("Lo lamento mucho... no pasaste la prueba")
                break

            }
        }

    }while(question=false)



}

asesorar()

