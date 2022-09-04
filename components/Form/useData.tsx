import constant from "@shared/const";
import { useEffect, useState } from "react";

const pricePerUnit = 10;
const data = {
  count: 1,
  order: [
    // [pricePerUnit, 13, 'Development projektu RCM a technická podpora'],
    [pricePerUnit, 118, "Development projektu ECU a technická podpora"],
  ] as [number, number, string][],
};

const useData = () => {
  const [dateDelivered, setDateDelivered] = useState(new Date());
  const [dateBilled, setDateBilled] = useState(new Date());
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    dateBilled.setFullYear(2022);
    dateBilled.setMonth(8);
    dateBilled.setDate(3);
    setDateBilled(dateBilled);

    dateDelivered.setFullYear(2022);
    dateDelivered.setMonth(7);
    dateDelivered.setDate(31);
    setDateDelivered(dateDelivered);

    setTitle(
      `Fakturujem Vám poskytnuté služby za mesiac ${
        constant.months[dateDelivered.getMonth()]
      } ${dateDelivered.getFullYear()}`
    );

    setTotalPrice(
      data.order.reduce((mem, item) => {
        return item[0] * item[1] + mem;
      }, 0)
    );
  });

  return {
    count: data.count,
    order: data.order,
    variableSymbol: `${dateDelivered.getFullYear()}000${data.count}`,
    totalPrice,
    dateBilled,
    dateDelivered,
    daysDue: 16,
    title,
    iban: "SK07 1100 0000 0029 4613 0841",
    registrationNr: "110-315729",
    // registrationNr: '110-303029',
    // iban: 'SK57 1100 0000 0029 3412 4639',
  };
};

export default useData;
