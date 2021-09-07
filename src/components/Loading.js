import React from 'react'

const Loading = () => {
  return (
    <div data-testid="loading" className="text-center p-4">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}

export default Loading
