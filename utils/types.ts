import { WithStyles } from "@material-ui/core";
import { KeyboardEvent, MouseEvent, MouseEventHandler } from "react";

export interface DashboardContextType {
  selectedDate?: string;
  selectedClient?: string;
  selectedGrafic?: string;
  selectedDay?: string;
  updateSelectedDate?: (date: string) => void;
  updateSelectedClient?: (client: string) => void;
  updateSelectedGrafic?: (selec: string) => void;
  updateSelectedDay?: (selec: string) => void;
}

export interface Transaction {
  customersBuyByDay: number;
  totalAmountTransactions: number;
  date: string;
  dayOperation: string;
  monthOperation: string;
}

export interface RenderedInfo {
  mes: string;
  acumulado: AccumulatedData;
  facturado: FacturationData[];
}

export interface AccumulatedData {
  clientesTotal: number;
  ventasTotales: number;
  montoTotal: number;
}

export interface FacturationData {
  fecha: string;
  ventas: number;
}

export interface DataOperationProps {
  data: Array<Transaction>;
}

export interface ButtonsProp {
  title: string;
  tag: any;
}

export interface ButtonsPropNav {
  title: string;
  route: string;
  tag: any;
}

export interface ButtonNavBarProps {
  textButton: string;
  isFocused: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
}

export interface SideBarButtonsProps {
  onClick: MouseEventHandler<HTMLDivElement>;
  isFocus: boolean;
  text: string;
}

export interface ButtonProps {
  title: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  isFocused?: string | boolean;
  asset?: boolean;
  isClientButton?: boolean;
  key?: number;
}
export interface DrawerComponentProps extends WithStyles {
  left: boolean;
  toggleDrawerHandler: (event: KeyboardEvent | MouseEvent) => void;
}

export interface ToolbarComponentProps {
  openDrawerHandler: MouseEventHandler<HTMLButtonElement>;
}

export interface DataOperation {
  data: any;
  isError: boolean;
  isLoading: boolean;
}
