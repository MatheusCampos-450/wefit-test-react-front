export const formatBrazilianCurrency = (
  value: string | number,
  maximumFractionDigits: number = 2,
): string => {
  let cleanValue;

  if (typeof value === "string") {
    const cleanedValue = value
      ?.replace("R$ ", "")
      ?.replace(/\./g, "")
      ?.replace(",", ".");

    if (!cleanedValue) return "";

    cleanValue = cleanedValue;
  } else {
    cleanValue = value;
  }

  const transformValue = Number(cleanValue);

  const currencyFormatted = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: maximumFractionDigits,
  }).format(transformValue);

  return currencyFormatted;
};

export const convertPriceToNumber = (value: string): number => {
  const price = value?.replace(/[^0-9,]/g, "").replace(",", ".");

  return Number(price);
};

export const formatPrice = (value: string): string => {
  let price = value?.replace(/[^0-9]/g, "");
  const priceCleaned = String(Number(price));

  if (!value || !Number(price)) return "";

  if (priceCleaned?.length < 4) {
    price = priceCleaned?.padStart(4, "0");
  } else {
    price = priceCleaned;
  }

  price = `${price?.slice(0, -2)},${price?.slice(-2)}`;

  return price;
};
