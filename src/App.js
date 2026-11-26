import Quote from './components/Quote';
const quotes = [
  {
    text: "I can't relate to lazy people. We don't speak the same language. I don't understand you. I don't want to understand you.",
    author: 'Kobe Bryant',
    source: 'https://www.si.com/nba/2013/10/16/kobe-bryant-lakers-si-cover-story',
  },
  {
    text: 'Everything negative -- pressure, challenges -- is all an opportunity for me to rise.',
    author: 'Kobe Bryant',
    source: 'https://www.nike.com/mamba-mentality/optimism',
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
