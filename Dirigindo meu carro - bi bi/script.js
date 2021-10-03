class Carro{
    constructor(marca, cor, gasolina){
        this.marca = marca;
        this.cor = cor;
        this.gasolina = gasolina;

    }

    dirigir(){
       let tanqueReserva = (tanqueCheio * 0.2);
       
       for(let tanque = this.gasolina; tanque >= tanqueReserva; tanque -= 5){
            console.log(tanque + "L de Combustível restantes"); //Irá converter para uma string no console.
            if(tanque == tanqueReserva){
                console.log("\nRESERVA - REABASTECER URGENTE !\n"); 
                
                this.gasolina = tanque;            
            }
        } 
        
    }

    abastecer(quantosLitros){
        let aux = quantosLitros + this.gasolina;

        if(aux > tanqueCheio){
            console.log(`Cuidado: Limite escedido -> Valor Máximo: ${tanqueCheio - 20} L`);
         } else{
            
                for(let tanque = this.gasolina; (tanque <= aux); tanque += 10){
                console.log(tanque + "L de Combustível"); //Irá converter para uma string no console.
                if(tanque == aux){

                    console.log("\nREABASTECIMENTO CONCLUÍDO !\n");
                
                    this.gasolina = tanque;
                } 

                if(this.gasolina == tanqueCheio){
                    console.log("TANQUE CEHIOO !\n");
                }
            }

        }

    }


}

let meuCarro = new Carro("Ford", "Preto", 60);
const tanqueCheio = meuCarro.gasolina;

console.log(tanqueCheio);
console.log(meuCarro);

meuCarro.dirigir();
console.log(meuCarro);

meuCarro.abastecer(30);
console.log(meuCarro);

meuCarro.dirigir();
console.log(meuCarro);

meuCarro.abastecer(700);
console.log(meuCarro);

meuCarro.abastecer(20);
console.log(meuCarro);

