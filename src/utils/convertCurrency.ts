/**
 * Converte o valor monetario em reais (BRL) para centavos
 * @param {string} amount - Valor monetario em reais a ser convertido
 * @returns {number} - Valor monetario em centavos
 */
export function convertRealToCents(amount: string) {
  const numericPrice = parseFloat(amount.replace(/\./g, "").replace(",", "."));
  const priceInCents = Math.round(numericPrice * 100);

  return priceInCents;
}
