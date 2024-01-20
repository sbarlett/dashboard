import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import ExportButton from "../../../components/buttons/filter-buttons/button-export";

describe("ExportButton", () => {
  const wrapper = render(<ExportButton />);
  wrapper.debug();
  it("Component render fine", () => {
    expect(wrapper).toBeTruthy();
    // expect(wrapper).toHaveTextContent('Exportar tabla')
  });
});
