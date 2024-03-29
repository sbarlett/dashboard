import { Transaction } from "../../../utils/types";
import { months, today, weekDays } from "../../../utils/functions";

export function getValueTransaccion(
  data: Array<Transaction>,
  selectDate: string,
  day?: string
) {
  return selectDate === "hoy"
    ? getOperations(data, selectDate)?.map(
        (item: any) => item.totalAmountTransactions
      )
    : selectDate === "7D"
    ? getOperations(data, selectDate, day)
        ?.map((item: any) => item.totalAmountTransactions)
        .slice(0, 7)
    : selectDate === "EsteMes"
    ? getOperations(data, selectDate, day)
        ?.map((item: any) => item.totalAmountTransactions)
        .slice(0, 31)
    : selectDate === "6M"
    ? getOperations(data, selectDate, day)
        ?.map((item: any) => item.totalAmountTransactions)
        .slice(0, 6)
    : selectDate === "YTD/YTG"
    ? getOperations(data, selectDate, day)
        ?.map((item: any) => item.totalAmountTransactions)
        .slice(0, 1)
    : selectDate === "1A" || selectDate === "MAX"
    ? getOperations(data, selectDate, day)
        ?.map((item: any) => item.totalAmountTransactions)
        .slice(0, 12)
    : [];
}

export function getValueCustomers(
  data: Array<Transaction>,
  selectDate: string,
  day?: string
) {
  return selectDate === "hoy"
    ? getOperations(data, selectDate)?.map(
        (item: any) => item.customersBuyByDay
      )
    : selectDate === "7D"
    ? getOperations(data, selectDate, day)
        ?.map((item: any) => item.customersBuyByDay)
        .slice(0, 7)
    : selectDate === "EsteMes"
    ? getOperations(data, selectDate, day)
        ?.map((item: any) => item.customersBuyByDay)
        .slice(0, 31)
    : selectDate === "6M"
    ? getOperations(data, selectDate, day)
        ?.map((item: any) => item.customersBuyByDay)
        .slice(0, 6)
    : selectDate === "1A" || selectDate === "MAX"
    ? getOperations(data, selectDate, day)
        ?.map((item: any) => item.customersBuyByDay)
        .slice(0, 12)
    : [];
}

export function getValueAllData(
  data: Array<Transaction>,
  selectDate: string,
  day?: string
) {
  return selectDate === "hoy"
    ? getOperations(data, selectDate, day)
    : selectDate === "7D"
    ? acumulateDataForDays(data, selectDate, day)
    : selectDate === "EsteMes"
    ? acumulateDataForDays(data, selectDate, day)
    : selectDate === "6M"
    ? acumulateDataForMonths(data, selectDate)
    : selectDate === "YTD/YTG"
    ? getOperations(data, selectDate).slice(0, 1)
    : selectDate === "1A" || selectDate === "MAX"
    ? acumulateDataForMonths(data, selectDate)
    : [{}];
}

export function getDaysActuallyMonth() {
  const diasEnString = [];
  const today = new Date();
  const mesActual = today.getMonth();
  const ultimoDiaMes = new Date(
    today.getFullYear(),
    mesActual + 1,
    0
  ).getDate();
  for (let i = 1; i <= ultimoDiaMes; i++) {
    const diaEnString = `${i} de ${months[mesActual]}`;
    diasEnString.push(diaEnString);
  }
  return diasEnString;
}

export const getOperations = (
  data: Array<Transaction>,
  type?: string,
  day?: string
) => {
  const operationsNextSevenDays = findOperations7D(data);
  switch (type) {
    case "hoy":
      return findOperationByDay(data);
    case "7D":
      return findOperation7DByDay(operationsNextSevenDays, day);
    case "EsteMes":
      return findOperationActuallyMonth(data);
    case "6M":
      return findOperationsSixMonths(data);
    case "YTD/YTG":
      return data;
    case "1A":
      return data;
    case "MAX":
      return data;
    default:
      return [{}];
  }
};

function findOperationByDay(data: Array<Transaction>) {
  return data?.filter((transaction) => transaction.date.startsWith(today));
}

function findOperations7D(data: Array<Transaction>) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const next7Days = new Date();
  next7Days.setDate(today.getDate() + 7);
  next7Days.setHours(0, 0, 0, 0);

  return data?.filter((transaction) => {
    const transactionDate = new Date(transaction.date);
    return transactionDate >= today && transactionDate <= next7Days;
  });
}

function findOperation7DByDay(data: Array<Transaction>, day: string = "Todo") {
  const selectedDayIndex = weekDays.indexOf(day);

  if (day === "Todo") {
    return data;
  }
  if (selectedDayIndex !== -1) {
    const selectedDayOperation = data.find((transaction) => {
      const fechaTransaccion = new Date(transaction.date);
      const nombreDiaSemana = weekDays[fechaTransaccion.getDay()];
      return nombreDiaSemana === day;
    });

    return selectedDayOperation ? [selectedDayOperation] : [];
  } else {
    return [{}];
  }
}

function findOperationActuallyMonth(data: Array<Transaction>) {
  return data?.filter((transaction) => {
    const fechaTransaccion = new Date(transaction.date);
    const hoy = new Date();

    return (
      fechaTransaccion.getMonth() === hoy.getMonth() &&
      fechaTransaccion.getFullYear() === hoy.getFullYear()
    );
  });
}

function findOperationsSixMonths(data: Array<Transaction>) {
  return data?.filter((transaction) => {
    const fechaTransaccion = new Date(transaction.date);
    const hoy = new Date();
    const limiteFecha = new Date();
    limiteFecha.setMonth(hoy.getMonth() + 5);

    return fechaTransaccion >= hoy && fechaTransaccion < limiteFecha;
  });
}

export const filterAndAccumulateByYear = (data: Array<Transaction>, year) => {
  return data
    .filter((dato) => {
      const operationDate = new Date(dato?.date);
      return operationDate.getFullYear() === year;
    })
    .reduce((accumulated, dato) => {
      return accumulated + dato.totalAmountTransactions || 0;
    }, 0);
};

export function acumulateDataForDays(
  data: Array<Transaction>,
  selectDate: string,
  day: string
) {
  const res = getOperations(data, selectDate, day)?.reduce(
    (accumulator, currentValue: any) => {
      const dayOperation = currentValue?.dayOperation;

      if (!accumulator[dayOperation]) {
        accumulator[dayOperation] = {
          customersBuyByDay: 0,
          totalAmountTransactions: 0,
          operationsDay: 0,
          dayOperation,
        };
      }

      accumulator[dayOperation].customersBuyByDay +=
        currentValue.customersBuyByDay;
      accumulator[dayOperation].totalAmountTransactions +=
        currentValue.totalAmountTransactions;
      accumulator[dayOperation].operationsDay += currentValue.operationsDay;

      return accumulator;
    },
    {}
  );
  return Object.values(res);
}

export function acumulateDataForMonths(
  data: Array<Transaction>,
  selectDate: string,
  day?: string
) {
  const res = getOperations(data, selectDate, day).reduce(
    (accumulator, currentValue: any) => {
      const monthOperation = currentValue.monthOperation;

      if (!accumulator[monthOperation]) {
        accumulator[monthOperation] = {
          customersBuyByDay: 0,
          totalAmountTransactions: 0,
          operationsDay: 0,
          monthOperation,
        };
      }

      accumulator[monthOperation].customersBuyByDay +=
        currentValue.customersBuyByDay;
      accumulator[monthOperation].totalAmountTransactions +=
        currentValue.totalAmountTransactions;
      accumulator[monthOperation].operationsDay += currentValue.operationsDay;

      return accumulator;
    },
    {}
  );
  return Object.values(res);
}
