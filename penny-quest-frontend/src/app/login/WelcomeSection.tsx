import React from 'react'

export default function WelcomeSection() {
  return (
    <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-teal-500 to-blue-600 items-center justify-center p-12 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(/src/images/blue-piggy-bank-background-with-banknotes-coins_23-2147630415.avif)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="text-center text-white relative z-10">
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-4xl">💰</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">Welcome to PennyQuest</h1>
            <p className="text-xl opacity-90">Your personal finance companion</p>
          </div>
          <div className="space-y-4 text-left max-w-md">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-sm">📊</span>
              </div>
              <span>Track your expenses effortlessly</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-sm">🎯</span>
              </div>
              <span>Set and achieve financial goals</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-sm">🏆</span>
              </div>
              <span>Earn rewards for good habits</span>
            </div>
          </div>
        </div>
      </div>
  )
}
