import { render } from "@testing-library/react";
import Calendario from "../../components/assets/calendario";

describe("Calendario", () => {
  const wrapper = render(<Calendario />);
  it("Component render fine", () => {
    expect(wrapper).toBeTruthy();
    
  });
});
