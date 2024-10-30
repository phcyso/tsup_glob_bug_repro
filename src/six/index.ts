

import { hello, runIfEntryPoint, sortVersions } from "../helpers/helpers";
import { goodbye, sixonly } from "../helpers/unhelpers";



export async function main() {
    hello("world 6");
    sortVersions([]);
    goodbye("world 6");
    sixonly(" 6");
}

runIfEntryPoint(import.meta.url, main);
