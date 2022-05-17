import React from 'react'
import { CodeBlockProps } from '../Models/PropModels'

export const CodeBlock = (props: CodeBlockProps) => {
  const copyText = () => {
    navigator.clipboard.writeText(props.code)
  }

  return (
    <div className='flex bg-cyan-600 w-fit rounded-md mt-2 mb-2 relative copyBlock'>
      <code className='p-4 m-4 ml-1 mr-1'>
        <pre>{props.code}</pre>
      </code>
      <span
        className='absolute bg-cyan-700 bottom-0 right-0 hidden p-1 text-white border-solid border-cyan-600 border-2 rounded-md copyButton cursor-pointer'
        onClick={copyText}
      >
        copy
      </span>
    </div>
  )
}
