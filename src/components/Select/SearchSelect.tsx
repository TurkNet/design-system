import React from 'react'
import StateManagedSelect, { components } from 'react-select'
import { SearchSelectStyled } from './styled'

type IOption = any

export type SearchReactSelectProps = StateManagedSelect & {
  options: IOption
  isSearchable?: boolean
  isMulti?: boolean
  placeholder?: string
  variant?: 'success' | 'info' | 'danger' | 'warning' | 'primary' | undefined
  icon?: React.ReactNode
  value?: any
  getOptionLabel?: any
  getOptionValue?: any
  onInputChange?: () => void
}

export const SearchSelect = ({
  options = [],
  isSearchable = true,
  isMulti = false,
  placeholder = 'Seçiniz',
  variant = 'primary',
  icon,
  ...props
}: SearchReactSelectProps) => {
  const DropdownIndicator = props => (
    <components.DropdownIndicator {...props}>
      {icon}
    </components.DropdownIndicator>
  )

  return (
    <SearchSelectStyled
      components={icon ? { DropdownIndicator } : {}}
      cacheOptions
      loadOptions={options}
      classNamePrefix="select"
      isSearchable={isSearchable}
      isMulti={isMulti}
      placeholder={placeholder}
      variant={variant}
      noOptionsMessage={() => 'Kayıt Bulunamadı.'}
      loadingMessage={() => 'Yükleniyor..'}
      closeMenuOnSelect={!isMulti}
      openMenuOnClick={false}
      {...props}
    />
  )
}
