import{ Kaffe } from "./kaffe";
import { IMælk } from "./Imælk";

export class Cortado extends Kaffe implements IMælk{
    Pris(pris: number): void {
        25;
    }
    mlMælk(): number {
       return 25;
    }

}
