class Endereco {
    constructor(end) {
        this.end = end;
    }
    
    alteraEndereco(end){
        for(let verificaId in this.end){
            if(this.end[verificaId].id == end.id){
                this.end[verificaId] = end;
            }
        }
        
    }
    
    adicionaEndereco(end){
        for(let verificaId in this.end){
            if(this.end[verificaId].id != end.id){
          
                let endereco = new Endereco([{
                id: 'number',
                rua: 'string',
                num: 'number',
                complemento: 'string',
                bairro: 'string',
                cidade: 'string',
                estado: 'string'
              }]);
              
               let endClientes = this.end.push(end);
            }
            
        }
    }
        
}

let endereco = new Endereco([{
    id: 01,
    rua: "Ernesto Manograsso",
    num: 939,
    complemento: "Casa",
    bairro: "São Mateus",
    cidade: "São Paulo",
    estado: "SP"
}]);

console.log(endereco.end);


endereco.alteraEndereco({id:01, rua:"Av. Brigadeiro  Faria Lima", num: 4300, complemento:"Apartamento 93", bairro:"Itaim Bibi", cidade:"São Paulo", estado:"SP"});

endereco.adicionaEndereco({id:02, rua:"Av. Sapopemba", num: 40, complemento:"Apartamento 1", bairro:"São Matheus", cidade:"São Paulo", estado:"SP"});

console.log(endereco.end);
console.log("\n");


