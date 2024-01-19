// import * as React from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import { useDashboardContext } from "@/store/global";
// import styles from "./styles/table.module.css";
// import { hoursDay, normalizeTable, weekDays } from "@/utils/functions";
// import useIsMobile from "@/hooks/useMobile";
// import { Container, Grid } from "@material-ui/core";

// function createData(row1: number, row2: number, row3: number, row4: number) {
//   return { row1, row2, row3, row4 };
// }

// const rows = [
//   createData(159, 6.0, 24, 400),
//   createData(237, 9.0, 37, 1520),
//   createData(262, 8222, 24, 10422),
//   createData(262, 163, 24, 10415),
//   createData(262, 1623, 24, 3521),
//   createData(262, 1623, 24, 3521),
//   createData(262, 1623, 24, 3521),
// ];

// export default function ClientTable() {
//   const { selectedDate } = useDashboardContext();
//   const isMobile = useIsMobile();
//   const columDate = selectedDate === "hoy" ? hoursDay : weekDays;
//   return (
//     <div className={styles.tableContainer}>
//       {selectedDate === "hoy" || selectedDate === "7D" ? (
//         <div className={styles.tablesWrapper}>
//           {!isMobile && (
//             <Grid item className={styles.containerColum}>
//               <div className={styles.textTable}>
//                 {selectedDate === "hoy" ? "Hoy" : "7 DÍAS"}
//               </div>
//               <Grid className={styles.tableContainerColum}>
//                 <Grid item className={styles.tableWrapper}>
//                   <Grid className={styles.oneTable}>
//                     <Grid className={styles.columText}>
//                       {normalizeTable(selectedDate)}
//                     </Grid>
//                     {columDate.map((date, index) => (
//                       <Grid
//                         item
//                         key={index}
//                         className={
//                           selectedDate === "hoy"
//                             ? styles.textColumnDates
//                             : styles.textColumnDates7D
//                         }
//                       >
//                         <Container>{date}</Container>
//                       </Grid>
//                     ))}
//                   </Grid>
//                 </Grid>
//               </Grid>
//             </Grid>
//           )}

//           <Grid
//             item
//             component={Paper}
//             className={styles.tableContainer}
//             style={{ backgroundColor: "#e6e1e6" }}
//           >
//             <div className={styles.textTable}>Clientes</div>
//             <Grid item aria-label="client table">
//               <Grid>
//                 <Grid item style={{ display: "flex" }}>
//                   <div style={{ display: "flex", padding: "15px" }}>Column</div>
//                   <div style={{ display: "flex", padding: "15px" }}>Column</div>
//                   <div style={{ display: "flex", padding: "15px" }}>Column</div>
//                   <div style={{ display: "flex", padding: "15px" }}>Total</div>
//                 </Grid>
//               </Grid>
//               <TableBody>
//                 {rows.map((row, index) => (
//                   <TableRow key={index}>
//                     <TableCell style={{ paddingInline: "25px" }}>
//                       {row.row2}
//                     </TableCell>
//                     <TableCell style={{ paddingInline: "25px" }} align="center">
//                       {row.row3}
//                     </TableCell>
//                     <TableCell
//                       align="center"
//                       style={{ paddingInline: "25px", paddingTop: "20px" }}
//                     >
//                       {row.row4}
//                     </TableCell>
//                     <TableCell align="center" style={{ paddingInline: "25px" }}>
//                       {row.row4}
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Grid>
//           </Grid>
//         </div>
//       ) : null}
//     </div>
//   );
// }
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useDashboardContext } from "@/store/global";
import { normalizeTable } from "@/utils/functions";
import useIsMobile from "@/hooks/useMobile";

// interface Column {
//   id: "name" | "code" | "comlum1" | "size" | "density";
//   label: string;
//   minWidth?: number;
//   align?: "right";
//   format?: (value: number) => string;
// }

// interface Data {
//   name: string;
//   code: string;
//   comlum1: number;
//   size: number;
//   density: number;
// }

function createData(
  name: string,
  column1: number,
  column2: number,
  column3: number,
  column4: number,
  total: number
) {
  return { name, column1, column2, column3, column4, total };
}

const rows = [
  createData("00:00 - 04:00", 1323, 154, 363, 231, 8541),
  createData("04:00 - 08:00", 222, 365, 961, 231, 8541),
  createData("08:00 - 12:00", 522, 6973, 121, 803, 8541),
  createData("12:00 - 16:00", 444, 1334, 2220, 453, 8541),
  createData("16:00 - 20:00", 532, 103, 671, 456, 8541),
  createData("20:00 - 00:00", 24, 200, 702, 123, 8541),
  ,
];

const rowsSevenDays = [
  createData("Lunes", 1323, 154, 363, 854, 8541),
  createData("Martes", 222, 365, 961, 5874, 8541),
  createData("Miercoles", 522, 6973, 340, 5464, 8541),
  createData("Jueves", 444, 1334, 2020, 5824, 8541),
  createData("Viernes", 532, 103, 670, 5874, 8541),
  createData("Sabado", 24, 200, 7024, 5821, 8541),
  createData("Domingo", 24, 200, 7024, 5852, 8541),
  ,
];

export default function ColumnGroupingTable() {
  const { selectedDate } = useDashboardContext();
  const isMobile = useIsMobile();

  const columns: any[] = [
    {
      id: "name",
      label: `${normalizeTable(selectedDate)}`,
      minWidth: `${!isMobile ? 30 : 10}`,
      align: "center",
    },
    {
      id: "column1",
      label: "Column",
      minWidth: `${!isMobile ? 30 : 10}`,

      align: "center",
      format: (value: number) => value.toFixed(0),
    },
    {
      id: "column2",
      label: "Column",
      minWidth: `${!isMobile ? 30 : 10}`,

      align: "center",
      format: (value: number) => value.toFixed(0),
    },
    {
      id: "column3",
      label: "Column",
      minWidth: `${!isMobile ? 30 : 10}`,

      align: "center",
      format: (value: number) => value.toFixed(0),
    },
    { id: "column4", label: "Column", minWidth: `${!isMobile ? 30 : 10}` },
    { id: "total", label: "Total", minWidth: `${!isMobile ? 30 : 10}` },
  ];
  const columnValidate = selectedDate === "hoy" ? rows : rowsSevenDays;
  return (
    <Paper
      sx={{
        maxWidth: `${!isMobile ? "1390px" : "320px"}`,
        backgroundColor: "#e6e1e6",
        marginTop: "30px",
        borderRadius: "10px",
        margin: "0 auto",
        marginBottom: '30px'
      }}
    >
      <TableContainer
        sx={{ maxHeight: 805, overflowY: "hidden", overflowX: "hidden" }}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell
                align="left"
                colSpan={2}
                style={{
                  backgroundColor: "#e6e1e6",
                  borderRadius: "10px 0px 0px 0px",
                  paddingLeft: "40px",
                }}
              >
                {selectedDate === "hoy" ? "Hoy" : "7 DÍAS"}
              </TableCell>
              <TableCell
                align={`${isMobile ? "left" : "center"}`}
                colSpan={3}
                style={{ backgroundColor: "#e6e1e6" }}
              >
                Clientes
              </TableCell>
            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    top: 57,
                    minWidth: column.minWidth,
                    backgroundColor: "#e6e1e6",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {columnValidate.map((row, index) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{
                          backgroundColor: "#e6e1e6",
                        }}
                      >
                        {column.format && typeof value === "number"
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
