import { render } from "@testing-library/react";
import GraphicVioleta from '../../components/assets/graphic-violet';

describe("GraphicVioleta", () => {
  const wrapper = render(<GraphicVioleta />);
  it("Component render fine", () => {
    expect(wrapper).toBeTruthy();
  });
});
