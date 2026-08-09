// tip calculator
const tips = [];
const bills = [125, 555, 44];

const tipCalculator = (bills, tips) => {
  console.log(bills <= 300);
  for (i = 0; i < bills.length; i++) {
    if (bills[i] >= 50 && bills[i] <= 300) {
      tips[i] = 0.15;
    } else {
      tips[i] = 0.2;
    }
  }
};
tipCalculator(bills, tips);
console.log(tips);

// const calculateTip = tipCalculator(200);
// const bills = [125, 555, 44];
// const tips = [
//   tipCalculator(bills[0]),
//   tipCalculator(bills[1]),
//   tipCalculator(bills[2]),
// ];
// // console.log(tips);

// const totals = [
//   bills[0] + bills[0] * tips[0],
//   bills[1] + bills[1] * tips[1],
//   bills[2] + bills[2] * tips[2],
// ];
// console.log(bills);
// console.log(totals);
