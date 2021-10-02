class Conta{
    constructor(saldo){
        this.saldo = saldo;
    }

    deposito(num){
        let saldo = saldo + num;
        console.log(saldo);
    }
    
    saque(num){
        let saldo = saldo - num;
        if((saldo - num) < 0){
            console.log("Saldo insuficiente.")
        } else{
            console.log(saldo);
        }
        
    }
}

let saldo = 0;
console.log(saldo);

Conta.deposito(1000);
console.log(saldo);