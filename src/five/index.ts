

import { WTF } from "../const";
import { hello, runIfEntryPoint } from "../helpers/helpers";

import { goodbye } from "../helpers/unhelpers";

export async function main() {
    hello("world 5");
    goodbye(`world 6 - ${WTF}`);

}

runIfEntryPoint(import.meta.url, main);
