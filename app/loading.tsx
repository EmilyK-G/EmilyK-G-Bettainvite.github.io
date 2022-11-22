import React from 'react';
import '../styles/loading.css'

const loading = () => {
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

export default loading