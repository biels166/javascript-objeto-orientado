class Conta{
    constructor(saldoContaCorrente, saldoPoupanca, jurosPoupanca){
        this.saldoContaCorrente = saldoContaCorrente;
        this.saldoPoupanca = saldoPoupanca;
        this.jurosPoupanca = jurosPoupanca;
    }

    transferencia(valorTransf, destino){
       if(destino === "P"){
           this.saldoPoupanca += valorTransf;
           this.saldoContaCorrente -= valorTransf;
       }

       if(destino ==="CC"){
           this.saldoContaCorrente += valorTransf;
           this.saldoPoupanca -= valorTransf;
       }
    }

    depositoCC(valor){
        this.saldoContaCorrente += valor;
    }

    saqueCC(valor){
        this.saldoContaCorrente -= valor;
    }

    simulaRendimento(tempo){
        let rendimentoAA = 1 + (this.jurosPoupanca / 100);
        let valorSimulado = this.saldoPoupanca * rendimentoAA * tempo;

        console.log(`Em ${tempo} anos, sua Poupança será de R$ ${valorSimulado}`);
    }

    aplicaJuros(tempo){
        this.saldoPoupanca = this.saldoPoupanca * (tempo * (1 + (this.jurosPoupanca / 100)) );
    }
  
}

class ContaEspecial extends Conta{
    constructor(saldoContaCorrente, saldoPoupanca, jurosPoupanca){
        super(saldoContaCorrente, saldoPoupanca, jurosPoupanca*2);       
    }

    aplicaJuros(tempo){
        this.saldoPoupanca = this.saldoPoupanca * (tempo * (1 + (this.jurosPoupanca / 100)) );
    }

}

class Operacao{
    constructor(origem, destino, valor){
        this.origem = origem;
        this.destino = destino;
        this.valor - valor;   
    }

    transferenciaEntreContas(origem, destino, valor){
        if((origem === "nossaConta") && (destino === "minhaConta")){
            nossaConta.saldoContaCorrente -= valor;
            minhaConta.saldoContaCorrente += valor;
        }

        if((origem === "minhaConta") && (destino === "nossaConta")){
            minhaConta.saldoContaCorrente -= valor;
            nossaConta.saldoContaCorrente += valor;
        }
    }
}


let minhaConta = new Conta(15000, 1000, 2);
let nossaConta = new ContaEspecial(15000, 1000, 2);

minhaConta.aplicaJuros(2);
console.log(minhaConta);

nossaConta.aplicaJuros(2);
console.log(nossaConta);

//-----------------------------------------------------------------

minhaConta.transferencia(5000, "P");

console.log(minhaConta);

minhaConta.transferencia(500, "CC");

console.log(minhaConta);

minhaConta.depositoCC(10000);
console.log(minhaConta);

minhaConta.saqueCC(12000);
console.log(minhaConta);

minhaConta.simulaRendimento(1);

minhaConta.aplicaJuros(2);
console.log(minhaConta);

nossaConta.depositoCC(10000);
console.log(nossaConta);

//----------------------------------------------------------------


let opec = new Operacao("nossaConta", "minhaConta", 10000);
opec.transferenciaEntreContas("minhaConta", "nossaConta", 6000);
console.log(minhaConta);
console.log(nossaConta);
