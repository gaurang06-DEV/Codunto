import React, { useState } from "react";
import { useNavigate } from "react-router";

const BillSplitter = () => {
  const navigate = useNavigate();
  const [peopleList, setPeopleList] = useState([]);
  const [currentName, setCurrentName] = useState("");
  const [billAmount, setBillAmount] = useState("");
  const [participants, setParticipants] = useState([]);
  const [splitResult, setSplitResult] = useState(null);

  const addPersonToList = () => {
    const trimmedName = currentName.trim();
    if (trimmedName && !peopleList.includes(trimmedName)) {
      setPeopleList([...peopleList, trimmedName]);
      setCurrentName("");
    }
  };

  const toggleParticipant = (name) => {
    if (participants.includes(name)) {
      setParticipants(participants.filter((p) => p !== name));
    } else {
      setParticipants([...participants, name]);
    }
  };

  const calculateSplit = () => {
    if (!billAmount || participants.length === 0) {
      alert("Enter a valid bill amount and select at least one participant.");
      return;
    }
    const amountPerPerson = (billAmount / participants.length).toFixed(2);
    const result = participants.map((name) => ({
      name,
      amount: amountPerPerson,
    }));
    setSplitResult(result);
  };

  const resetAll = () => {
    setPeopleList([]);
    setCurrentName("");
    setBillAmount("");
    setParticipants([]);
    setSplitResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-3xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Split the Bill
        </h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Add People</h3>
          <div className="flex gap-2">
            <input
              type="text"
              value={currentName}
              onChange={(e) => setCurrentName(e.target.value)}
              placeholder="Enter name"
              className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={addPersonToList}
              className="bg-blue-600 text-white px-5 rounded-lg hover:bg-blue-700 transition"
            >
              Add
            </button>
          </div>

          {peopleList.length > 0 && (
            <div className="mt-4">
              <p className="font-medium mb-2">People List:</p>
              <div className="flex flex-wrap gap-2">
                {peopleList.map((person) => (
                  <span
                    key={person}
                    onClick={() => toggleParticipant(person)}
                    className={`px-4 py-2 rounded-full cursor-pointer font-medium text-sm transition-all ${
                      participants.includes(person)
                        ? "bg-green-500 text-white shadow-lg"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {person}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mb-6">
          <label className="block font-medium mb-2">Bill Amount</label>
          <input
            type="number"
            value={billAmount}
            onChange={(e) => setBillAmount(e.target.value)}
            placeholder="Enter total bill amount"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex gap-3 mb-4">
          <button
            onClick={calculateSplit}
            className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg"
          >
            Split Bill
          </button>
          <button
            onClick={resetAll}
            className="flex-1 bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition shadow-lg"
          >
            Refresh
          </button>
        </div>

        <button
          onClick={() => navigate("/")}
          type="button"
          className="mt-6 w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 rounded-xl shadow-lg transition-transform transform hover:scale-105"
        >
          Back to Main Page
        </button>

        {splitResult && (
          <div className="mt-4 bg-green-50 p-4 rounded-xl border border-green-200 shadow-inner">
            <h3 className="text-lg font-semibold text-green-700 mb-3">
              Split Result:
            </h3>
            <ul className="list-disc list-inside">
              {splitResult.map((item) => (
                <li key={item.name} className="text-gray-700 font-medium">
                  {item.name}: <span className="font-bold">₹{item.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default BillSplitter;
