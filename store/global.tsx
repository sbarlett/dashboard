import React from "react";
import { DashboardContextType } from "../utils/types";

const DashboardContext = React.createContext<DashboardContextType | null>(null);

const DashboardProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}: any) => {
  const [selectedDate, setSelectedDate] = React.useState<string>("hoy");
  const [selectedDay, setSelectedDay] = React.useState<string>("Todo");
  const [selectedGrafic, setSelectedGrafic] = React.useState<string>("Gráfico");
  const [selectedClient, setSelectedClient] =
    React.useState<string>("Clientes");

  const updateSelectedDate = (date: string) => {
    setSelectedDate(date);
  };

  const updateSelectedClient = (client: string) => {
    setSelectedClient(client);
  };

  const updateSelectedGrafic = (selec: string) => {
    setSelectedGrafic(selec);
  };

  const updateSelectedDay = (selec: string) => {
    setSelectedDay(selec);
  };

  const contextValue = {
    selectedDate,
    selectedClient,
    selectedGrafic,
    selectedDay,
    updateSelectedDate,
    updateSelectedClient,
    updateSelectedGrafic,
    updateSelectedDay,
  };

  return (
    <DashboardContext.Provider value={contextValue}>
      {children}
    </DashboardContext.Provider>
  );
};

const useDashboardContext = (): DashboardContextType => {
  return React.useContext(DashboardContext);
};

export { DashboardProvider, useDashboardContext };
