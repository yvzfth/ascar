export default function separateThreeDigitsWithDot(price: number) {
  const priceString = price?.toString();
  const priceStringWithDots = priceString?.replace(
    /(\d)(?=(\d{3})+(?!\d))/g,
    '$1.'
  );
  return priceStringWithDots;
}
