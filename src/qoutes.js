import React, { useState, useEffect } from "react";

const Qouts = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  useEffect(() => {
    getQuote();
  }, []);
  const getQuote = () => {
    let url =
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let dataQuo = data.quotes;
        let randomQuo = Math.floor(Math.random() * dataQuo.length);
        let randomQuotes = dataQuo[randomQuo];
        setQuote(randomQuotes.quote);
        setAuthor(randomQuotes.author);
      });
  };

  const handleClick = () => {
    getQuote();
  };

  return (
    <div id="box">
      <div id="text">
        <p>{quote}</p>

        <div id="author">
          <p>{author}</p>
        </div>

        <div id="button">
          <div className="social-media">
            <a href="#" id="twet">
              <span>
                <img src="" />
              </span>
            </a>
            <a href="#" id="tumrl">
              <span>
                <img src="" />
              </span>
            </a>
          </div>
          <button onClick={handleClick} id="new">
            new qoutes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Qouts;




