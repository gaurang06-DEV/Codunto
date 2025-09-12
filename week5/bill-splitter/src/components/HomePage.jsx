import React, { useState } from 'react'
import BillForm from './BillForm'
import ResultDisplay from './ResultDisplay'

function HomePage() {
  const [result, setResult] = useState(null)

  const handleResult = (value) => {
    setResult(value)
  }

  const handleReset = () => {
    setResult(null)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">Welcome to Bill Splitter</h1>
        <p className="text-center text-gray-600 mb-6">
          Split the bills among your friends and family
        </p>

        {/* Show form only if result is not calculated */}
        {!result && <BillForm onCalculate={handleResult} />}

        {/* Show result when available */}
        {result && <ResultDisplay amount={result} onReset={handleReset} />}
      </div>
    </div>
  )
}

export default HomePage
