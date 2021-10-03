class Endereco{
    constructor(rua, bairro, cidade, estado){
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    setRua(novaRua){
        this.rua = novaRua;
    }

    setBairro(novoBairro){
        this.bairro = novoBairro;
    }

    setCidade(novaCidade){
        this.cidade = novaCidade;
    }

    setEstado(novoEstado){
        this.estado = novoEstado;
    }

}


let endereco = new Endereco("Rua Ernesto Manograsso", "São Matheus", "São Paulo", "SP");
console.log(endereco);

endereco.setRua("Av. Sapopemba");

console.log(endereco);