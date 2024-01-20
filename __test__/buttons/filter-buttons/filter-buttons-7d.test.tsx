// FilterButtons7D.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FilterButtons7D from "../../../components/buttons/filter-buttons/filter-buttons-7d";

// Mock del contexto para la prueba

test("Renderiza correctamente los botones de filtro para 7 días", () => {
  render(<FilterButtons7D />);

  // Realiza afirmaciones sobre la presencia de los botones específicos
  expect(screen.getByText("Todo")).toBeInTheDocument();
  expect(screen.getByText("Lunes")).toBeInTheDocument();
  // ... continúa con los demás días
});

test("Actualiza el día seleccionado al hacer clic en un botón", () => {
  render(<FilterButtons7D />);

  // Simula un clic en un botón específico
  fireEvent.click(screen.getByText("Lunes"));

  // Realiza afirmaciones para verificar si el día seleccionado se ha actualizado correctamente
  // Esto dependerá de cómo implementaste la lógica de actualización en tu contexto
  // Por ejemplo, podrías esperar que el día seleccionado sea "Lunes" después del clic.
  // Asegúrate de adaptar esta parte según tu lógica específica.
  const updatedDay = screen.getByText("Lunes"); // Ajusta según la lógica de tu aplicación
  expect(updatedDay).toHaveClass("clase-que-indica-que-esta-seleccionado");
  // Puedes ajustar las clases o atributos según cómo indiques visualmente que un botón está seleccionado.
});
