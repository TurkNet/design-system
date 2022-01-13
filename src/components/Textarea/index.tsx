import React, { TextareaHTMLAttributes } from 'react'
import { InputStyledProps, TextareaStyled } from './styled'

export interface TextareaProps
  extends InputStyledProps,
    TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ variant = 'primary', ...props }, ref) => (
    <TextareaStyled rows={4} variant={variant} {...props} ref={ref} />
  )
)
