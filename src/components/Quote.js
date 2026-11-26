import React, { useState } from 'react';
import { SocialIcon } from 'react-social-icons';

function Quote(props) {
  const [numberQuote, setNumberQuote] = useState(0);
  const { text, author, source } = props.quotes[numberQuote];
  const handleNextQuote = () => {
    const options = props.quotes.length - 1;
    if (options < 1) return;
    const next = Math.floor(Math.random() * options);
    setNumberQuote(next < numberQuote ? next : next + 1);
  };
  return (
    <div className='card'>
      <div className='card__body'>
        <h3 className='card__body-title'>{text}</h3>
        <p className='card__body-author'>{author} <a href={source}>Source</a></p>
      </div>
      <div className='card__footer'>
        <div className='twiter'>
          <SocialIcon
            network='twitter'
            fgColor='#fff'
            url={`https://twitter.com/intent/tweet?text=${encodeURIComponent(text + " - " + author)}`}
          />
        </div>
        <button className='btn' onClick={handleNextQuote}>
          Random Quote
        </button>
      </div>
    </div>
  );
}

export default Quote;
