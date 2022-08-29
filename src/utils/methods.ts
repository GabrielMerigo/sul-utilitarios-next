export function verifyPrice(price: string){
  const values = {
    '0,00': 'A combinar',
    'NaN': 'A combinar',
    '': 'A combinar'
  }

  if(values[price] === '0,00' || values[price] === 'NaN' || !values[price]){
    return `R$ ${price}`
  }else{
    return values[price]
  }
}