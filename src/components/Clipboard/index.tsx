import React, { InputHTMLAttributes, ReactNode, useState } from 'react'
import { CopiedMessage, WrapperStyled } from './styled'
import { Icon } from '../Icon'
import { Typography } from '../Typography'

export interface ClipboardProps {
  icon?: ReactNode
  onClickIcon?(): void
  copiedText?: string
  copiable?: boolean
  name?: string
  size?: number
  color?: string
  content: string | number
}

export const Clipboard: React.FC<ClipboardProps> = ({
  onClickIcon,
  copiedText = 'Copied',
  name = 'content_copy',
  size = 20,
  color = 'primary.normal',
  copiable,
  content,
  ...props
}) => {
  const [copied, setCopied] = useState(false)

  const handleIconClick = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
    onClickIcon?.()
  }

  return (
    <WrapperStyled>
      <Typography variant="h5" color="#164e87" {...props}>
        {content}
      </Typography>
      <Icon
        name={name}
        size={size}
        cursor="pointer"
        color={color}
        onClick={handleIconClick}
      />
      {copied && <CopiedMessage>{copiedText}</CopiedMessage>}
    </WrapperStyled>
  )
}
