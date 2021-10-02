class Compra{
    constructor(item, quantidade, valor, total){
        this.item = item;
        this.quantidade = quantidade;
        this.valor = valor;
        this.total = quantidade * valor;
    }


}

let item1 = new Compra("Computador", 2, 2000);


console.log(item1.item);
console.log(item1.quantidade);
console.log(item1.valor);

console.log(item1.total);
