import React from 'react'

function CustomDescription({CustomDescription}) {
  return (
    <div className='card'>
        <h2>{CustomDescription?.headline}</h2>
        <p>{CustomDescription?.description}</p>
        <div>
            <p>Upvotes: {CustomDescription?.upvotes}</p>
            <p>Downvotes: {CustomDescription?.downvotes}</p>
        </div>
    </div>
  )
}

export default CustomDescription
