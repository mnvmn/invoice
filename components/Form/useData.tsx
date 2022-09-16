import utils, {DateFormat} from '@shared/utils'
import {useEffect, useState} from 'react'

const pricePerUnit = 26.5
const count = 1
const LOCAL_STORAGE_KEY = 'invoice-data'

type OrderItem = [number, number, string]

const useForm = () => {
  const [data, setData] = useState({
    count,
    order: [
      // [pricePerUnit, 13, 'Development projektu RCM a technická podpora'],
      [pricePerUnit, 118, 'Development projektu ECU a technická podpora'],
    ] as OrderItem[],
    dateBilled: utils.formatDate(new Date(), DateFormat.en),
    dateDelivered: utils.formatDate(new Date(), DateFormat.en),
    daysDue: 16,
    title: '',
    iban: 'SK07 1100 0000 0029 4613 0841',
    registrationNr: '110-315729',
  })

  useEffect(() => {
    const localData = localStorage.getItem(LOCAL_STORAGE_KEY)
    const dataCopy = localData ? JSON.parse(localData) : {...data}
    const dateBilled = new Date()
    dateBilled.setFullYear(2022)
    dateBilled.setMonth(8)
    dateBilled.setDate(3)
    dataCopy.dateBilled = utils.formatDate(dateBilled, DateFormat.en)

    const dateDelivered = new Date()
    dateDelivered.setFullYear(2022)
    dateDelivered.setMonth(7)
    dateDelivered.setDate(31)
    dataCopy.dateDelivered = utils.formatDate(dateDelivered, DateFormat.en)

    setData(dataCopy)
  }, [])

  return {
    data,
    persistData: (newData: typeof data) => {
      console.log('newData', newData)
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newData))
    },
  }
}

export default useForm

export function getTotalPrice(order: OrderItem[]): number {
  return order.reduce((mem: number, item: OrderItem) => {
    return item[0] * item[1] + mem
  }, 0)
}

export type FormType = ReturnType<typeof useForm>
export type DataType = FormType['data']
