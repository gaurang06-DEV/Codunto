import React, { useState, useRef } from "react";
import Tesseract from "tesseract.js";
import { useNavigate } from "react-router";

const OCRBillSplitter = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [peopleList, setPeopleList] = useState([]);
  const [currentName, setCurrentName] = useState("");
  const [billAmount, setBillAmount] = useState("");
  const [participants, setParticipants] = useState([]);
  const [splitResult, setSplitResult] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [ocrProgress, setOcrProgress] = useState(0);

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

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const readBillWithOCR = () => {
    if (!selectedFile) {
      alert("Please select a file first.");
      return;
    }

    Tesseract.recognize(selectedFile, "eng", {
      logger: (m) => setOcrProgress(Math.floor(m.progress * 100)),
    })
      .then(({ data: { text } }) => {
        const numbers = text.match(/\d+(\.\d{1,2})?/g);
        if (numbers && numbers.length > 0) {
          const total = Math.max(...numbers.map(Number));
          setBillAmount(total);
        } else {
          alert("No amount found in bill.");
        }
        setOcrProgress(0);
      })
      .catch((err) => console.error(err));
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
    setSelectedFile(null);
    setOcrProgress(0);

    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Clear file input visually
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-3xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          OCR Bill Splitter
        </h2>

        <div className="mb-4">
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="border p-2 rounded w-full"
          />
          <button
            onClick={readBillWithOCR}
            className="mt-2 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Read Bill Amount
          </button>
          {ocrProgress > 0 && <p>Processing: {ocrProgress}%</p>}
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Add People</h3>
          <div className="flex gap-2">
            <input
              type="text"
              value={currentName}
              onChange={(e) => setCurrentName(e.target.value)}
              placeholder="Enter name"
              className="flex-1 p-2 border rounded"
            />
            <button
              onClick={addPersonToList}
              className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700"
            >
              Add
            </button>
          </div>

          {peopleList.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {peopleList.map((person) => (
                <span
                  key={person}
                  onClick={() => toggleParticipant(person)}
                  className={`px-3 py-1 rounded cursor-pointer ${
                    participants.includes(person)
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  {person}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-1">Bill Amount</label>
          <input
            type="number"
            value={billAmount}
            onChange={(e) => setBillAmount(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="flex gap-2 mb-4">
          <button
            onClick={calculateSplit}
            className="flex-1 bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Split Bill
          </button>
          <button
            onClick={resetAll}
            className="flex-1 bg-red-500 text-white py-2 rounded hover:bg-red-600"
          >
            Refresh
          </button>
        </div>

        <button
          onClick={() => navigate("/")}
          type="button"
          className="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 rounded-xl shadow-lg transition-transform transform hover:scale-105 mb-4"
        >
          Back to Main Page
        </button>

        {splitResult && (
          <div className="mt-4 border p-3 rounded bg-green-50">
            <h3 className="font-semibold mb-2">Split Result:</h3>
            <ul>
              {splitResult.map((item) => (
                <li key={item.name}>
                  {item.name}: ₹{item.amount}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default OCRBillSplitter;
