const miPromesa = new Promise((resolve, reject)=>{
    //resolve('la promesa fue resuelta')
    reject('la promesa fallo')

});

miPromesa.then(
    respuesta => console.log(respuesta), 
    razon => console.log(razon)
);