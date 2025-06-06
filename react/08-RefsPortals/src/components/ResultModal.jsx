/* ในกรณี angular version ต่ำกว่า 19 จะใช้ ref ไม่ได้ */

import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultModal({ targetTime, remainingTime, onReset }, ref) {

  const dialog = useRef();

  const userLost = remainingTime <= 0;

  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  const score = Math.round((1 - (remainingTime / (targetTime * 1000))) * 100);
  //ยิ่งใกล้หมดเวลาคะแนนยิ่งเยอะ

  useImperativeHandle(ref, () => {
    //TimerChallenge สามารถเข้าถึงได้แค่ ใช้ .open เพราะมันถูก Encapsulations
    return {
      open() {
        dialog.current.showModal();
      }
    }
  })


  return createPortal(
    <dialog ref={dialog} className="result-modal">
      {userLost && <h2>You lost</h2>}
      {!userLost && <h2>Your Score: {score} </h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
});

export default ResultModal;
