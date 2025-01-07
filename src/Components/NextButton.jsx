import React from 'react';

export default function NextButton({
    setClicked,
    infinitive,
    pastSimple,
    pastParticiple,
    setError,
    words,
    serialNumber,
    setScore,
    setInfinitiveResult,
    setPastSimpleResult,
    setPastParticipleResult,
    setSerialNumber,
    setInfinitive,
    setPastSimple,
    setPastParticiple,
    setWordCount,
    clicked,
    gameOver,
    setGeneratedNumbers,
    generatedNumbers,
    setRightInfinitiveWord,
    setRightPastSimpleWord,
    setRightPastParticipleWord,
    setShowAnswersArray,
    setShowYourAnswersArray,
}) {

    const handleClick = () => {
        setClicked(true);
        if (infinitive === '' || pastSimple === '' || pastParticiple === '') {
            setError('Kérlek töltsd ki az összes mezőt!');
            setClicked(false);
            return;
        }
        if (infinitive === words[serialNumber].infinitive) {
            setInfinitiveResult('correct');
            setScore((s) => s + 1);
        } else {
            setInfinitiveResult('incorrect');
            setRightInfinitiveWord(" => " + words[serialNumber].infinitive);
        }
        if (pastSimple === words[serialNumber].past_simple) {
            setPastSimpleResult('correct');
            setScore((s) => s + 1);
        } else {
            setPastSimpleResult('incorrect');
            setRightPastSimpleWord(" => " + words[serialNumber].past_simple);
        }
        if (pastParticiple === words[serialNumber].past_participle) {
            setPastParticipleResult('correct');
            setScore((s) => s + 1);
        } else {
            setPastParticipleResult('incorrect');
            setRightPastParticipleWord(" => " + words[serialNumber].past_participle);
        }
        if (infinitive !== '' || pastSimple !== '' || pastParticiple !== '') {
            setShowAnswersArray(oldarray => [...oldarray, words[serialNumber]])
            const yourAnswerObject = {
                word: words[serialNumber].word, 
                infinitive, 
                past_simple: pastSimple, 
                past_participle: pastParticiple,
                infinitiveResult: infinitive === words[serialNumber].infinitive ? 'correct' : 'incorrect',
                pastSimpleResult: pastSimple === words[serialNumber].past_simple ? 'correct' : 'incorrect',
                pastParticipleResult: pastParticiple === words[serialNumber].past_participle ? 'correct' : 'incorrect',
            };        
            setShowYourAnswersArray(oldobject => [...oldobject, yourAnswerObject] );
        }

        setError('');
        setWordCount((w) => w + 1);

        const timeoutId = setTimeout(() => {
            let newSerialNumber;
            do {
                newSerialNumber = Math.floor(Math.random() * words.length);
            } while (generatedNumbers.has(newSerialNumber) && generatedNumbers.size < words.length);

            if (generatedNumbers.size >= words.length) {
                setGeneratedNumbers(new Set()); 
            } else {
                setGeneratedNumbers((prev) => new Set(prev).add(newSerialNumber));
            }

            gameOver ? serialNumber : setSerialNumber(newSerialNumber);
            setInfinitive('');
            setPastSimple('');
            setPastParticiple('');
            setInfinitiveResult('');
            setPastSimpleResult('');
            setPastParticipleResult('');
            setRightInfinitiveWord('');
            setRightPastSimpleWord('');
            setRightPastParticipleWord('')
            setClicked(false);
        }, 2000);

        return () => clearTimeout(timeoutId);
    };

    return (
        <button
            className='bg-green-500 sm:hover:bg-green-300 py-2 px-4 rounded my-3 mx-auto block'
            onClick={handleClick}
            disabled={clicked}
        >
            Következő
        </button>
    );
}