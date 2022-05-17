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
  listenerList?: Array<Listener>
  key?: any
}

export const Timer = (props: TimerProps) => {
  const [remaingSec, setRemainSeconds] = useState(props.seconds)
  const [listener, setListener] = useState({})

  const getTimerFormat = (seconds: number) => {
    const remaingSec = seconds % 60
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)
    return `${hours < 10 ? '0' + hours : hours} : ${
      minutes < 10 ? '0' + minutes : minutes
    } : ${remaingSec < 10 ? '0' + remaingSec : remaingSec}`
  }

  useEffect(() => {
    if (remaingSec <= 0) {
      props.onTimeEnd && props.onTimeEnd()
      return
    }
    if (listener[remaingSec]) listener[remaingSec]()
    setTimeout(() => setRemainSeconds((leftSeconds) => leftSeconds - 1), 1000)
  }, [remaingSec])

  useEffect(() => {
    const listener = {}
    props.listenerList &&
      props.listenerList.forEach((listner: Listener) => {
        listener[listner.seconds] = listner.callback
      })
    setListener(listener)
  }, [props.listenerList])

  return (
    <div
      style={props.styles}
      className={`${timerstyles.timerWrapper} ${commonStyles.center}`}
      key={props.key}
    >
      <span className={timerstyles.displayBlock}>
        {getTimerFormat(remaingSec)}
      </span>
    </div>
  )
}
