import React, { useState } from "react";

function QuoteForm({ onAddQuote }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  // Add function to handle submissions
  function handleSubmit(e) {
    e.preventDefault();
    const QuoteData = {
      name: name,
      comment: comment,
    };
    fetch("https://github.com/Danny007111/backend-phase-2-comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(QuoteData),
  })
    .then((r) => r.json())
    .then((newQuote) => onAddQuote(newQuote));
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>
        Comment:
        <input
          type="text"
          name="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        >
          
        </input>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default QuoteForm;