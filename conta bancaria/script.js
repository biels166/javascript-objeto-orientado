class Conta{
    constructor(saldo){
        this.saldo = saldo;
    }

    deposito(num){
        this.saldo = saldo + num;
        console.log(saldo);
    }
    
    saque(num){
        this.saldo = saldo - num;
        if((saldo - num) < 0){
            console.log("Saldo insuficiente.")
        } else{
            console.log(saldo);
        }
        
    }
}

let conta = new Conta(1000);

conta.deposito(100);

console.log(conta.saldo);

