import React, { useState } from 'react';
import { SocialIcon } from 'react-social-icons';

function Quote(props) {
  const [numberQuote, setNumberQoute] = useState(0);
  const { text, author } = props.quotes[numberQuote];
  const handleNextQuote = () => {
    let num;
    do {
      const random = Math.random() * props.quotes.length;
      num = Number.parseInt(random);
    } while (num === numberQuote);
    setNumberQoute(num);
  };
  return (
    <div className='card'>
      <div className='card__body'>
        <h3 className='card__body-title'>{text}</h3>
        <p className='card__body-author'>{author}</p>
      </div>
      <div className='card__footer'>
        <button className='twiter'>
          <SocialIcon
            network='twitter'
            fgColor='#fff'
            url={`https://twitter.com/intent/tweet?text=${text}+${author}`}
          />
        </button>
        <button className='btn' onClick={handleNextQuote}>
          Random Quote
        </button>
      </div>
    </div>
  );
}

export default Quote;
