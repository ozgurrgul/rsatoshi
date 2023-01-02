export function moneyFormatter(amount?: number | string, currency = "USD") {
  if (amount === undefined) {
    return "";
  }
  if (typeof amount === "string") {
    amount = parseFloat(amount);
  }

  let maximumFractionDigits = 8;
  const digitPart = parseFloat(`0.` + `${amount}`.split(".")[1]);

  if (amount > 100) {
    maximumFractionDigits = 2;
  } else if (amount > 10) {
    maximumFractionDigits = 3;
  } else if (amount > 1) {
    maximumFractionDigits = 4;
  } else if (digitPart > 0.01) {
    maximumFractionDigits = 6;
  } else if (digitPart > 0.0001) {
    maximumFractionDigits = 8;
  } else if (digitPart > 0.000000001) {
    maximumFractionDigits = 12;
  }

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits,
  });

  return formatter.format(amount);
}

export function removeDollarSign(formattedAmount: string) {
  if (formattedAmount && formattedAmount.includes("$")) {
    formattedAmount = formattedAmount.replace("$", "");
  }
  return formattedAmount;
}
