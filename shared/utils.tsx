export enum DateFormat {
  en = 'YYYY-MM-DD',
}

const utils = {
  formatPrice: (price: number) => {
    if (isNaN(price) || price === 0 || price === null) {
      return '0,00'
    } else {
      const fraction = price.toFixed(2).split('.')[1]
      const priceFormatted = parseInt(price.toString()).toLocaleString().replace(',', ' ')
      return priceFormatted + `,${('00' + fraction).slice(-2)}`
    }
  },
  formatDate: (input: Date | string, format?: DateFormat) => {
    const date: Date = typeof input === 'string' ? new Date(input) : input
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    switch (format) {
      case DateFormat.en:
        return `${year}-${('0' + month).slice(-2)}-${('0' + day).slice(-2)}`
      default:
        return `${day}.${month}.${year}`
    }
  },
  addDays: (input: Date | string, days: number) => {
    const date: Date = typeof input === 'string' ? new Date(input) : input
    date.setDate(date.getDate() + days)
    return date
  },
  getVariableSymbol: (input: Date | string, count: number) => {
    const dateDelivered: Date = typeof input === 'string' ? new Date(input) : input
    return `${dateDelivered.getFullYear()}000${count}`
  },
}

export default utils
