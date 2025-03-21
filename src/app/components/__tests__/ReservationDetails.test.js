import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ReservationDetails from "../ReservationDetails";

test("renders the Reservation Details heading", () => {
  render(<ReservationDetails />);

  // Check if the heading text exists
  const headingElement = screen.getByText(/Reservation Details/i);
  expect(headingElement).toBeInTheDocument();
});

test("renders the label for Date input field", () => {
  render(<ReservationDetails />);

  // Check if the label "Date" exists in the form
  const dateLabel = screen.getByLabelText(/Date/i);
  expect(dateLabel).toBeInTheDocument();
});
