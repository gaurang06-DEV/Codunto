import React from 'react'

function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">Welcome to Bill Splitter</h1>
        <p className="text-center text-gray-600 mb-6">
          Split the bills among your friends and family
        </p>

        <form className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Add Your Bill Here:</label>
            <input
              type="file"
              className="border border-gray-300 rounded p-2"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-medium">Select Number of People:</label>
            <input
              type="number"
              placeholder="Enter number"
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
      </div>
    </div>
  )
}

export default HomePage
