import React from "react";
import { render, fireEvent } from "@testing-library/react";
import IconArrowSideBar from "../arrow-navbar";

describe("IconArrowSideBar component", () => {
  it("renders without crashing", () => {
    const { getByTestId } = render(<IconArrowSideBar onClick={undefined} />);
    const icon = getByTestId("icon-arrow-sidebar") as HTMLElement;
    expect(icon).toBeDefined();
  });

  it("calls onClick prop when clicked", () => {
    const mockClick = jest.fn();
    const { getByTestId } = render(<IconArrowSideBar onClick={mockClick} />);
    const icon = getByTestId("icon-arrow-sidebar") as HTMLElement;
    fireEvent.click(icon);
    expect(mockClick).toHaveBeenCalled();
  });

  it("renders with custom onClick prop", () => {
    const mockClick = jest.fn();
    const { getByTestId } = render(<IconArrowSideBar onClick={mockClick} />);
    const icon = getByTestId("icon-arrow-sidebar") as HTMLElement;
    expect(icon).toContain("onClick");
  });
});
