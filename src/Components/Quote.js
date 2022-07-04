function Quote({quote}) {

    return (
      <ul>
        {quote.map((quot) => (
          <li key={quot}>
            {quot}
          </li>
        ))}
      </ul>
    );
  }
  
  export default Quote;