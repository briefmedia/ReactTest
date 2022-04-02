import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactsList from "components/contacts-list";

describe("Contacts List", () => {
  it("renders a heading", () => {
    render(<ContactsList />);

    const heading = screen.getByText("Contacts Manager");
    const author = screen.getByText("By: Thomas Kay");

    expect(heading).toBeInTheDocument();
    expect(author).toBeInTheDocument();
  });
});
