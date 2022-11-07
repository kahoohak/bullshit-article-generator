import { generate } from "./lib/generator.js";
import { createRandomPicker } from "./lib/random.js";
import { loadCorpus, saveCorpus } from "./lib/corpus.js";

const corpus = loadCorpus("corpus/data.json")

const pickTitle = createRandomPicker(corpus.title)
const title = pickTitle()

const article = generate(title, {corpus})

saveCorpus(title, article)