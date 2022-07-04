import React, {useEffect, useState} from "react";
import Quote from "./Quote";
import QuoteForm from "./QuoteForm";


function GifListContainer() {
    const [quote, setQuote] = useState([]);

    useEffect(() => {
        fetch(`https://github.com/Danny007111/backend-phase-2-comments`)
        .then((r) => r.json())
        .then((data) => {
            console.log(data)
            // const newQuote = data.map((quotes) => quotes.comment);
            // setQuote(newQuote);
        })
    }, [quote])

    function handleAddQuote(newQuote){
        setQuote([...quote, newQuote])
    }

  return (
    <div>
      <Quote quotes={quote}/>
      <QuoteForm onAddQuote={handleAddQuote}/>
      
    </div>
  );
}

export default GifListContainer;