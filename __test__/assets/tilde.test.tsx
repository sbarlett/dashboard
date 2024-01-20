import { render } from "@testing-library/react";
import Tilde from "../../components/assets/tilde";

describe("Tilde", () => {
  const wrapper = render(<Tilde />);
  it("Component render fine", () => {
    expect(wrapper).toBeTruthy();
  });
});
