//llamadas asincronas

/*console.log("hola mundo")

setTimeout(() => {
    console.log("mensaje uno")
},2000)

setTimeout(() => {
    console.log("mensaje dos")
},0)

console.log("mensaje final")*/

//ejemplo de llamadas asincronas
setTimeout(() => {
    console.log("primero")
}, 3000)

setTimeout(() => {
    console.log("segundo")
}, 5000)

setTimeout(()=> {
    console.log("tercero")
}, 6000)
