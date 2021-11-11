import React, { TextareaHTMLAttributes } from 'react'
import { InputStyledProps, TextareaStyled } from './styled'

export interface TextareaProps
  extends InputStyledProps,
    TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    return <TextareaStyled rows={4} variant="primary" {...props} ref={ref} />
  }
)
