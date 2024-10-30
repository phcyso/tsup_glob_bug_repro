import path from "path";
import { sortVersions } from "../helpers/helpers";
import { WTF } from "../const";

export function helloThree(name: string) {
    console.log(`Hello, ${name}`);
    sortVersions(["one", "two"]);

    path.resolve("./", WTF);

}
