export function createData(
  name: string,
  column1: number,
  column2: number,
  column3: number,
  column4: number,
  total: number
) {
  return { name, column1, column2, column3, column4, total };
}

export const rows = [
  createData("00:00 - 04:00", 1323, 154, 363, 231, 8541),
  createData("04:00 - 08:00", 222, 365, 961, 231, 8541),
  createData("08:00 - 12:00", 522, 6973, 121, 803, 8541),
  createData("12:00 - 16:00", 444, 1334, 2220, 453, 8541),
  createData("16:00 - 20:00", 532, 103, 671, 456, 8541),
  createData("20:00 - 00:00", 24, 200, 702, 123, 8541),
  ,
];

export const rowsSevenDays = [
  createData("Lunes", 1323, 154, 363, 854, 8541),
  createData("Martes", 222, 365, 961, 5874, 8541),
  createData("Miercoles", 522, 6973, 340, 5464, 8541),
  createData("Jueves", 444, 1334, 2020, 5824, 8541),
  createData("Viernes", 532, 103, 670, 5874, 8541),
  createData("Sabado", 24, 200, 7024, 5821, 8541),
  createData("Domingo", 24, 200, 7024, 5852, 8541),
  ,
];

