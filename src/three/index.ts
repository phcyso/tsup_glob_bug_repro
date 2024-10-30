

import { hello, runIfEntryPoint } from "../helpers/helpers";
import { helloThree } from "./three";



export async function main() {
    hello("world 3");
    helloThree("");
}

runIfEntryPoint(import.meta.url, main);
