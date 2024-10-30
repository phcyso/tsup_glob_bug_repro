

import { hello, runIfEntryPoint } from "../helpers/helpers";



export async function main() {
    hello("world 2");

}

runIfEntryPoint(import.meta.url, main);
