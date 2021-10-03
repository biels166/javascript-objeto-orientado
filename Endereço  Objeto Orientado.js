class Endereco {
    constructor(end, bairro, cidade, estado) {
        this.end = end
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }
    
    alteraEndereco(end, bairro, cidade, estado){
        for(let verificaId in this.end){
            if(this.end[verificaId].id == end.id){
                this.end[verificaId] = end;
                this.bairro = bairro;
                this.cidade = cidade;
                this.estado = estado;
            }
        }
        
    }
    
    adicionaEndereco(end, bairro, cidade, estado){
        for(let verificaId in this.end){
            if(this.end[verificaId].id != end.id){
                this.end.push(endereco);
            }
            
        }
    }
}



let endereco = new Endereco([{
    id: 01,
    rua: "Ernesto Manograsso",
    num: 939,
    complemento: "Casa"
}], "São Matheus", "São Paulo", "SP");


console.log(endereco);

endereco.alteraEndereco({id:01, rua:"Av. Brigadeiro  Faria Lima", num: 4300, complemento:"Apartamento 93"}, "Itaim Bibi", "São Paulo", "SP");

console.log("\n");
console.log(endereco);