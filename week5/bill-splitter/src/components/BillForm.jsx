import React, { useState } from 'react'

function BillForm({ onCalculate }) {
  const [billAmount, setBillAmount] = useState('')
  const [numPeople, setNumPeople] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!billAmount || !numPeople || numPeople <= 0) {
      alert("Please enter valid bill amount and number of people.")
      return
    }

    const result = (billAmount / numPeople).toFixed(2)

    onCalculate(result)

    setBillAmount('')
    setNumPeople('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col">
        <label className="mb-1 font-medium">Bill Amount:</label>
        <input
          type="number"
          value={billAmount}
          onChange={(e) => setBillAmount(e.target.value)}
          placeholder="Enter total bill"
          className="border border-gray-300 rounded p-2"
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-1 font-medium">Number of People:</label>
        <input
          type="number"
          value={numPeople}
          onChange={(e) => setNumPeople(e.target.value)}
          placeholder="Enter number of people"
          className="border border-gray-300 rounded p-2"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-black rounded p-2 mt-4 hover:bg-blue-700 transition-colors"
      >
        Split Bill
      </button>
    </form>
  )
}

export default BillForm
