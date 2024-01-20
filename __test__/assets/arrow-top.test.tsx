import { render } from "@testing-library/react";
import ArrowTop from "../../components/assets/arrow-top";

describe("ArrowTop", () => {
  const wrapper = render(<ArrowTop onClick={undefined} />);
  it("Component render fine", () => {
    expect(wrapper).toBeTruthy();
  });
});
