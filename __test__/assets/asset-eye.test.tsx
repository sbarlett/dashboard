import { render } from "@testing-library/react";
import AssetEye from '../../components/assets/asset-eye';

describe("AssetEye", () => {
  const wrapper = render(<AssetEye />);
  it("Component render fine", () => {
    expect(wrapper).toBeTruthy();
  });
});
