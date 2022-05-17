import { render } from '@testing-library/react'
import React from 'react'
import { Timer } from '..'

describe('Timer Component', () => {
  it('is truthy', () => {
    expect(Timer).toBeTruthy()
  })

  it('Intial render seconds', () => {
    const timerComp = render(<Timer seconds={100} />)
    expect(timerComp.getByText('00 : 01 : 40')).toBeTruthy()
  })

  it('After some seconds', async () => {
    const timerComp = render(<Timer seconds={100} />)
    jest.useFakeTimers()
    setTimeout(
      () => expect(timerComp.getByText('00 : 01 : 36')).toBeTruthy(),
      4000
    )
  })

  it('After converstion from minute to seconds', async () => {
    const timerComp = render(<Timer seconds={100} />)
    jest.useFakeTimers()
    setTimeout(
      () => expect(timerComp.getByText('00 : 00 : 59')).toBeTruthy(),
      41000
    )
  })

  it('On time completed', async () => {
    const completionFunction = jest.fn()
    const timerComp = render(
      <Timer seconds={10} onTimeEnd={completionFunction} />
    )
    jest.useFakeTimers()
    setTimeout(() => {
      expect(completionFunction).toHaveBeenCalled()
      expect(timerComp.getByText('00 : 00 : 00')).toBeTruthy()
    }, 10000)
  })

  it('On time of certain seconds', async () => {
    const firstCall = jest.fn(1)
    const secondCall = jest.fn()
    const thridCall = jest.fn()
    const testFunctionList = [
      { seconds: 10, callback: firstCall },
      { seconds: 20, callback: secondCall },
      { seconds: 30, callback: thridCall }
    ]
    const timerComp = render(
      <Timer seconds={30} listenerList={testFunctionList} />
    )
    jest.useFakeTimers()

    setTimeout(() => {
      expect(timerComp.getByText('00 : 00 : 30')).toBeTruthy()
      expect(thridCall).toHaveBeenCalled()
      expect(secondCall).not.toHaveBeenCalled()
      expect(firstCall).not.toHaveBeenCalled()
    }, 0)

    setTimeout(() => {
      expect(timerComp.getByText('00 : 00 : 20')).toBeTruthy()
      expect(thridCall).toHaveBeenCalled()
      expect(secondCall).toHaveBeenCalled()
      expect(firstCall).not.toHaveBeenCalled()
    }, 10000)

    setTimeout(() => {
      expect(timerComp.getByText('00 : 00 : 10')).toBeTruthy()
      expect(thridCall).toHaveBeenCalled()
      expect(secondCall).toHaveBeenCalled()
      expect(firstCall).toHaveBeenCalled()
      expect(firstCall).toHaveBeenCalledWith(1)
    }, 10000)
  })
})
