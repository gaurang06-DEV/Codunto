import React, { useState } from "react";
import Tesseract from "tesseract.js";

function OCRReader({ onTextExtracted, onTotalExtracted }) {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [ocrText, setOcrText] = useState("");
  const [billTotal, setBillTotal] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setOcrText("");
    setBillTotal("");
    setProgress(0);
  };

  const handleExtractText = () => {
    if (!file) {
      alert("Please select a file.");
      return;
    }

    Tesseract.recognize(file, "eng", {
      logger: (m) => setProgress(Math.floor(m.progress * 100)),
      tessedit_char_whitelist: "0123456789.",
      tessedit_pageseg_mode: Tesseract.PSM.AUTO,
    })
      .then(({ data: { text } }) => {
        setOcrText(text);
        onTextExtracted && onTextExtracted(text);

        const lines = text.split("\n");
        let totalAmount = 0;

        const totalRegex = /(grand\s*total|total|amount|balance)/i;

        for (let line of lines) {
          if (totalRegex.test(line)) {
            const nums = line.match(/\d+(\.\d{1,2})?/g);
            if (nums) {
              const maxNum = Math.max(...nums.map(Number));
              if (maxNum > totalAmount) totalAmount = maxNum;
            }
          }
        }

        if (totalAmount === 0) {
          const allNumbers = text.match(/\d+(\.\d{1,2})?/g);
          if (allNumbers && allNumbers.length > 0) {
            totalAmount = Math.max(...allNumbers.map(Number));
          }
        }

        if (totalAmount > 0) {
          setBillTotal(totalAmount);
          onTotalExtracted && onTotalExtracted(totalAmount);
        }

        setProgress(0);
      })
      .catch((err) => {
        console.error(err);
        setProgress(0);
      });
  };

  return (
    <div className="flex flex-col gap-4">
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button
        onClick={handleExtractText}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Extract Text
      </button>

      {progress > 0 && progress < 100 && <p>Processing: {progress}%</p>}

      {ocrText && (
        <div className="border p-2 rounded bg-gray-50">
          <h3 className="font-semibold mb-1">Extracted Text:</h3>
          <pre className="whitespace-pre-wrap">{ocrText}</pre>
        </div>
      )}

      {billTotal && (
        <div className="border p-2 rounded bg-green-50">
          <h3 className="font-semibold mb-1">Detected Bill Total:</h3>
          <p className="text-green-700 font-bold">₹{billTotal}</p>
        </div>
      )}
    </div>
  );
}

export default OCRReader;
