/* Write your code below. Good luck! 🙂 */

function calculateAverage(score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
}
const scoreDolphins = calculateAverage(43, 23, 71);
const scoreKoalas = calculateAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins > avgKoalas) {
    console.log(`dolphine win ${avgDolphins} vs ${avgKoalas}`);
    return avgDolphins;
  } else {
    console.log(`Kolas win ${avgKoalas} vs ${avgDolphins}`);
    return avgKoalas;
  }
}
const winner = checkWinner(scoreDolphins, scoreKoalas);
if (winner === "avgDolphins") {
  console.log("Dolpfine");
} else {
  console.log("kolas");
}
