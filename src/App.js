import Quote from './components/Quote';
const quotes = [
  {
    text: "I can't relate to lazy people. We don't speak the same language. I don't understand you. I don't want to understand you.",
    author: 'Kobe Bryant',
  },
  {
    text: 'I have nothing in common with lazy people who blame others for their lack of success. Great things come from hard work and perseverance. No excuses.',
    author: 'Kobe Bryant',
  },
  {
    text: 'Everything negative -- pressure, challenges -- is all an opportunity for me to rise.',
    author: 'Kobe Bryant',
  },
  {
    text: 'Dedication sees dreams come true.',
    author: 'Kobe Bryant',
  },
];
function App() {
  return (
    <div className='container'>
      <Quote quotes={quotes} />
    </div>
  );
}

export default App;
