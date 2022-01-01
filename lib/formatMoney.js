

export default function formatMoney(cents) {
 let options = {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
 }

 if(cents % 100 === 0)  {
    options.minimumFractionDigits = 0;
 }
 const formatter = new Intl.NumberFormat('en-US', options);

  const dollars = cents / 100;
  return formatter.format(dollars);
}
