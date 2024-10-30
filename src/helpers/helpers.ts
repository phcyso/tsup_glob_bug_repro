import * as url from "url";
import semver from "semver";


export function hello(s: string) {
    console.log(`Hello ${s}`);
}

export const sortVersions = (versions: string[]) => {
    const coerce = (version: string) => semver.coerce(version) || "";
    const compare = (v1: string, v2: string) =>
        semver.compare(coerce(v1), coerce(v2));
    return [...versions.sort(compare)];
};



// https://exploringjs.com/nodejs-shell-scripting/ch_nodejs-path.html#detecting-if-module-is-main
function isEntrypoint(importMetaUrl: string) {
    try {
        const isFileUrl = importMetaUrl.startsWith("file:");
        if (!isFileUrl) {
            return false;
        }

        // fileURLToPath will throw if importMetaUrl isn't a valid URL
        const modulePath = url.fileURLToPath(importMetaUrl);
        return process.argv[1] === modulePath;
    } catch (e) {
        if (e instanceof TypeError && e.message === "Invalid URL") {
            return false;
        } else {
            throw e;
        }
    }
}

export async function runIfEntryPoint(importMetaUrl: string, fn: () => any) {
    try {
        if (isEntrypoint(importMetaUrl)) {
            await fn();
        }
    } catch (e) {
        if (typeof e === "string" || e instanceof Error) {
            throw (e);
        }
    }
}
