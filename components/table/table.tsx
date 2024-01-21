import * as React from "react";
import { rows, rowsSevenDays } from "./utils/functions";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useDashboardContext } from "../../store/global";
import useIsMobile from "../../hooks/useMobile";
import { normalizeTable } from "../../utils/functions";

export default function ColumnGroupingTable() {
  const { selectedDate } = useDashboardContext();
  const isMobile = useIsMobile();

  const dataColums: any[] = [
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
        marginBottom: "30px",
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
              {dataColums.map((column) => (
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
                  {dataColums.map((column) => {
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
