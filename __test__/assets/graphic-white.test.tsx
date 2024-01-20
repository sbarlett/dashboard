import { render } from "@testing-library/react";
import GraphicWhite from "../../components/assets/graphic-white";

describe("GraphicWhite", () => {
  const wrapper = render(<GraphicWhite />);
  it("Component render fine", () => {
    expect(wrapper).toBeTruthy();
  });
});
