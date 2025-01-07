import {useState} from 'react';

import Title from './Components/Title';
import Description from './Components/Description';
import GetWords from './Components/GetWords';
import ShowOneWord from './Components/ShowOneWord';
import Error from './Components/Error';
import InputRows from './Components/InputRows';
import GameOver from './Components/GameOver';
import NextButton from './Components/NextButton';
import ShowAnswers from './Components/ShowAnswers';

function App() {
  let testhossz = 5;
  const [words, setWords] = useState([]);
  const [showAnswersArray, setShowAnswersArray] = useState([]); 
  const [showYourAnswersArray, setShowYourAnswersArray] = useState([]); 
  const [serialNumber, setSerialNumber] = useState(null);  
  const [error, setError] = useState(null);
  const [infinitive, setInfinitive] = useState('');
  const [pastSimple, setPastSimple] = useState('');
  const [pastParticiple, setPastParticiple] = useState('');
  const [infinitiveResult, setInfinitiveResult] = useState('');
  const [pastSimpleResult, setPastSimpleResult] = useState('');
  const [pastParticipleResult, setPastParticipleResult] = useState('');
  const [rightInfinitiveWord, setRightInfinitiveWord] = useState('');
  const [rightPastSimpleWord, setRightPastSimpleWord] = useState('');
  const [rightPastParticipleWord, setRightPastParticipleWord] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);  
  const [clicked, setClicked] = useState(false);
  const [generatedNumbers, setGeneratedNumbers] = useState(new Set());

  return (
    <>
      <Title />

      <Description />

      <GetWords 
        setWords={setWords} 
        setSerialNumber={setSerialNumber}
        setGeneratedNumbers={setGeneratedNumbers} />

      {gameOver ? null : <ShowOneWord 
        words={words} 
        serialNumber={serialNumber} />}

      <Error 
        error={error} />

      {gameOver ?  null : <InputRows 
        testhossz={testhossz} 
        setInfinitive={setInfinitive} 
        setPastSimple={setPastSimple}
        setPastParticiple={setPastParticiple}
        infinitive={infinitive}
        pastSimple={pastSimple} 
        pastParticiple={pastParticiple}
        setError={setError}
        wordCount={wordCount} 
        setWordCount={setWordCount} 
        score={score}
        clicked={clicked}
        setGameOver={setGameOver} 
        infinitiveResult={infinitiveResult}
        pastSimpleResult={pastSimpleResult}
        pastParticipleResult={pastParticipleResult}
        rightPastSimpleWord={rightPastSimpleWord}
        rightPastParticipleWord={rightPastParticipleWord}
        rightInfinitiveWord={rightInfinitiveWord} />}

      {gameOver ? null : <NextButton 
        setClicked={setClicked}
        infinitive={infinitive}
        pastSimple={pastSimple}
        pastParticiple={pastParticiple}
        setError={setError}
        words={words}
        serialNumber={serialNumber}
        setScore={setScore}
        setInfinitiveResult={setInfinitiveResult}
        setPastSimpleResult={setPastSimpleResult}
        setPastParticipleResult={setPastParticipleResult}
        setSerialNumber={setSerialNumber}
        setInfinitive={setInfinitive}
        setPastSimple={setPastSimple}
        setPastParticiple={setPastParticiple}
        setWordCount={setWordCount}
        clicked={clicked}
        gameOver={gameOver}
        setGeneratedNumbers={setGeneratedNumbers}
        setRightInfinitiveWord={setRightInfinitiveWord}
        setRightPastSimpleWord={setRightPastSimpleWord}
        setRightPastParticipleWord={setRightPastParticipleWord}
        generatedNumbers={generatedNumbers}
        setShowAnswersArray={setShowAnswersArray}
        setShowYourAnswersArray={setShowYourAnswersArray} />}

      {gameOver ? <GameOver
        setGameOver={setGameOver}       
        setScore={setScore}
        setGeneratedNumbers={setGeneratedNumbers} 
        setError={setError}
        setShowAnswersArray={setShowAnswersArray}
        setShowYourAnswersArray={setShowYourAnswersArray} /> : null}
        
      <ShowAnswers
        showAnswersArray={showAnswersArray} 
        showYourAnswersArray={showYourAnswersArray}
        gameOver={gameOver} />
    </>
  )
}

export default App
