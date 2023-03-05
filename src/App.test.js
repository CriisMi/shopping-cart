import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Home page", () => {
  it("renders the items", () => {
    render(<App />);

    const listItems = screen.getAllByRole("listitem");

    expect(listItems).toHaveLength(6);
  });
});
