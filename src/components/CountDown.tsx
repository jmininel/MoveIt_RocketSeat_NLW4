import { useState, useEffect } from 'react';
import styles from '../styles/components/CountDown.module.css';

let countdownTimeout: NodeJS.Timeout;

export function CountDown() {
    const [time, setTime] = useState(25 * 60)
    const [isActive, setisActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLetf, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondseLetf, secondsRight] = String(seconds).padStart(2, '0').split('');

    function startCountdown(){
      setisActive(true);
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout);
        setisActive(false)  
        setTime(25 * 60);
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
              setTime(time - 1);
           }, 1000)
        } else if (isActive && time === 0) {
          setHasFinished(true);
          setisActive(false);
        }
    }, [isActive, time])

    return(
   <div>
        <div className={styles.countdownContainer}>
         <div>
           <span>{minuteLetf}</span>
           <span>{minuteRight}</span>
         </div>
           <span>:</span>
         <div>
           <span>{secondseLetf}</span>
           <span>{secondsRight}</span>
        </div>
    </div>

       { isActive ? (
        <button 
             type="button" 
             className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
             onClick={resetCountdown}
         >
             Abandonar ciclo
        </button>
       ) : (
        <button 
            type="button" 
            className={styles.countdownButton}
            onClick={startCountdown}
        >
            Iniciar um ciclo
        </button>
       )}
    </div>
    );
   }