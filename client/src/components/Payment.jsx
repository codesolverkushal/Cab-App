import React, { useState } from "react";

const Payment = () => {
  const [cardNumber, setCardNumber] = useState("1234 5678 9101 1121");
  const [cardName, setCardName] = useState("Kushal Pratap Singh");
  const [expiryDate, setExpiryDate] = useState("12/27");
  const [cvv, setCvv] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center items-center h-screen bg-violet-100">
      <div className="flex flex-col items-center gap-8">
        <h1 className="uppercase text-4xl font-bold text-indigo-600 relative">
          Payment
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full"></div>
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-gradient-to-r from-indigo-300 to-blue-300 rounded-full"></div>
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-indigo-200 to-blue-200 rounded-full"></div>
        </h1>

        <div className="relative w-96 h-56 bg-gradient-to-r from-blue-300 to-indigo-500 rounded-xl text-white p-6 shadow-lg">
          <div className="text-lg font-semibold">KP Bank</div>
          <div className="absolute top-20 left-6">
            <div className="w-12 h-8 bg-yellow-400 rounded-sm"></div>
          </div>
          <div className="mt-10 text-xl font-mono tracking-widest">
            {cardNumber || "#### #### #### ####"}
          </div>
          <div className="flex justify-between items-center mt-6">
            <div>
              <div className="text-xs text-gray-300">VALID THRU</div>
              <div className="text-sm">{expiryDate || "MM/YY"}</div>
            </div>
            <div className="text-lg font-semibold uppercase">
              {cardName || "Your Name"}
            </div>
          </div>
          <div className="absolute bottom-4 right-6 text-xl font-bold tracking-tight">
            <span className="bg-white text-indigo-600 px-2 py-1 rounded-full">
              VISA
            </span>
          </div>
        </div>
        <form
          onSubmit={submitHandler}
          className="bg-violet-200 shadow-lg p-6 rounded-lg w-96 flex flex-col gap-5"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Card Number
            </label>
            <input
              type="text"
              maxLength="19"
              value={cardNumber}
              onChange={(e) =>
                setCardNumber(
                  e.target.value
                    .replace(/[^\d]/g, "")
                    .replace(/(\d{4})/g, "$1 ")
                    .trim()
                )
              }
              placeholder="1234 5678 9101 1121"
              className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-sm shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Cardholder Name
            </label>
            <input
              type="text"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              placeholder="Your Name"
              className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-sm shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex gap-4">
            <div className="w-2/3">
              <label className="block text-sm font-medium text-gray-700">
                Expiry Date
              </label>
              <input
                type="text"
                maxLength="5"
                value={expiryDate}
                onChange={(e) =>
                  setExpiryDate(
                    e.target.value
                      .replace(/[^\d/]/g, "")
                      .replace(/(\d{2})(\d{2})/, "$1/$2")
                  )
                }
                placeholder="MM/YY"
                className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-sm shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="w-1/3">
              <label className="block text-sm font-medium text-gray-700">
                CVV
              </label>
              <input
                type="password"
                maxLength="4"
                value={cvv}
                onChange={(e) => setCvv(e.target.value.replace(/[^\d]/g, ""))}
                placeholder="###"
                className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-sm shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="saveCard"
              className="h-4 w-4 text-blue-500 focus:ring-2 focus:ring-blue-400 border-gray-300 rounded"
            />
            <label htmlFor="saveCard" className="ml-2 text-sm text-gray-700">
              Save this card for easier future transactions
            </label>
          </div>
          <div className="flex items-center justify-between mt-4">
            <h1 className="font-bold text-lg text-gray-700">TOTAL: $999</h1>
            <button
              type="submit"
              className="bg-blue-500 uppercase text-white py-3 px-5 rounded-full shadow hover:bg-blue-600 transition duration-300"
            >
              Proceed to pay
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;
