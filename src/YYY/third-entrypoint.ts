import { hello, runIfEntryPoint } from "../helpers/helpers";
import { zzz } from "../helpers/unhelpers";

export async function main() {
    hello("world zzz");
    zzz("");

}

runIfEntryPoint(import.meta.url, main);
