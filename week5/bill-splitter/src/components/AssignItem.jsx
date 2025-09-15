import React, { useState } from 'react';

function AssignItems({ billDetails, onProceed }) {
  const [people, setPeople] = useState([]);
  const [personName, setPersonName] = useState("");
  const [assignments, setAssignments] = useState({});

  const addPerson = () => {
    if (personName) {
      setPeople([...people, personName]);
      setPersonName("");
    }
  };

  const assignItem = (index, person) => {
    setAssignments({ ...assignments, [index]: person });
  };

  const handleNext = () => {
    const totals = {};
    people.forEach((p) => (totals[p] = 0));

    billDetails.items.forEach((item, i) => {
      const assignedPerson = assignments[i];
      if (assignedPerson) {
        totals[assignedPerson] += item.price;
      }
    });

    const extra = (billDetails.tax + billDetails.tip) / (people.length || 1);
    people.forEach((p) => (totals[p] += extra));

    onProceed(totals);
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Step 2: Assign Items</h2>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Person name"
          value={personName}
          onChange={(e) => setPersonName(e.target.value)}
          className="border rounded p-2 w-2/3"
        />
        <button
          onClick={addPerson}
          className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      <h3 className="font-semibold mb-2">People:</h3>
      <ul className="mb-4">
        {people.map((p, i) => (
          <li key={i} className="border-b py-1">{p}</li>
        ))}
      </ul>

      <h3 className="font-semibold mb-2">Assign Items:</h3>
      {billDetails.items.map((item, i) => (
        <div key={i} className="flex justify-between items-center mb-2">
          <span>{item.name} - ₹{item.price}</span>
          <select
            onChange={(e) => assignItem(i, e.target.value)}
            className="border rounded p-2"
          >
            <option value="">--Assign to--</option>
            {people.map((p, idx) => (
              <option key={idx} value={p}>{p}</option>
            ))}
          </select>
        </div>
      ))}

      <button
        onClick={handleNext}
        className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 mt-4"
      >
        Next → Final Summary
      </button>
    </div>
  );
}

export default AssignItems;
