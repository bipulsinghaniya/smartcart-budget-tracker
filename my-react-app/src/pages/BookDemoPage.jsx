import { useState } from "react";

export default function BookDemoPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-green-50 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-lg w-full">

        <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">
          Book a Demo
        </h1>

        <p className="text-gray-600 text-center mb-8">
          Fill the form and our team will contact you within 24 hours.
        </p>

        {submitted ? (
          <div className="text-center text-green-600 font-semibold text-lg">
            ✅ Demo request submitted successfully!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <input
              type="text"
              placeholder="Company / College"
              required
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <select
              required
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <option value="">Select Role</option>
              <option>Student</option>
              <option>Retailer</option>
              <option>Business Owner</option>
              <option>Other</option>
            </select>

            <textarea
              placeholder="Message (optional)"
              rows="4"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <button
              type="submit"
              className="w-full py-4 rounded-full text-white font-semibold text-lg
              bg-gradient-to-r from-orange-500 to-green-500 hover:opacity-90 transition"
            >
              Submit Demo Request
            </button>

          </form>
        )}

      </div>
    </div>
  );
}
