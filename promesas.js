// const promesa = new Promise((resolve, reject) => {

//     resolve('Promesa ejecutada')
// })

// promesa.then((stringRecibido) =>{
//     let stringFinal = `${stringrecibido} y Lassie estuvo aqui`
//     return stringFinal
//     console.log(stringRecibido);
// }).then((mensajeFinal) => {
//     console.lnoog(mensajeFinal);
// })
// console.log(promesa);
const axios = require('axios');
const yargs = require('yargs')

const id = 4
const url = `ttps://swapi.co/api/people/${id}`;

axios.get(url).then((informacion) => {
    console.log(informacion.data.name);
})
