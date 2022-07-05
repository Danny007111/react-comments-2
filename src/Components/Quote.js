function Quote({quotes}) {
  const displayQuotes = quotes.map((quote) => (
    <li key={quote.id}>
      {quote.name}: {quote.comment}
    </li>
  ))

    return (
      <ul>
        {displayQuotes}
      </ul>
    );
  }
  
  export default Quote;