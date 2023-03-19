import axios from 'axios';
import { useState } from 'react';
import 'bulma/css/bulma.min.css';

function Quote() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  
  const getQuote = () => {
    axios.get("https://api.quotable.io/random").then(response => {
      setQuote(response.data.content);
      setAuthor(response.data.author);
    }).catch(error => {
      console.log(error);
    });
  }
  
  return (
    <section className="hero is-warning is-medium">
      <div className="hero-body">
        <div className="container">
          <div className="content has-text-centered">
            {quote && <p style={{fontSize: "1.5rem", fontWeight: "bold"}}>{quote}</p>}
            {author && <p style={{fontSize: "1rem",fontWeight: "bold"}} >by {author}</p>}
            <button className="button is-warning" onClick={getQuote}>Inspirational quotes</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Quote;
