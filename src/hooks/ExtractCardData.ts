export function extractChildCardData(text: string) {
  // 줄바꿈 기준으로 텍스트 나누기
  const lines = text.split('\n').map(line => line.trim()).filter(line => line.length > 0);

  // 예상: lines[0] = 카드번호, lines[1] = 만료일, lines[2] = CVC
  let cardNum: string | null = null;
  let cardExpiry: string | null = null;
  let cardCVC: string | null = null;

  if (lines.length >= 1) {
    cardNum = lines[0].replace(/\s|-/g, '');
  }
  if (lines.length >= 2) {
    cardExpiry = lines[1];
  }
  if (lines.length >= 3) {
    cardCVC = lines[2];
  }

  const cardData = {
    cardNum,
    cardExpiry,
    cardCVC,
  };
  return cardData;
}
