import React from 'react'
import { Timer } from 'ui-components'
import { TimerComponentPropsList } from '../helpers/Constants/ComponentPropsList'
import { CodeBlock } from './CodeBlock'
import { ComponentPropsList } from './ComponentPropsDisplay'

export const TimerWrapper = () => {
  return (
    <section className='flex p-2 flex-col'>
      <p>
        Timer component is used to set down the timer for any longer time. It
        accepts the seconds.
      </p>
      <br />
      <div className='flex flex-col'>
        <div className='flex flex-col'>
          <div>Example code</div>
          <CodeBlock title='Example Code' code='<Timer seconds={130} />' />
        </div>
        Output of the above code
        <Timer seconds={130} />
      </div>
      <div className='mt-4 font-bold'>
        Timer Component accepts the following props:
       <ComponentPropsList list={TimerComponentPropsList} />
      </div>
    </section>
  )
}
