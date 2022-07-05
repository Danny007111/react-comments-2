import React, {useEffect, useState} from "react";
import Quote from "./Quote";
import QuoteForm from "./QuoteForm";


function GifListContainer() {
    const [quote, setQuote] = useState([]);

    useEffect(() => {
        fetch(`https://backend-phase-2-comments.herokuapp.com/comments`)
        .then((r) => r.json())
        .then((data) => {
            setQuote(data);  
        })
    }, [])
   
    function handleAddQuote(newQuote){
        setQuote([...quote, newQuote])
    }

  return (
    <div>
      <QuoteForm onAddQuote={handleAddQuote}/>
      <Quote quotes={quote}/>
      
      
    </div>
  );
}

export default GifListContainer;