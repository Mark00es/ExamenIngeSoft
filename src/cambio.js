class cambio{
    constructor(valor){
        this.valor = valor;
    }
    valorIngresado(){
        return this.valor
    }        
    cambioMonedas(){
        let vectorResultante = []        
        for(let cambio = 0;cambio<=this.valor;cambio = cambio + cambio){
            if(this.valor%2 == 0){
                cambio = 2;
            }
            if(this.valor%5 == 0){
                cambio = 5;
            }
            vectorResultante.push(cambio)            
        }        
        return vectorResultante        
    } 
}
export default cambio;
  