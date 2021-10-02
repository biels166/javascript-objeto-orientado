class Conta{
    constructor(saldo){
        this.saldo = saldo;
    }

    deposito(num){
        this.saldo += num;
    }

   saque(num){
        this.saldo -= num; 
   } 

}

let conta = new Conta(1000);

conta.deposito(100);
console.log(conta.saldo);

conta.saque(280);
console.log(conta.saldo);

conta.deposito(1000);
console.log(conta.saldo);

