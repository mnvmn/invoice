export enum DateFormat {
  en = 'YYYY-MM-DD',
  sk = 'd.M.YYYY',
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
  formatDate: (inputDate: Date | string, format?: DateFormat) => {
    const date: Date = typeof inputDate === 'string' ? new Date(inputDate) : inputDate
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    switch (format) {
      case DateFormat.en:
        return `${year}-${('0' + month).slice(-2)}-${('0' + day).slice(-2)}`
      case DateFormat.sk:
      default:
        return `${day}.${month}.${year}`
    }
  },
  addDays: (inputDate: Date | string, days: number) => {
    const date: Date = typeof inputDate === 'string' ? new Date(inputDate) : inputDate
    date.setDate(date.getDate() + days)
    return date
  },
  getVariableSymbol: (inputDate: Date | string, count: number) => {
    const dateDelivered: Date = typeof inputDate === 'string' ? new Date(inputDate) : inputDate
    return `${dateDelivered.getFullYear()}000${count}`
  },
}

export default utils
