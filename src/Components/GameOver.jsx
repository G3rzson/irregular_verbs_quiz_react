import React from 'react'

export default function 
    GameOver({
        setGameOver,
        setError,
        setScore,
        setGeneratedNumbers,
        setShowAnswersArray,
        setShowYourAnswersArray,
    }) {
    const handleGameOver = () => {
        setGameOver(false);
        setError(null);
        setGeneratedNumbers(new Set());
        setScore(0);
        setShowAnswersArray([]);
        setShowYourAnswersArray([]);
    };
  return (
    <button 
        className='bg-green-500 sm:hover:bg-green-300 py-2 px-4 rounded my-3 mx-auto block' 
        onClick={handleGameOver}
    >
        Újra
    </button>
  )
}
