import { defineConfig } from "tsup";
import pkgJson from "./package.json";

export default defineConfig({
    clean: true,
    entry: [
        "src/one/index.ts",
        "src/two/index.ts",
        "src/three/index.ts",
        "src/four/index.ts",
        "src/one-more-time/index.ts",
        "src/five/index.ts",
        "src/six/index.ts",
        "src/zzz/index.ts",
        "src/YYY/index.ts",
        "src/YYY/second-entrypoint.ts",
        "src/YYY/third-entrypoint.ts",
    ],
    minify: true,
    keepNames: true,
    noExternal: Object.keys(pkgJson.dependencies),
    format: "esm",
    target: "node20",
    // https://github.com/matthew-andrews/isomorphic-fetch/issues/194
    esbuildOptions: (options) => {
        options.mainFields = ["main", "module"];
    },
});
