import{ Kaffe } from "./kaffe";
import { IMælk } from "./Imælk";
import { Cortado } from "./Cortado"
import { Latte } from "./Latte";

let cortado = new Cortado();
console.log(`styrke for kaffe ${cortado.Styrke}`);
console.log(`pris for kaffe ${cortado.Pris}`);
console.log(`rabat for kaffe ${cortado._rabat}`);
console.log(`ml mælk for kaffe ${cortado.mlMælk}`);

let latte = new Latte();
console.log(`styrke for latte${latte.Styrke}`)
console.log(`pris for latte${latte.Pris}`)
console.log(`rabat for latte${latte._rabat}`)
console.log(`ml mælk for latte${latte.mlMælk}`)

