import React, { FC, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { noop } from '../../utility'
import {
  ModalStyled,
  ModalBgStyled,
  ModalContentStyled,
  CrossIconStyled,
  ModalGlobalStyle,
} from './styled'
import { Icon } from '../Icon'

export interface ModalProps {
  show?: boolean
  width?: number | string
  maxWidth?: number | string
  onClosed?(): void
}

const modalId = 'design-system-modal'
let modalRoot: HTMLDivElement

export const Modal: FC<ModalProps> = ({
  children,
  show: initialShow = false,
  width,
  maxWidth = '90%',
  onClosed = noop,
}) => {
  const [show, setShow] = useState(initialShow)

  useEffect(() => {
    setShow(initialShow)
  }, [initialShow])

  useEffect(() => {
    if (!document.getElementById(modalId)) {
      if (!modalRoot) {
        modalRoot = document.createElement('div')
        modalRoot.style.position = 'relative'
        modalRoot.style.zIndex = '1050'
        modalRoot.tabIndex = -1
        modalRoot.id = modalId
      }
      document.body.appendChild(modalRoot)
    }
  }, [])

  const onClose = () => {
    onClosed()
  }

  if (!show || !children) {
    return null
  }

  return ReactDOM.createPortal(
    <ModalStyled>
      <ModalBgStyled onClick={onClose} />
      <ModalContentStyled width={width} maxWidth={maxWidth} maxHeight="90%">
        <CrossIconStyled>
          <Icon name="close" fontSize={24} onClick={onClose} />
        </CrossIconStyled>
        {children}
      </ModalContentStyled>
      <ModalGlobalStyle />
    </ModalStyled>,
    modalRoot
  )
}
