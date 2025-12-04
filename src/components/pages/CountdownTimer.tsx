import React, { useState, useEffect } from 'react';
import type { TimeLeft } from '../../../types';

interface CountdownTimerProps {
  targetDate: Date;
}

const calculateTimeLeft = (targetDate: Date): TimeLeft | null => {
  const difference = +targetDate - +new Date();
  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return null;
};

const TimeCard: React.FC<{ value: number; label: string }> = ({ value, label }) => (
  <div className="text-center">
    {/* 
       He ajustado ligeramente el ancho (w-28) para que los números 
       se vean cómodos ahora que hay más espacio.
    */}
    <div className="text-4xl md:text-6xl font-extrabold text-white bg-black bg-opacity-30 p-4 rounded-lg shadow-lg w-28 md:w-40 backdrop-blur-sm border border-white/10">
      {String(value).padStart(2, '0')}
    </div>
    <div className="text-sm md:text-xl font-semibold uppercase text-white mt-2 tracking-wider shadow-black drop-shadow-md">
      {label}
    </div>
  </div>
);

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000); // Se sigue actualizando cada segundo para mantener la precisión interna

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) {
    return <span className="text-2xl text-white font-bold">¡El campamento ha comenzado!</span>;
  }

  return (
    <div className="flex justify-center items-center gap-6 md:gap-12 mt-8">
      <TimeCard value={timeLeft.days} label="Días" />
      <TimeCard value={timeLeft.hours} label="Horas" />
    </div>
  );
};

export default CountdownTimer;