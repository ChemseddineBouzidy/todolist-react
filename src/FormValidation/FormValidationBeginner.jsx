import React, { useRef } from "react";

function FormValidationBeginner() {
  const nameField = useRef();
  const emailField = useRef();
  const messageField = useRef();
  const countryField = useRef();
  const acceptConditioFieldn = useRef();

  const handleSubmit = () => {};

  return (
    <>
      <form className="max-w-xl mt-11 mx-auto p-6 bg-white rounded-2xl shadow-md space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">Contact Us</h2>

        <div>
          <label className="block text-gray-700 font-medium">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={nameField}
            className="w-full mt-1 p-2 border rounded-lg"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            ref={emailField}
            className="w-full mt-1 p-2 border rounded-lg"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Message</label>
          <textarea
            name="message"
            id="message"
            ref={messageField}
            className="w-full mt-1 p-2 border rounded-lg"
            rows="4"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Country</label>
          <select
            name="country"
            id="country"
            ref={countryField}
            className="w-full mt-1 p-2 border rounded-lg"
            required
          >
            <option value="">Select Country</option>
            <option value="USA">USA</option>
            <option value="France">France</option>
            <option value="Germany">Germany</option>
            <option value="Canada">Canada</option>
          </select>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            name="accepted"
            id="accepted"
            ref={acceptConditioFieldn}
            className="mr-2"
          />
          <label className="text-gray-700">I accept all conditions</label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default FormValidationBeginner;
