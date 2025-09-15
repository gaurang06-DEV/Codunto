import React from 'react';

function FinalSummary({ summary, onStartNew }) {
  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Step 3: Final Summary</h2>

      <ul className="mb-4">
        {Object.keys(summary).map((person, i) => (
          <li key={i} className="border-b py-2 flex justify-between">
            <span>{person}</span>
            <span className="font-semibold">₹{summary[person].toFixed(2)}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={onStartNew}
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Start Over
      </button>
    </div>
  );
}

export default FinalSummary;
