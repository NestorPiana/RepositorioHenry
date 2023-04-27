function viajar (destino){
    if(destino === 'Brasil'){
        console.log('Gire a la Izquierda');
    }else if(destino === 'Argentina'){
        console.log('Gire a la Derecha');
    }else{
        console.log('Nos Perdimos');
    }
};

viajar('Chile');
viajar('Argentina');
viajar('Brasil');


function puedeManejar(edad){
    if (edad >= 18){
        console.log(true);
    }
    console.log(false);
}

puedeManejar(16)
puedeManejar(22)