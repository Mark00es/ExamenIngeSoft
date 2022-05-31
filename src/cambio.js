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
            cambio = this.valor;
            vectorResultante.push(cambio)            
        }        
        return vectorResultante        
    } 
}
export default cambio;
  