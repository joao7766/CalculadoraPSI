function calculadora() {
    var n1, n2, op, visor;
    var overwrite=true;
    var pronto=false;
    visor=0;
    n1=0;
    this.calcula=function () {
        switch (op){
            case '+': return n1+n2;
            case '-': return n1-n2;
            case '*': return n1*n2;
            case '/': return n1/n2;
            case '^': return Math.pow(num1, num2);
            case '!': return calcFactorial(n1);
        }
    }
    this.setOverwrite=function(value)
    {
        overwrite=value;
    }

    this.getOverwrite=function()
    {
        return overwrite;
    }

    this.setVisor=function (txt) {
        switch (txt) {
            case '+':
            case '-':
            case '*':
            case '/':
                this.setOp(txt);
                break;
            case '=':
                
            default:
                if (overwrite) {
                    visor = txt;
                    overwrite = false;
                }
                else
                    visor += txt;
        }
    }

    this.getVisor=function () {
        return visor;
    }

    this.setN1=function(value){
        n1=value;
    }
    this.getN1=function () {
        return n1;
    }
    this.setN2=function(value){
        n2=value;
    }
    this.getN2=function () {
        return n2;
    }
    this.setOp=function (operacao) {
        if(pronto){
            n2=parseInt(visor);
            visor=this.calcula();
            pronto=false;
            overwrite=true;
        }
        else{
            n1=parseInt(visor);
            op=operacao;
            pronto=true;
            overwrite=true;
        }


    }
    this.getOp=function () {
        return op;
    }
    this.setEqual=function () {
        if(pronto){
            n2=parseInt(visor);
            visor=this.calcula();
            pronto=false;
            overwrite=true;
        }
        else{
            n1=parseInt(visor);
            overwrite=true;
        }
    }
}

function calcFactorial(numb){
    var i,factorial;
    factorial=1;

    for(i=1;i<=numb;i++){
        factorial*=1;
    }
    return(factorial);
}