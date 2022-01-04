import React from 'react'
import StateManagedSelect, { components } from 'react-select'
import { SelectStyled } from './styled'

type IOption = Record<string, any>

export type ReactSelectProps = StateManagedSelect & {
  options: IOption[]
  isSearchable?: boolean
  isMulti?: boolean
  placeholder?: string
  variant?: 'success' | 'info' | 'danger' | 'warning' | 'primary' | undefined
  icon?: React.ReactNode
}

export const Select = ({
  options = [],
  isSearchable = true,
  isMulti = false,
  placeholder = 'Seçiniz',
  variant = 'primary',
  icon,
  ...props
}: ReactSelectProps) => {
  const DropdownIndicator = props => (
    <components.DropdownIndicator {...props}>
      {icon}
    </components.DropdownIndicator>
  )

  return (
    <SelectStyled
      classNamePrefix="select"
      isSearchable={isSearchable}
      isMulti={isMulti}
      options={options}
      placeholder={placeholder}
      variant={variant}
      components={icon ? { DropdownIndicator } : {}}
      noOptionsMessage={() => 'Kayıt Bulunamadı.'}
      closeMenuOnSelect={!isMulti}
      {...props}
    />
  )
}
