"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ReservationDetails = () => {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    date: Yup.string().required("Date is required"),
    time: Yup.string().required("Time is required"),
    guests: Yup.number()
      .min(1, "At least 1 guest is required")
      .max(10, "Maximum 10 guests allowed")
      .required("Guest count is required"),
    occasion: Yup.string().required("Please select an occasion"),
    specialRequests: Yup.string().max(300, "Maximum 300 characters allowed"),
  });

  return (
    <section id="reservation-details" className="flex p-6">
      <div className="flex-1 mr-6">
        <h2 className="text-2xl font-bold mb-4">Reservation Details</h2>

        <Formik
          initialValues={{
            date: "",
            time: "",
            guests: "",
            occasion: "",
            specialRequests: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            console.log("Form submitted:", values);
            alert("Reservation successful!");
            resetForm();
          }}
        >
          {({ isValid }) => (
            <Form className="space-y-4">
              {/* Date Field */}
              <div className="flex flex-col">
                <label htmlFor="date" className="mb-2 font-semibold">
                  Date
                </label>
                <Field
                  type="date"
                  id="date"
                  name="date"
                  min={new Date().toISOString().split("T")[0]} // Disable past dates
                  className="p-2 border rounded-lg"
                />
                <ErrorMessage
                  name="date"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Time Field */}
              <div className="flex flex-col">
                <label htmlFor="time" className="mb-2 font-semibold">
                  Time
                </label>
                <Field
                  as="select"
                  id="time"
                  name="time"
                  className="p-2 border rounded-lg"
                >
                  <option value="">Select a time</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="12:30">12:30 PM</option>
                  <option value="1:00">1:00 PM</option>
                  <option value="1:30">1:30 PM</option>
                </Field>
                <ErrorMessage
                  name="time"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Guests Field */}
              <div className="flex flex-col">
                <label htmlFor="guests" className="mb-2 font-semibold">
                  Number of Guests
                </label>
                <Field
                  type="number"
                  id="guests"
                  name="guests"
                  min="1"
                  max="10"
                  className="p-2 border rounded-lg"
                />
                <ErrorMessage
                  name="guests"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Occasion Field */}
              <div className="flex flex-col">
                <label htmlFor="occasion" className="mb-2 font-semibold">
                  Occasion
                </label>
                <Field
                  as="select"
                  id="occasion"
                  name="occasion"
                  className="p-2 border rounded-lg"
                >
                  <option value="">Select an occasion</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="engagement">Engagement</option>
                  <option value="birthday">Birthday</option>
                </Field>
                <ErrorMessage
                  name="occasion"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Special Requests Field */}
              <div className="flex flex-col">
                <label htmlFor="specialRequests" className="mb-2 font-semibold">
                  Special Requests
                </label>
                <Field
                  as="textarea"
                  id="specialRequests"
                  name="specialRequests"
                  rows="4"
                  className="p-2 border rounded-lg"
                  placeholder="Enter any special requests..."
                />
                <ErrorMessage
                  name="specialRequests"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-yellow-500 text-white p-3 rounded-lg w-full mt-4 disabled:bg-gray-400"
                disabled={!isValid}
              >
                Find a Table
              </button>
            </Form>
          )}
        </Formik>
      </div>

      {/* Image on the right */}
      <div className="flex-1">
        <img
          src="/hero.jpg"
          alt="Restaurant"
          width={400}
          height={600}
          className="object-cover rounded-lg"
        />
      </div>
    </section>
  );
};

export default ReservationDetails;
