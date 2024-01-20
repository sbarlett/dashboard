import { render } from "@testing-library/react";
import StartViolet from '../../components/assets/star-violet';

describe("StartViolet", () => {
  const wrapper = render(<StartViolet />);
  it("Component render fine", () => {
    expect(wrapper).toBeTruthy();
  });
});
