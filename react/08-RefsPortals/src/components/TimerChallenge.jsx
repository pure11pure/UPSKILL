import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10)
    }, 10); // 10 ms
  }

  function handleStop() {
    dialog.current.open();
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} remainingTime={timeRemaining} onReset={handleReset} />
      <section className="challenge">
        <h2>{title}</h2>
        {/* {timeExpired && <p>You lost!</p>} */}
        <p className="Challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className="">
          {timerIsActive ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}


/**
 setTimeout(() => {
  console.log("Hello after 3 seconds");
}, 3000);

พอครบ 3 วินาที console.log() จะทำงาน ครั้งเดียว

*/


/*
setInterval(() => {
  console.log("Tick every second");
}, 1000);

→ console.log() จะทำงาน ทุก ๆ 1 วินาที ซ้ำ ๆ ไปเรื่อย ๆ
(จนกว่าเราจะหยุดด้วย clearInterval())
 */