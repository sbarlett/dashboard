import { KeyboardEvent, MouseEvent, MouseEventHandler } from "react";
import { WithStyles } from "@material-ui/core";

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
  customersBuyByDay?: number;
  dayOperation?: string;
  monthOperation?: string;
  operationsDay?: number;
  date: string;
  totalAmountTransactions?: number
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
}

export interface ButtonsPropNav {
  title: string;
  route: string;
}

export interface ButtonNavBarProps {
  textButton: string;
  isFocused: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
  onKeyPress?: React.KeyboardEventHandler;
  tabIndex?: number
}

export interface SideBarButtonsProps {
  onClick: MouseEventHandler<HTMLDivElement>;
  isFocus: boolean;
  text: string;
  onKeyPress?: React.KeyboardEventHandler;
  tabIndex?: number
}

export interface ButtonProps {
  title: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  isFocused?: string | boolean;
  asset?: boolean;
  isClientButton?: boolean;
  key?: number;
  onKeyPress?: React.KeyboardEventHandler;
  tabIndex?: number
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

export interface ArrowProps {
  onClick?: MouseEventHandler<SVGSVGElement>;
}

export interface ButtonItem {
  button1?: string;
  button2?: string;
}


export interface MediaQuery {
  matches: boolean;
}