import React from 'react';

export default function ShowOneWord({
    words,
    serialNumber,
}) {
    return (
        <h2 className='text-2xl text-green-500 m-4'>
            A szavad: <span className='text-yellow-300'>{!words || serialNumber < 0 ? "" : words[serialNumber]?.word}</span>
        </h2>
    );
}