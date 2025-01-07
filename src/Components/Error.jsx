import React from 'react'

export default function Error({
    error,
}) {
  return (
    <p className='text-pink-500 text-2xl m-4'>{error}</p>
  )
}
