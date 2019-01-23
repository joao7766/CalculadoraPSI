var memory = new memObj();

function memObj(){
    this.value = 0;
}

function MemClear(memVar){
    memVar.value = 0;
}

function MemRead(memVar)
{
    return memVar.value;
}

function MemSet(memVar, value){
    memVar.value = value;
}

function MemPlus(memVar, value){
    memVar.value += value
}

function MemMinus(memVar, value){
    memVar.value -= value;
}

function calcPotencia(var1, var2){
    return(Math.pow(var1, var2));
}

function calcFactorial(numb){
    var i,factorial;
    factorial=1;

    for(i=1;i<=numb;i++){
        factorial*=1;
    }
    return(factorial);
}

function calcSqrt(num) {
    return(Math.sqrt(num));
}

function sum (n1,n2){
    return(n1+n2);
}

function mult (n1,n2){
    return(n1*n2);
}

function div (n1,n2){
    return(n1/n2);
}

function sub (n1,n2){
    return(n1-n2);
}