/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { CommonProps } from '../Common/CommonProps'
import timerstyles from '../styles/Timer.module.scss'
import commonStyles from '../styles.module.scss'

interface Listener {
  seconds: number
  callback: number
}

interface TimerProps extends CommonProps {
  seconds: number
  onTimeEnd?: () => void
  listenerList?: (list: Array<Listener>) => void
}

export const Timer = (props: TimerProps) => {
  const [remaingSec, setRemainSeconds] = useState(props.seconds)

  const getTimerFormat = (seconds: number) => {
    const remaingSec = seconds % 60
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)
    return `${hours < 10 ? '0' + hours : hours} : ${
      minutes < 10 ? '0' + minutes : minutes
    } : ${remaingSec < 10 ? '0' + remaingSec : remaingSec}`
  }

  useEffect(() => {
    if (remaingSec <= 0) return
    setTimeout(() => setRemainSeconds((leftSeconds) => leftSeconds - 1), 1000)
  }, [remaingSec])

  return (
    <div
      style={props.styles}
      className={`${timerstyles.timerWrapper} ${commonStyles.center}`}
    >
      <span className={timerstyles.displayBlock}>
        {getTimerFormat(remaingSec)}
      </span>
    </div>
  )
}
