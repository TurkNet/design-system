import React, { FC, ReactNode, useCallback, useState } from 'react'
import { Icon } from '../Icon'
import { PopoverStyled, PopoverStyledProps, Overlay } from './styled'

export interface PopoverProps extends PopoverStyledProps {
  title?: string
  content?: ReactNode
}

export const Popover: FC<PopoverProps> = ({
  variant = 'bottomCenter',
  title,
  content,
  children,
  ...props
}) => {
  const [show, setShow] = useState(false)
  const { type: childrenType }: any = children
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
      onMouseLeave={handleShow}
    >
      {children}
      {show && (
        <Overlay variant={childrenType === Icon ? 'right' : variant}>
          {content}
        </Overlay>
      )}
    </PopoverStyled>
  )
}
