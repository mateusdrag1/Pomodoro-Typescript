import React, { useState } from 'react';
import { useInterval } from '../hooks/use-interval';
import { secondsToTime } from '../utils/seconds-to-time';
import { Button } from './button';
import { Timer } from './timer';

interface PomodoroTimerProps {
  defaultPomodoroTime: number;
}

export function PomodoroTimer(props: PomodoroTimerProps): JSX.Element {
  const [mainTime, setMainTime] = useState(props.defaultPomodoroTime);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return (
    <div className="pomodoro">
      <h2>Você está: Trabalhando</h2>
      <Timer mainTime={mainTime} />
      <Button text="teste" onClick={() => console.log(1)} />
    </div>
  );
}
