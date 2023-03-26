export function verifyPrice(price: string) {
  const values = {
    '0,00': 'A combinar',
    NaN: 'A combinar',
    '': 'A combinar',
  };

  if (values[price] === '0,00' || values[price] === 'NaN' || !values[price]) {
    return `R$ ${price}`;
  } else {
    return values[price];
  }
}

export function createHtmlElementRed(text, valueState: string) {
  return valueState ? <span style={{ color: '#eb2d2d' }}>{text}: </span> : '';
}

export function createNumberHtmlElementRed(text, valueState: number) {
  return valueState ? <span style={{ color: '#eb2d2d' }}>{text}: </span> : '';
}
