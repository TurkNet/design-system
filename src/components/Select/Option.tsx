import React, { FC } from 'react'
import { OptionStyled } from './styled'

export interface OptionProps {
  labelKey: string
  active?: boolean
  option: Record<string, any>
  onSelect(value: any): void
}

const Option: FC<OptionProps> = ({
  option = {},
  labelKey,
  active,
  onSelect,
}) => {
  const handleSelect = () => {
    onSelect(option)
  }
  return (
    <OptionStyled active={active} onClick={handleSelect}>
      {option[labelKey]}
    </OptionStyled>
  )
}

export default Option
