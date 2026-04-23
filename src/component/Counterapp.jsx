import React, { useState, useEffect } from 'react'

function Stopwatch() {
  const [time, setTime] = useState(0); // Time in milliseconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      // Update time every 10 milliseconds
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(intervalId);
    }

    // Cleanup function to stop the timer when component unmounts
    return () => clearInterval(intervalId);
  }, [isRunning]);

  // Format time into MM:SS:ms
  const formatTime = () => {
    const minutes = ("0" + Math.floor((time / 60000) % 60)).slice(-2);
    const seconds = ("0" + Math.floor((time / 1000) % 60)).slice(-2);
    const milliseconds = ("0" + ((time / 10) % 100)).slice(-2);
    return `${minutes}:${seconds}:${milliseconds}`;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] gap-6">
      <h1 className="text-3xl font-bold text-white uppercase tracking-widest">Stopwatch</h1>
      
      <div className="text-6xl font-mono text-fuchsia-500 bg-zinc-900 px-10 py-6 rounded-2xl border border-fuchsia-500/20 shadow-2xl">
        {formatTime()}
      </div>

      <div className="flex gap-4">
        <button 
          onClick={() => setIsRunning(!isRunning)}
          className={`px-8 py-3 rounded-xl font-bold transition-all ${
            isRunning 
              ? "bg-red-500/20 text-red-500 border border-red-500/50 hover:bg-red-500/30" 
              : "bg-fuchsia-600 text-white hover:bg-fuchsia-500"
          }`}
        >
          {isRunning ? 'Stop' : 'Start'}
        </button>

        <button 
          onClick={() => { setTime(0); setIsRunning(false); }}
          className="px-8 py-3 bg-zinc-800 text-white rounded-xl hover:bg-zinc-700 transition-colors"
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default Stopwatch