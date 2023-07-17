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
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { variant = 'primary', onClickIcon, icon, copiedText = 'Copied', ...props },
    ref
  ) => {
    const [copied, setCopied] = useState(false)

    const handleIconClick = () => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
      onClickIcon?.()
    }

    return (
      <WrapperStyled>
        <InputStyled {...props} variant={variant} ref={ref} />
        {icon && <IconStyled onClick={handleIconClick}>{icon}</IconStyled>}
        {copied && <CopiedMessage>{copiedText}</CopiedMessage>}
      </WrapperStyled>
    )
  }
)
