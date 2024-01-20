import { render } from "@testing-library/react";
import ArrowBack from "../../components/assets/arrow-back";

describe("ArrowBAck", () => {
  const wrapper = render(<ArrowBack onClick={undefined} />);
  it("Component render fine", () => {
    expect(wrapper).toBeTruthy();
  });
});
