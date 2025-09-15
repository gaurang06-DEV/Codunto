import React, { useState } from 'react';
import { useNavigate } from "react-router";

function BillSplitter({ onProceed }) {
  let navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [tax, setTax] = useState(0);
  const [tip, setTip] = useState(0);

  const addItem = () => {
    if (itemName && itemPrice) {
      setItems([...items, { name: itemName, price: parseFloat(itemPrice) }]);
      setItemName("");
      setItemPrice("");
    }
  };

  const handleNext = () => {
    navigate("/assign-items");
    onProceed({ items, tax, tip });
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Step 1: Enter Bill Items</h2>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Item name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          className="border rounded p-2 w-1/2"
        />
        <input
          type="number"
          placeholder="Price"
          value={itemPrice}
          onChange={(e) => setItemPrice(e.target.value)}
          className="border rounded p-2 w-1/2"
        />
        <button
          onClick={addItem}
          className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      <ul className="mb-4">
        {items.map((item, i) => (
          <li key={i} className="border-b py-1">{item.name} - ₹{item.price}</li>
        ))}
      </ul>

      <div className="flex gap-2 mb-4">
        <input
          type="number"
          placeholder="Tax"
          value={tax}
          onChange={(e) => setTax(parseFloat(e.target.value))}
          className="border rounded p-2 w-1/2"
        />
        <input
          type="number"
          placeholder="Tip"
          value={tip}
          onChange={(e) => setTip(parseFloat(e.target.value))}
          className="border rounded p-2 w-1/2"
        />
      </div>

      <button
        onClick={handleNext}
        className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
      >
        Next → Assign Items
      </button>
    </div>
  );
}

export default BillSplitter;
