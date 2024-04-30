alert("¡Hola! Bienvenido a la consultora laboral Pochoclo Hnos.")


function asesorar(){
    let check = prompt("¿Querés que te asesore para que consigas un gran trabajo?")

while ((check !== "si") && (check !== "sí")) {

    if (check == "no") {
        let secondCheck = confirm("Pero mirá que podés hacer muchísima guita eh... te interesa?")
        if (secondCheck) {
            alert("MUY BIEN")
            check = "si"
        }
    }else {
    check = prompt("Es una gran oportunidad. ¿Querés que te tire la posta?")
    }
}

alert("ANOTATE EN CODER!!!")
}

asesorar()