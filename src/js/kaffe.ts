export abstract class Kaffe{
    public _rabat: number;
    abstract Pris(pris: number): void;

    public Styrke(){
        return "mild";
    }
    
    constructor(Rabat: number){
        this._rabat = Rabat;
    }
}