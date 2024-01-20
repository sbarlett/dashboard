import { render } from "@testing-library/react";
import StarWhite from "../../components/assets/star-white";

describe("StarWhite", () => {
  const wrapper = render(<StarWhite />);
  it("Component render fine", () => {
    expect(wrapper).toBeTruthy();
  });
});
