import { useEffect } from 'react';

export default function GetRow({
  setInfinitive,
  setPastSimple,
  setPastParticiple,
  infinitive,
  pastSimple,
  pastParticiple,
  setError,
  wordCount,
  setWordCount,
  score,
  setGameOver,
  infinitiveResult,
  pastSimpleResult,
  pastParticipleResult,
  rightInfinitiveWord,
  rightPastSimpleWord,
  rightPastParticipleWord,
  testhossz,
  clicked,
}) {
  useEffect(() => {
    if (wordCount === testhossz) {
      setError(`Gratulálok, elvégezted a tesztet! Pontszámod: ${score} / ${testhossz * 3}.`);
      const timeoutId2 = setTimeout(() => {
        setGameOver(true);
        setWordCount(0);
      }, 2000);
  
      return () => clearTimeout(timeoutId2);
    }
  }, [wordCount, score, setError, setWordCount]);

  const sanitizeInput = (input) => {
    return input.replace(/[^a-zA-Z/]/g, '').toLowerCase();
  };

  const handleInfinitiveChange = (e) => {
    setInfinitive(sanitizeInput(e.target.value))
    setError('');
  };

  const handlePastSimpleChange = (e) => {
    setPastSimple(sanitizeInput(e.target.value))
    setError('');
  };

  const handlePastParticipleChange = (e) => {
    setPastParticiple(sanitizeInput(e.target.value))
    setError('');
  };

  return (
    <div className='text-slate-300 m-4 flex flex-col'>
      <label>Infinitive</label>
      <input
        className={`rounded ${
          infinitiveResult === 'correct'
            ? 'bg-green-800'
            : infinitiveResult === 'incorrect'
            ? 'bg-red-900'
            : 'bg-gray-800'
        } py-2 px-4 outline-none border-none mb-4`}
        type='text'
        onChange={(e) => handleInfinitiveChange(e)}
        value={infinitive + rightInfinitiveWord}
        disabled={clicked}
      />
      <label>Past simple</label>
      <input
        className={`rounded ${
          pastSimpleResult === 'correct'
            ? 'bg-green-800'
            : pastSimpleResult === 'incorrect'
            ? 'bg-red-900'
            : 'bg-gray-800'
        } py-2 px-4 outline-none border-none mb-4`}
        type='text'
        onChange={(e) => handlePastSimpleChange(e)}
        value={pastSimple + rightPastSimpleWord}
        disabled={clicked}
      />
      <label>Past participle</label>
      <input
        className={`rounded ${
          pastParticipleResult === 'correct'
            ? 'bg-green-800'
            : pastParticipleResult === 'incorrect'
            ? 'bg-red-900'
            : 'bg-gray-800'
        } py-2 px-4 outline-none border-none mb-4`}
        type='text'
        onChange={(e) => handlePastParticipleChange(e)}
        value={pastParticiple + rightPastParticipleWord}
        disabled={clicked}
      />
    </div>
  );
}