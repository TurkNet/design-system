import React, { FC } from 'react'
import { MenuStyled } from './styled'

export interface MenuProps {
  labelKey: string
  active?: boolean
  option: Record<string, any>
  onSelect(value: any): void
}

const Menu: FC<MenuProps> = ({ option = {}, labelKey, active, onSelect }) => {
  const handleSelect = () => {
    onSelect(option)
  }
  return (
    <MenuStyled active={active} onClick={handleSelect}>
      {option[labelKey]}
    </MenuStyled>
  )
}

export default Menu
