const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
function sumBatteries(totalAmount, batteries){
    return totalAmount + batteries;
}
const totalBatteries = batteryBatches.reduce(sumBatteries, 0)