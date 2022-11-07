import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import moment from "moment";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const loadCorpus = (src) => {
    const path = resolve(__dirname, '..', src);
    const data = readFileSync(path, { encoding: "utf-8" });
    return JSON.parse(data);
};

const saveCorpus = (title, article) => {
    const outputDir = resolve(__dirname, '..', "output");
    const time = moment().format('--YYYY年MM月DD日HH时mm分ss秒')
    const outputFile = resolve(outputDir, `${title}${time}.txt`);

    if (!existsSync(outputDir)) {
        mkdirSync(outputDir);
    }

    const text = `${title}\n\n    ${article.join("\n    ")}`;

    writeFileSync(outputFile, text);

    return outputFile;
};

export { loadCorpus, saveCorpus };
