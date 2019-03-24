import{ Kaffe } from "./kaffe";
import { IMælk } from "./Imælk";
import { Cortado } from "./Cortado"
import { Latte } from "./Latte";
import { SortKaffe } from "./SortKaffe";

let cortado = new Cortado();
console.log(`styrke for kaffe ${cortado.Styrke()}`);
console.log(`pris for kaffe ${cortado.Pris}`);
console.log(`rabat for kaffe ${cortado._rabat}`);
console.log(`ml mælk for kaffe ${cortado.mlMælk()}`);


let latte = new Latte();
console.log(`styrke for latte ${latte.Styrke()}`);
console.log(`pris for latte ${latte.Pris}`);
console.log(`rabat for latte ${latte._rabat}`);
console.log(`ml mælk for latte ${latte.mlMælk()}`);


let sortKaffe = new SortKaffe(4);
console.log(`styrke for sort kaffe ${sortKaffe.Styrke()}`);
console.log(`pris for sort kaffe ${sortKaffe.Pris}`);
console.log(`rabat for sort kaffe ${sortKaffe._rabat}`);

