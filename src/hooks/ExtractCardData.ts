
export function extractChildCardData(text: string) {
  const cardNumberRegex = /(\d{4}[\s-]?){3,4}\d{4}/;
  const expiryRegex = /(0[1-9]|1[0-2])\/?([0-9]{2})/;
  const nameRegex = /([A-Z]+\s?)+/;
  const cvcRegex = /\b\d{3}\b/;

  const cardNumMatch = text.match(cardNumberRegex);
  const cardExpiryMatch = text.match(expiryRegex);
  const cvcMatch = text.match(cvcRegex);

  let name: string | null = null;
  if (cardExpiryMatch) {
    const afterExpiryText = text.slice(text.indexOf(cardExpiryMatch[0]) + cardExpiryMatch[0].length);
    const nameMatch = afterExpiryText.match(nameRegex);
    if (nameMatch) name = nameMatch[0].trim();
  }

  return {
    cardNum: cardNumMatch ? cardNumMatch[0].replace(/\s|-/g, "") : null,
    cardExpiry: cardExpiryMatch ? cardExpiryMatch[0] : null,
    cardHolder: name,
    cardCVC: cvcMatch ? cvcMatch[0] : null,
  };
}
