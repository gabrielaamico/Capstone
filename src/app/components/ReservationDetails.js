"use client";

import React, { useState } from "react";

const ReservationDetails = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ date, time, guests, occasion, specialRequests });
  };

  return (
    <section id="reservation-details" className="flex p-6">
      <div className="flex-1 mr-6">
        <h2 className="text-2xl font-bold mb-4">Reservation Details</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Date Field */}
          <div className="flex flex-col">
            <label htmlFor="date" className="mb-2 font-semibold">
              Date
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="p-2 border rounded-lg"
            />
          </div>

          {/* Time Field */}
          <div className="flex flex-col">
            <label htmlFor="time" className="mb-2 font-semibold">
              Time
            </label>
            <select
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="p-2 border rounded-lg"
            >
              <option value="">Select a time</option>
              <option value="12:00">12:00 PM</option>
              <option value="12:30">12:30 PM</option>
              <option value="1:00">1:00 PM</option>
              <option value="1:30">1:30 PM</option>
              {/* Add more time options as needed */}
            </select>
          </div>

          {/* Guests Field */}
          <div className="flex flex-col">
            <label htmlFor="guests" className="mb-2 font-semibold">
              Number of Guests
            </label>
            <select
              id="guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="p-2 border rounded-lg"
            >
              <option value="">Select number of guests</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          {/* Occasion Field */}
          <div className="flex flex-col">
            <label htmlFor="occasion" className="mb-2 font-semibold">
              Occasion
            </label>
            <select
              id="occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              className="p-2 border rounded-lg"
            >
              <option value="">Select an occasion</option>
              <option value="anniversary">Anniversary</option>
              <option value="engagement">Engagement</option>
              <option value="birthday">Birthday</option>
            </select>
          </div>

          {/* Special Requests Field */}
          <div className="flex flex-col">
            <label htmlFor="specialRequests" className="mb-2 font-semibold">
              Special Requests
            </label>
            <textarea
              id="specialRequests"
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
              className="p-2 border rounded-lg"
              rows="4"
              placeholder="Enter any special requests..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-yellow-500 text-white p-3 rounded-lg w-full mt-4"
          >
            Find a Table
          </button>
        </form>
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
