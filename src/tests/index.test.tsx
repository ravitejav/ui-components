import { render } from '@testing-library/react'
import React from 'react'
import { Timer } from '..'

describe('Timer Component', () => {
  it('is truthy', () => {
    expect(Timer).toBeTruthy()
  })

  it('Testing intial render seconds', () => {
    const timerComp = render(<Timer seconds={100} />)
    expect(timerComp.getByText('00 : 01 : 40')).toBeTruthy()
  })

  it('Testing after 4 seconds render seconds', async () => {
    const timerComp = render(<Timer seconds={100} />)
    jest.useFakeTimers()
    setTimeout(
      () => expect(timerComp.getByText('00 : 01 : 36')).toBeTruthy(),
      4000
    )
  })

  it('Testing after 4 seconds render seconds', async () => {
    const timerComp = render(<Timer seconds={100} />)
    jest.useFakeTimers()
    setTimeout(
      () => expect(timerComp.getByText('00 : 00 : 59')).toBeTruthy(),
      41000
    )
  })
})
