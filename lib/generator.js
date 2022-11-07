import { createRandomPicker, randomInt } from "./random.js";

//语句替换关键字
const sentence = (pick, replacer) => {
    let ret = pick();
    for (let key in replacer) {
        ret = ret.replace(
            new RegExp(`{{${key}}}`, "g"),
            typeof replacer === "function" ? replacer[key]() : replacer[key]
        );
    }
    return ret;
};

const generate = (title, { corpus, min = 6000, max = 1000 }) => {
    const articleLength = randomInt(min, max);

    const { famous, bosh_before, bosh, said, conclude } = corpus;
    const [pickFamous, pickBosh_before, pickBosh, pickSaid, pickConclude] = [
        famous,
        bosh_before,
        bosh,
        said,
        conclude,
    ].map((item) => {
        return createRandomPicker(item);
    });

    const article = [];
    let totalLength = 0;

    while (totalLength < articleLength) {
        let section = "";
        const sectionLength = randomInt(200, 500);

        while (section.length < sectionLength || !/[。？]$/.test(section)) {
            const n = randomInt(0, 100)
            if(n < 20) { //生成名人名言
                section += sentence(pickFamous, {said: pickSaid, conclude: pickConclude})
            } else if(n < 50) { //生成带前置的废话
                section += sentence(pickBosh_before, {title}) + sentence(pickBosh, {title})
            } else {
                section += sentence(pickBosh, {title})
            }
        }

        totalLength += section.length;
        article.push(section);
    }

    return article;
};

export { generate };
