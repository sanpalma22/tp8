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
    const frutaBuscada = document.getElementById("fruta").value

    if (frutas.indexOf(frutaBuscada) >= 0) respuesta.innerHTML = "Sí, tenemos " + frutaBuscada
    else respuesta.innerHTML = "No, no tenemos " + frutaBuscada
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

function piramide(){
    let numBase = prompt("Ingrese la cantidad de asteriscos que tiene la base")
    numBase= parseInt(numBase)
    for (let i = 1; i <= numBase; i++) {
        console.log("*".repeat(i))
    }
    
    for (let i = 1; i <= numBase; i++) {
        
    }
}

function nombresA(){
    let nomrbes = prompt("Ingrese una lista de nombres separados por coma")
    let nombresConA=[]
    for (const nombre of nombres){
        if(nombre)
    }

}