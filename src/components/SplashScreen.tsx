import React, { useState, useEffect } from 'react';
import Logo from './Logo';

interface SplashScreenProps {
  onFinished: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinished }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress bar animation logic
    const duration = 2500; // 2.5 seconds loading
    const intervalTime = 25;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min((currentStep / steps) * 100, 100);
      setProgress(newProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setIsExiting(true);
        setTimeout(onFinished, 800); // Wait for fade out animation
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onFinished]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-blue transition-opacity duration-800 ${isExiting ? 'animate-splash-fade-out' : 'opacity-100'}`}
      aria-hidden="true"
    >
      <div className="relative">
        <Logo className="w-96 h-96 md:w-64 md:h-64" />
      </div>
      
      <div className="mt-8 text-white font-heading font-bold text-2xl tracking-widest uppercase">
        Gaudete
      </div>

      <div className="progress-bar-container">
        <div 
            className="progress-bar-fill" 
            style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <p className="mt-2 text-brand-yellow text-sm font-bold animate-pulse">
        PREPARANDO LA AVENTURA...
      </p>
    </div>
  );
};

export default SplashScreen;