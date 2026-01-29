import { useState, useEffect } from 'react';

export const FooterStatus = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const moroccoTime = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Africa/Casablanca',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }).format(new Date());
      
      setCurrentTime(moroccoTime);
    };

    updateTime();
    
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-zinc-500 text-[11px] items-center box-border flex flex-col sm:flex-row justify-between leading-[17.6px] mb-4 font-mono gap-2 sm:gap-0">
      <div className="items-center box-border gap-x-2 flex gap-y-2">
        <span className="bg-green-500 box-border block h-2.5 w-2.5 border-zinc-800 rounded-full border-2 border-solid animate-pulse"></span>
        Online
      </div>
      <div className="items-center box-border gap-x-2 flex gap-y-2">
        <span className="box-border block">Local time:</span>
        <span className="box-border block font-semibold tabular-nums">{currentTime || '00:00:00'}</span>
      </div>
    </div>
  );
};