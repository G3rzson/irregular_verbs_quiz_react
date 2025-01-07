import React from 'react';

export default function ShowAnswers({
    showAnswersArray,
    gameOver,
    showYourAnswersArray,
}) {
    const combinedObjects =
        gameOver && showAnswersArray && showYourAnswersArray
            ? showAnswersArray.map((item, index) => ({
                  correct: item,
                  user: showYourAnswersArray[index] || { word: "Nincs párosítva" },
              }))
            : [];

    return (
        <div className="m-4 text-slate-300">
            {gameOver && (
                <>
                    {combinedObjects.map((obj, index) => (
                        <div key={index} className="my-5 text-sm">
                            <p className="bg-gray-800 py-1 px-2 my-1 rounded text-center">
                                <span>{obj.correct.word}</span>
                            </p>
                            <p className={`${obj.user.infinitiveResult === 'correct' ? "bg-green-800 " : "bg-red-900" } py-1 px-2 my-1 rounded flex items-center justify-between`} >
                                <span className='w-24 text-left'>Infinitive</span>
                                <span>{obj.correct.infinitive}</span>
                                <span>{obj.user.infinitive}</span>
                            </p>
                            <p className={`${obj.user.pastSimpleResult === 'correct' ? "bg-green-800 " : "bg-red-900" } py-1 px-2 my-1 rounded flex items-center justify-between`}>
                                <span className='w-24 text-left'>Past simple</span>
                                <span>{obj.correct.past_simple}</span>
                                <span>{obj.user.past_simple}</span>
                            </p>
                            <p className={`${obj.user.pastParticipleResult === 'correct' ? "bg-green-800 " : "bg-red-900" } py-1 px-2 my-1 rounded flex items-center justify-between`}>
                                <span className='w-24 text-left'>Past participle</span>
                                <span>{obj.correct.past_participle}</span>
                                <span>{obj.user.past_participle}</span>
                            </p>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
}
