import { forwardRef } from 'react'
import './Textarea.css'

const Textarea = forwardRef((props, ref) => {
  return (
    <>
      <label className={props.boxClass} data-flex='1'>
        { props.title && <p>{props.title}</p> }
        <textarea
          name={props.textareaName}
          ref={ref}
          disabled={props.disabled}
          value={props.value}
          onChange={props.onChange}
          lang='uk'
        >
        </textarea>
      </label>
    </>
  )
})

export default Textarea