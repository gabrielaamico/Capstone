import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import ReservationDetails from "../ReservationDetails";
import userEvent from "@testing-library/user-event";
import { Formik } from "formik";

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

describe("ReservationDetails Form", () => {
  test("should render all form fields", () => {
    render(<ReservationDetails />);

    expect(screen.getByLabelText(/Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of Guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Special Requests/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Find a Table/i })
    ).toBeInTheDocument();
  });

  test("should display error messages for required fields when submitted with empty fields", async () => {
    render(<ReservationDetails />);

    const submitButton = screen.getByRole("button", { name: /Find a Table/i });

    // Click the submit button without filling out the form
    userEvent.click(submitButton);

    // Check if validation errors are displayed
    await waitFor(() =>
      expect(screen.getByText(/Date is required/i)).toBeInTheDocument()
    );
    await waitFor(() =>
      expect(screen.getByText(/Time is required/i)).toBeInTheDocument()
    );
    await waitFor(() =>
      expect(screen.getByText(/Guest count is required/i)).toBeInTheDocument()
    );
    await waitFor(() =>
      expect(screen.getByText(/Please select an occasion/i)).toBeInTheDocument()
    );
  });

  test("should submit the form with valid inputs", async () => {
    render(<ReservationDetails />);

    // Fill in the form with valid data
    userEvent.type(screen.getByLabelText(/Date/i), "2025-03-25");
    userEvent.selectOptions(screen.getByLabelText(/Time/i), "12:00");
    userEvent.selectOptions(screen.getByLabelText(/Number of Guests/i), "4");
    userEvent.selectOptions(screen.getByLabelText(/Occasion/i), "birthday");
    userEvent.type(
      screen.getByLabelText(/Special Requests/i),
      "Vegan options, please!"
    );

    const submitButton = screen.getByRole("button", { name: /Find a Table/i });

    // Click the submit button
    userEvent.click(submitButton);

    // Wait for submission logic (here, we're simply logging the values)
    await waitFor(() =>
      expect(screen.queryByText(/Date is required/i)).not.toBeInTheDocument()
    );
    await waitFor(() =>
      expect(screen.queryByText(/Time is required/i)).not.toBeInTheDocument()
    );
    await waitFor(() =>
      expect(
        screen.queryByText(/Guest count is required/i)
      ).not.toBeInTheDocument()
    );
    await waitFor(() =>
      expect(
        screen.queryByText(/Please select an occasion/i)
      ).not.toBeInTheDocument()
    );

    // You can also spy on console logs or mock API calls if needed
  });

  test("should disable submit button if form is invalid", async () => {
    render(<ReservationDetails />);

    const submitButton = screen.getByRole("button", { name: /Find a Table/i });

    // Ensure submit button is initially disabled
    expect(submitButton).toBeDisabled();

    // Simulate filling in some form fields
    userEvent.type(screen.getByLabelText(/Date/i), "2025-03-25");
    userEvent.selectOptions(screen.getByLabelText(/Time/i), "12:00");

    // Ensure the button is still disabled due to missing other fields
    expect(submitButton).toBeDisabled();

    // Fill in all required fields
    userEvent.selectOptions(screen.getByLabelText(/Number of Guests/i), "4");
    userEvent.selectOptions(screen.getByLabelText(/Occasion/i), "birthday");

    // Now, the button should be enabled
    expect(submitButton).toBeEnabled();
  });
});
