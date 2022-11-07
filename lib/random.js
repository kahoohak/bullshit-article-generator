const randomInt = (min, max) => {
    const p = Math.random();
    return Math.floor(min + p * (max - min));
};

const createRandomPicker = (arr) => {
    arr = [...arr]; //copy数组
    const randomPick = () => {
        const len = arr.length - 1;
        const index = randomInt(0, len);
        const picked = arr[index];
        [arr[index], arr[len]] = [arr[len], arr[index]];
        return picked;
    };
    randomPick(); //抛弃第一次结果，使最后一个元素加入随机选择中
    return randomPick;
};

export { randomInt, createRandomPicker };
