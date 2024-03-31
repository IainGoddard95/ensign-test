export function stringToCurrency(input: number) {
    const formatter = new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
      });

      return formatter.format(input);
}