import React from 'react';

function Loading() {
  return (
    <div className="loader_container">
        <p className="text-5xl">Loading...</p>
        <div className="loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
  )
}

export default Loading