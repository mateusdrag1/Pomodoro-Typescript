import React from 'react';
import { secondsToMinutes } from '../utils/seconds-to-time';

interface TimerProps {
  mainTime: number;
}

export function Timer(props: TimerProps): JSX.Element {
  return <div className="timer">{secondsToMinutes(props.mainTime)}</div>;
}
