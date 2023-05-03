//AND
function MayoyYMenorYPar(num) {
    if (num > 5 && num < 10 && num % 2 === 0)
    console.log(true);
    else console.log (false);
};

MayoyYMenorYPar(7);
MayoyYMenorYPar(8);

//OR
function OperadorOR(str) {
    if (str === 'Henry' || str.lenght < 2)
        console.log(true);
    else console.log(false);
}

OperadorOR('Henry');
OperadorOR('JavaScript');
OperadorOR('H');

//NOT
function negacion(permiso){
    if(!permiso) console.log('Tiene Permiso');
}
negacion(true);
negacion(false);
