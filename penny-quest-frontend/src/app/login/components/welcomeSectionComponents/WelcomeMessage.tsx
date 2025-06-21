import React from 'react'

const WelcomeMessage = () => {
  return (
    <div className="mb-8">
        <div className="w-24 h-24 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-4xl">💰</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">Welcome to PennyQuest</h1>
        <p className="text-xl opacity-90">Your personal finance companion</p>
    </div>
  )
}

export default WelcomeMessage