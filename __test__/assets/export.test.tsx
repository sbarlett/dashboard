import { render } from "@testing-library/react";
import Export from "../../components/assets/export";

describe("Export", () => {
  const wrapper = render(<Export />);
  it("Component render fine", () => {
    expect(wrapper).toBeTruthy();
  });
});
