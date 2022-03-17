import React, { useState } from 'react'
import { components } from 'react-select'
import { SelectStyled } from './styled'

type IOption = Record<string, any>

export type SelectProps = {
  name?: string
  value?: any
  labelKey?: string
  valueKey?: string
  options?: IOption[]
  isSearchable?: boolean
  isMulti?: boolean
  placeholder?: string
  variant?: 'success' | 'info' | 'danger' | 'warning' | 'primary' | undefined
  icon?: React.ReactNode
  locale?: string
  isLoading?: boolean
  isDisabled?: boolean
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
}: SelectProps) => {
  const [filteredOptions, setFilteredOptions] = useState(options)

  const DropdownIndicator = props => (
    <components.DropdownIndicator {...props}>
      {icon}
    </components.DropdownIndicator>
  )

  const trToEng = (text: string) =>
    String(text)
      .toLocaleLowerCase(locale)
      .replace(/ğ/g, 'g')
      .replace(/ü/g, 'u')
      .replace(/ş/g, 's')
      .replace(/ı/g, 'i')
      .replace(/ö/g, 'o')
      .replace(/ç/g, 'c')

  return (
    <SelectStyled
      classNamePrefix="select"
      isSearchable={isSearchable}
      isMulti={isMulti}
      options={filteredOptions}
      placeholder={placeholder}
      variant={variant}
      components={icon ? { DropdownIndicator } : {}}
      noOptionsMessage={() => 'Kayıt Bulunamadı.'}
      closeMenuOnSelect={!isMulti}
      getOptionLabel={(o: any) => o[labelKey]}
      getOptionValue={(o: any) => o[valueKey]}
      filterOption={(opt, inputValue) =>
        trToEng(opt.label).includes(trToEng(inputValue))
      }
      onInputChange={inputValue => {
        setFilteredOptions(
          filteredOptions.sort((a, b) =>
            trToEng(b[labelKey]).startsWith(trToEng(inputValue)) ? 1 : -1
          )
        )
      }}
      {...props}
    />
  )
}
