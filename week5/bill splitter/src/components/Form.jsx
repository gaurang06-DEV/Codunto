import React from "react";

export default function Form() {
    const styles = {
        container: {
    background: "#fff",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    maxWidth: "400px",
    margin: "50px auto",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
  },
  title: {
    fontSize: "1.8rem",
    marginBottom: "5px",
  },
  subtitle: {
    color: "#555",
    fontSize: "0.95rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "6px",
    fontWeight: "bold",
    fontSize: "0.95rem",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  button: {
    padding: "10px",
    fontSize: "1rem",
    background: "#667eea",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  result: {
    marginTop: "20px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
    }
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Bill Splitter</h1>
        <p style={styles.subtitle}>Upload your bill and split it!</p>
      </div>

      <form style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="billFile" style={styles.label}>
            Upload Bill (Image/PDF)
          </label>
          <input
            type="file"
            id="billFile"
            accept="image/*,application/pdf"
            required
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="peopleCount" style={styles.label}>
            Number of People
          </label>
          <input
            type="number"
            id="peopleCount"
            placeholder="Enter number of people"
            min="1"
            max="50"
            required
            style={styles.input}
          />
        </div>

        <button type="submit" style={styles.button}>
          Calculate Split
        </button>
      </form>

      <div style={styles.result}>
        <h3>Split Result</h3>
        <p>
          Each person pays: <strong>$0.00</strong>
        </p>
        <p>
          Total bill amount: <strong>$0.00</strong>
        </p>
        <p>
          Number of people: <strong>0</strong>
        </p>
      </div>
    </div>
  );
}