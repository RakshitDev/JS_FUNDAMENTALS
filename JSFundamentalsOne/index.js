const bill = 400;

if (bill >= 50 && bill <= 300) {
  const tip = bill * 0.15;
  console.log(
    `The bill was ${bill}, the tip was ${tip}, and the total value was ${bill + tip}.`,
  );
} else {
  const tip = bill * 0.2;
  console.log(
    `The bill was ${bill}, the tip was ${tip}, and the total value was ${bill + tip}.`,
  );
}
