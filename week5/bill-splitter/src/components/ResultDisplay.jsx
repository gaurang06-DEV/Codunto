import React from 'react'

function ResultDisplay({ amount, onReset }) {
  return (
    <div className="mt-6 text-center">
      <h2 className="text-lg font-semibold text-green-600 mb-4">Each person should pay: ₹{amount}</h2>
      <button
        onClick={onReset}
        className="bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-600 transition-colors">Split Another Bill</button>
    </div>
  )
}

export default ResultDisplay
