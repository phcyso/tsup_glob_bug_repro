

import { WTF2 } from "../const";
import { hello, runIfEntryPoint } from "../helpers/helpers";

import { goodbye } from "../helpers/unhelpers";

export async function main() {
    hello("world 4");
    goodbye("world 4");
    goodbye(`world 4 - ${WTF2}`);
}

runIfEntryPoint(import.meta.url, main);
