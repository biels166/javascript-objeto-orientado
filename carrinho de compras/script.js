class Compra{
    constructor(item, quantidade, valor){
        this.item = item;
        this.quantidade = quantidade;
        this.valor = valor;
    }

    adicionar(item){
        let contador = 0;

        for(let itemCompra in this.item){
            if(this.item[itemCompra].id == item.id){
                this.item[itemCompra].qtd += item.qtd;
            }
            contador = 1;
        }

        if(contador == 0){
            this.item.push(item);
        }

        this.quantidade = quantidade + item.qtd;
        this.valor = valor + (item.preco * item.qtd);        
    }


}

let compra = new Compra([{id: 01, nome: camisa, qtd: 2, preco: 50}, 2, 100]);








