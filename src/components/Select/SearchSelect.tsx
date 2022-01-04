import React from 'react'
import { components } from 'react-select'
import { SearchSelectStyled } from './styled'

type IOption = Record<string, string>

export type SearchReactSelectProps = {
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
  onSearch(inputValue: unknown): IOption[]
}

export const SearchSelect = ({
  options = [],
  isSearchable = true,
  isMulti = false,
  placeholder = 'Seçiniz',
  variant = 'primary',
  labelKey = 'label',
  valueKey = 'id',
  locale = 'tr-TR',
  onSearch,
  icon,
  ...props
}: SearchReactSelectProps) => {
  const DropdownIndicator = props => (
    <components.DropdownIndicator {...props}>
      {icon}
    </components.DropdownIndicator>
  )

  const loadOptions = async (
    inputValue: string,
    callback: (options: IOption[]) => void
  ) => {
    callback(await onSearch(inputValue))
  }

  return (
    <SearchSelectStyled
      components={icon ? { DropdownIndicator } : {}}
      cacheOptions
      loadOptions={loadOptions}
      defaultOptions={options}
      classNamePrefix="select"
      isSearchable={isSearchable}
      isMulti={isMulti}
      placeholder={placeholder}
      variant={variant}
      noOptionsMessage={() => 'Kayıt Bulunamadı.'}
      loadingMessage={() => 'Yükleniyor..'}
      closeMenuOnSelect={!isMulti}
      openMenuOnClick={false}
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
