export function cryptoFormatter(amount: number | string) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "decimal",
    maximumFractionDigits: 4,
  });

  if (typeof amount === "string") {
    amount = parseFloat(amount);
  }

  return formatter.format(amount);
}
