import React, { useState } from "react";


function QuoteForm({ onAddQuote }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");



  function handleSubmit(e) {
    e.preventDefault();
    const QuoteData = {
      name: name,
      comment: comment,
    };
    fetch("https://backend-phase-2-comments.herokuapp.com/comments", {
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

      <button type="submit">Add to List</button >
      <p>After you are done writing your new quote, navigate to "Comment-Section" of the app to see your quote.</p>
    </form>
  );
}

export default QuoteForm;