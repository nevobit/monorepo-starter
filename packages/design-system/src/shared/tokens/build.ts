import fs from "node:fs";
import path from "node:path";

const pkgRoot = process.cwd();
const srcRoot = path.join(pkgRoot, "src", "shared", "tokens");
const outStyles = path.join(pkgRoot, "styles");

fs.mkdirSync(outStyles, { recursive: true });

const tokens = JSON.parse(fs.readFileSync(path.join(srcRoot, "tokens.json"), "utf8"));

function cssDefaults(obj: unknown, prefix: string[] = []): string[] {
    const res: string[] = [];
    for (const [k, v] of Object.entries(obj as Record<string, unknown>)) {
        const key = [...prefix, k];
        if (v !== null && typeof v === "object" && !("default" in v) && !("dark" in v)) {
            res.push(...cssDefaults(v, key));
        } else if (v !== null && typeof v === "object" && "default" in v) {
            res.push(`  --${key.join("-")}: ${v["default"]};`);
        } else {
            res.push(`  --${key.join("-")}: ${v};`);
        }
    }
    return res;
}
function cssDark(obj: unknown, prefix: string[] = []): string[] {
    const res: string[] = [];
    for (const [k, v] of Object.entries(obj as Record<string, unknown>)) {
        const key = [...prefix, k];
        if (v !== null && typeof v === "object" && !("dark" in v)) {
            res.push(...cssDark(v, key));
        } else if (v !== null && typeof v === "object" && "dark" in v) {
            res.push(`  --${key.join("-")}: ${v["dark"]};`);
        }
    }
    return res;
}

const css = `/* generated */\n:root{\n${cssDefaults(tokens).join("\n")}\n}\n\n:root[data-theme="dark"]{\n${cssDark(tokens).join("\n")}\n}\n`;
fs.writeFileSync(path.join(outStyles, "tokens.css"), css);

// const dts = `/* generated */\nexport const tokens = ${JSON.stringify(tokens, null, 2)} as const;\nexport type Tokens = typeof tokens;\n`;
fs.writeFileSync(path.join(pkgRoot, "src", "shared", "tokens.ts"), `export const tokens=${JSON.stringify(tokens)} as const; export type Tokens=typeof tokens;`);

// console.log("Generated styles/tokens.css and src/shared/tokens.ts");
