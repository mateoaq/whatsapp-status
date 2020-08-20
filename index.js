
function acction() {
    const clase = "_3-cMa _3Whw5"
    var a = document.getElementsByClassName(clase)
    if (a.length == 0) {
        console.log("Nop")
    } else {
        var status = a[0].title

        if (status == "en línea" || status == "escribiendo...") {
            console.log("En Línea")
        } else {
            console.log("Nop")
        }
    }
}

setInterval(() => { acction() }, 5000)