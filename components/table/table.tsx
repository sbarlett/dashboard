import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDashboardContext } from "@/store/global";
import styles from "./styles/table.module.css";
import { hoursDay, normalizeTable, weekDays } from "@/utils/functions";
import useIsMobile from "@/hooks/useMobile";

function createData(row1: number, row2: number, row3: number, row4: number) {
  return { row1, row2, row3, row4 };
}

const rows = [
  createData(159, 6.0, 24, 400),
  createData(237, 9.0, 37, 1520),
  createData(262, 8222, 24, 10422),
  createData(262, 163, 24, 10415),
  createData(262, 1623, 24, 3521),
  createData(262, 1623, 24, 3521),
  createData(262, 1623, 24, 3521),
];

export default function ClientTable() {
  const { selectedDate } = useDashboardContext();
  const isMobile = useIsMobile();
  const columDate = selectedDate === "hoy" ? hoursDay : weekDays;
  return (
    <div className={styles.tableContainer}>
      {selectedDate === "hoy" || selectedDate === "7D" ? (
        <div className={styles.tablesWrapper}>
          {!isMobile && (
            <TableContainer component={Paper} className={styles.containerColum}>
              <div className={styles.textTable}>
                {selectedDate === "hoy" ? "Hoy" : "7 DÍAS"}
              </div>
              <Table
                sx={{ maxWidth: 480 }}
                aria-label="client table"
                className={styles.tableContainerColum}
              >
                <TableHead>
                  <TableRow className={styles.oneTable}>
                    <TableCell align="center" className={styles.columText}>
                      {normalizeTable(selectedDate)}
                    </TableCell>
                    {columDate.map((date, index) => (
                      <TableCell
                        key={index}
                        align="center"
                        className={
                          selectedDate === "hoy"
                            ? styles.columTextDates
                            : styles.columTextDates7D
                        }
                      >
                        {date}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
              </Table>
            </TableContainer>
          )}

          <TableContainer component={Paper} className={styles.tableContainer}>
            <div className={styles.textTable}>Clientes</div>
            <Table sx={{ maxWidth: 480 }} aria-label="client table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" className={styles.columText}>
                    Column
                  </TableCell>
                  <TableCell align="center" className={styles.columText}>
                    Column
                  </TableCell>
                  <TableCell align="center" className={styles.columText}>
                    Column
                  </TableCell>
                  <TableCell align="center" className={styles.columText}>
                    Total
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell align="center">{row.row2}</TableCell>
                    <TableCell align="center">{row.row3}</TableCell>
                    <TableCell align="center">{row.row4}</TableCell>
                    <TableCell align="center">{row.row4}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      ) : null}
    </div>
  );
}
