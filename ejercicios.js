function CalcularEdad() {
    const fechaString = document.getElementById("fechaNac").value
    const fechaDate = Date.parse(fechaString)
    let hoy = Date.now()

    let años = Math.abs(Date.now() - fechaDate);
    años = años / (1000 * 3600 * 24)
    let respuesta = document.getElementById("resultado")
    respuesta.innerHTML = años
}


let frutas = ["Manzana", "Banana", "Naranja", "Uva", "Pera", "Mango", "Kiwi", "Fresa", "Piña", "Cereza"]
for (const fruta of frutas) {
    console.log(fruta)
}
function BuscarFruta() {
    let frutaBuscada = document.getElementById('fruta').value
    let respuesta = document.getElementById('resultado')
    if (frutas.indexOf(frutaBuscada) >= 0) respuesta.innerHTML = `Si, tenemos  ${frutaBuscada}`
    else respuesta.innerHTML = `No, no tenemos  ${frutaBuscada}`
}

function ComparacionDatos() {
    if (10 == '10') console.log("Son iguales")
    if (10 === '10') console.log("Son iguales")
    else console.log("Son distintos")
}

function yoObjeto() {
    const ciudad = {
        nombre: "Buenos Aires",
        fechaFundacion: "1980",
        poblacion: "5399",
        extencion: "75894km"
    }
    for (const propiedad in ciudad) {
        console.log(`${propiedad} : ${ciudad[propiedad]}`);
    }
}


function dobleElemento() {
    let numeros = [2, 4, 7]
    let numDuplicados = []
    for (const num of numeros) {
        numDuplicados.push(num * 2)
    }
    console.log(numDuplicados)
}

function piramide() {
    let numBase = prompt("Ingrese la cantidad de asteriscos que tiene la base")
    numBase = parseInt(numBase)
    for (let i = 1; i <= numBase; i++) {
        console.log("*".repeat(i))
    }

    numBase = prompt("Ingrese la cantidad de asteriscos que tiene la base")
    numBase = parseInt(numBase)
    let base = "-".repeat(numBase)
    for (let i = 1; i <= numBase; i++) {

    }
}

function nombresA() {
    let ingreso = prompt("Ingrese una lista de nombres separados por coma")

    let nombres = ingreso.split(',')
    let nombresConA = nombres.filter(nombre => nombre.startsWith("a"))

    console.log(nombres)
    console.log(nombresConA)
}

function reemplazarPalabra() {
    let ingreso = prompt("Ingrese una lcadena de texto")
    let palabraAReemplazar = prompt("Ingrese una palabra que deseas reemplazar")
    let palabraNueva = prompt("Ingrese la nueva palabra")

    let fraseNueva = document.getElementById('resultado')
    fraseNueva.innerHTML = ingreso.replace(palabraAReemplazar, palabraNueva)
}

function cortarTexto() {
    let ingreso = prompt("Ingrese una lcadena de texto")
    let numero = prompt("Ingrese un numero para cortar el texto anterior")

    let fraseCortada = document.getElementById('resultado')
    fraseCortada.innerHTML = ingreso.slice(0, numero)
}

function stringConSeparador() {
    let ingreso = prompt("Ingrese una cadena de elementos separados por una coma")

    let elementosSinComa = document.getElementById('resultado')
    elementosSinComa.innerHTML = ingreso.replaceAll(',', '-')
}

function calculadoraDeRecaudacion() {
    let ingreso = prompt("Ingrese un texto de los productos con sus perspectivos precios")
    let pedidos = ingreso.split(',')
    console.log(pedidos)
    let precios=[]
    for (let i = 0; i < pedidos.length; i++) {
        precios.push(pedidos[i].split(':').filter(item => !isNaN(item)))
    }
    console.log(precios)
    let total = 0
    for (let i = 0; i < precios.length; i++) {
        total += precios[i]
    }
    console.log(total)

}