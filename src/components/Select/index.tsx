import React from 'react'
import { components } from 'react-select'
import { SelectStyled } from './styled'

type IOption = Record<string, string>

export type ReactSelectProps = {
  name?: string
  value?: string
  labelKey?: string
  valueKey?: string
  options?: IOption[]
  isSearchable?: boolean
  isMulti?: boolean
  placeholder?: string
  variant?: 'success' | 'info' | 'danger' | 'warning' | 'primary' | undefined
  icon?: React.ReactNode
  locale?: string
  onChange?(newValue: unknown, meta?: any): void
}

export const Select = ({
  options = [],
  isSearchable = true,
  isMulti = false,
  placeholder = 'Seçiniz',
  variant = 'primary',
  labelKey = 'label',
  valueKey = 'id',
  locale = 'tr-TR',
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
      getOptionLabel={(o: any) => o[labelKey]}
      getOptionValue={(o: any) => o[valueKey]}
      filterOption={(opt, inputValue) => {
        return opt[labelKey]
          .toLocaleLowerCase(locale)
          .includes(inputValue.toLocaleLowerCase(locale))
      }}
      {...props}
    />
  )
}
