const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const initBatt = 0;
const totalBatteries = batteryBatches.reduce(
    (accumulator, totalNow) => accumulator + totalNow,
    initBatt
);
totalBatteries