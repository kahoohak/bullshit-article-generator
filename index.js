import { generate } from "./lib/generator.js";
import { createRandomPicker } from "./lib/random.js";
import { loadCorpus, saveCorpus } from "./lib/corpus.js";
import { options } from "./lib/cmd.js"

//获取JSON
const corpus = loadCorpus("corpus/data.json")
//获取title
const title = options.title || createRandomPicker(corpus.title)()
//生成文章
const article = generate(title, {corpus, ...options})
//保存文章
saveCorpus(title, article)
