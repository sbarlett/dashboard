// ExportButton.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ExportButton from "../../../components/buttons/filter-buttons/button-export";

test("ButtonExport test", () => {
  const wrapper = render(<ExportButton />);
  const exportIcon = screen.getByTestId("export-icon");

  expect(wrapper).toBeTruthy();
  expect(screen.getByText("Exportar tabla")).toBeInTheDocument();
  expect(exportIcon).toBeInTheDocument();
});
