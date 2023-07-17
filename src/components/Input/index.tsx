import React, { InputHTMLAttributes, ReactNode, useState } from 'react'
import {
  CopiedMessage,
  IconStyled,
  InputStyled,
  InputStyledProps,
  WrapperStyled,
} from './styled'

export interface InputProps
  extends InputStyledProps,
    InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode
  onClickIcon?(): void
  copiedText?: string
  copiable?: boolean
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = 'primary',
      onClickIcon,
      icon,
      copiedText = 'Copied',
      copiable,
      ...props
    },
    ref
  ) => {
    const [copied, setCopied] = useState(false)

    const handleIconClick = () => {
      if (copiable) {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }
      onClickIcon?.()
    }

    return (
      <WrapperStyled>
        <InputStyled {...props} variant={variant} ref={ref} />
        {icon && <IconStyled onClick={handleIconClick}>{icon}</IconStyled>}
        {copiable && copied && <CopiedMessage>{copiedText}</CopiedMessage>}
      </WrapperStyled>
    )
  }
)
