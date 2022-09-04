const utils = {
  formatPrice: (price: number) => {
    const fraction = price.toFixed(2).split('.')[1]
    const priceFormatted = parseInt(price.toString()).toLocaleString().replace(',', ' ')
    return priceFormatted + `,${('00' + fraction).slice(-2)}`
  },
  formatDate: (date: Date) => {
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    return `${day}.${month}.${year}`
  },
  addDays: (date: Date, days: number) => {
    const result = new Date(date)
    result.setDate(result.getDate() + days)
    return result
  },
}

export default utils
