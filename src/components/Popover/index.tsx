import React, { FC, ReactNode, useCallback, useState } from 'react'
import { PopoverStyled, PopoverStyledProps, Overlay } from './styled'

export interface PopoverProps extends PopoverStyledProps {
  title?: string
  content?: ReactNode
}

export const Popover: FC<PopoverProps> = ({
  variant = 'right',
  title,
  content,
  children,
  ...props
}) => {
  const [show, setShow] = useState(false)
  let timer: ReturnType<typeof setTimeout>

  const handleShow = useCallback(() => {
    clearTimeout(timer)
    if (show) {
      timer = setTimeout(() => {
        setShow(false)
      }, 300)
    }
    if (!show) {
      setShow(true)
    }
  }, [show])

  return (
    <PopoverStyled
      {...props}
      onMouseEnter={() => setShow(true)}
      onClick={() => setShow(true)}
      onMouseLeave={handleShow}
    >
      {children}
      {show && (
        <Overlay variant={variant} open show={show}>
          {content}
        </Overlay>
      )}
    </PopoverStyled>
  )
}
