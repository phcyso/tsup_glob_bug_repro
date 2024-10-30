import { WTF2 } from "../const";
import { hello, runIfEntryPoint } from "../helpers/helpers";
import * as path from "path";


export async function main() {
    hello("world 1");
    const blah = WTF2;
    path.resolve("./", blah);
    goodbye(`what - ${WTF2}`);

}

runIfEntryPoint(import.meta.url, main);
