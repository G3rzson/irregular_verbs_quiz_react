import { useEffect } from 'react';

export default function 
    GetWords({ 
        setWords,
        setSerialNumber,
        setGeneratedNumbers,
    }) {

    useEffect(() => {
        fetch('/irregular_verbs_quiz_react/Data/IrregularVerbs.json')
        .then((response) => response.json())
        .then((data) => 
            {   //console.log(data);
                let randomIndex = Math.floor(Math.random() * data.length)
                setWords(data);
                setSerialNumber(randomIndex);
                setGeneratedNumbers((prev) => new Set(prev).add(randomIndex));                
            })
    }, [])

    return (null)
}
