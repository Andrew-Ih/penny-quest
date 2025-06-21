import React from 'react'
import { useTheme } from '../contexts/ThemeContext';
import WelcomeMessage from './components/welcomeSectionComponents/WelcomeMessage';
import FeatureItem from './components/welcomeSectionComponents/FeatureItem';

export default function WelcomeSection() {
  const { theme } = useTheme();
  
  const gradientClass = theme === 'dark' 
    ? 'bg-gradient-to-br from-gray-800 to-gray-900' 
    : 'bg-gradient-to-br from-teal-500 to-blue-600';
    
  return (
    <div className={`hidden lg:flex lg:w-1/2 ${gradientClass} items-center justify-center p-12 relative overflow-hidden`}>
        <div className="text-center text-white relative z-10">
          <WelcomeMessage />     
          <div className="space-y-4 text-left max-w-md">
            <FeatureItem icon="📊" text="Track your expenses effortlessly" />
            <FeatureItem icon="🎯" text="Set and achieve financial goals" />
            <FeatureItem icon="🏆" text="Earn rewards for good habits" />
          </div>
        </div>
      </div>
  )
}
