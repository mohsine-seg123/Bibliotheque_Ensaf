import React, { useState } from "react";
import "./Reserver.css";
import { useNavigate } from "react-router-dom";

export default function Reserver() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    cne: "",
    startDate: "",
    endDate: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const navigate=useNavigate();

  const handleReserveClick = (e) => {
    e.stopPropagation();
    navigate("/home");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.cne ||
      !form.startDate ||
      !form.endDate
    ) {
      alert("Please fill in all fields.");
    }

    setSubmitted(true);
  };

  return (
    <div className="reserver">
      <div className="reservation-container">
        <h2>📚 Book Reservation</h2>

        {submitted ? (
          <div className="success-message">
            <h3>Reservation Confirmed ✔</h3>

            <p>
              <strong>Name:</strong> {form.name}
            </p>
            <p>
              <strong>Email:</strong> {form.email}
            </p>
            <p>
              <strong>CNE:</strong> {form.cne}
            </p>
            <p>
              <strong>Pick-up Date:</strong> {form.startDate}
            </p>
            <p>
              <strong>Return Date:</strong> {form.endDate}
            </p>

            <button onClick={() => setSubmitted(false)}>
              Make Another Reservation
            </button>
          </div>
        ) : (
          <form className="reservation-form" onSubmit={handleSubmit}>
            <label>Full Name:</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
            />

            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />

            <label>CNE:</label>
            <input
              type="text"
              name="cne"
              value={form.cne}
              onChange={handleChange}
            />

            <label>Pick-up Date:</label>
            <input
              type="date"
              name="startDate"
              value={form.startDate}
              onChange={handleChange}
            />

            <label>Return Date:</label>
            <input
              type="date"
              name="endDate"
              value={form.endDate}
              onChange={handleChange}
            />

            <div className="divbtn">
              <button
              type="submit"
              className="reserve-btn"
              onClick={handleReserveClick}
            >
              Reserve
            </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
