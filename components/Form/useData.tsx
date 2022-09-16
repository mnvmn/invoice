import constant from '@shared/const'
import {useEffect, useState} from 'react'

const pricePerUnit = 26.5
const count = 1

type OrderItem = [number, number, string]

const useForm = () => {
  const [data, setData] = useState({
    count,
    order: [
      // [pricePerUnit, 13, 'Development projektu RCM a technická podpora'],
      [pricePerUnit, 118, 'Development projektu ECU a technická podpora'],
    ] as OrderItem[],
    dateBilled: new Date(),
    dateDelivered: new Date(),
    daysDue: 16,
    title: '',
    iban: 'SK07 1100 0000 0029 4613 0841',
    registrationNr: '110-315729',
  })

  useEffect(() => {
    const dataCopy = {...data}

    dataCopy.dateBilled.setFullYear(2022)
    dataCopy.dateBilled.setMonth(8)
    dataCopy.dateBilled.setDate(3)

    dataCopy.dateDelivered.setFullYear(2022)
    dataCopy.dateDelivered.setMonth(7)
    dataCopy.dateDelivered.setDate(31)

    dataCopy.title = `Fakturujem Vám poskytnuté služby za mesiac ${
      constant.months[dataCopy.dateDelivered.getMonth()]
    } ${dataCopy.dateDelivered.getFullYear()}`

    setData(dataCopy)
  }, [])

  return {
    data,
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
