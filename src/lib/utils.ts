export function formatPrice(amount: number, currency = "MUR"): string {
  return new Intl.NumberFormat("en-MU", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function generateLensPowers(
  min: number,
  max: number,
  step: number
): string[] {
  const powers: string[] = [];
  for (let val = min; val <= max; val = Math.round((val + step) * 100) / 100) {
    const str = val >= 0 ? `+${val.toFixed(2)}` : val.toFixed(2);
    powers.push(str);
  }
  return powers;
}

export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength).trimEnd() + "…";
}
