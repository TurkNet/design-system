import React from 'react'
import { components } from 'react-select'
import { SearchSelectStyled } from './styled'

type IOption = Promise<Record<string, any>>

export type SearchSelectProps = {
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
  isLoading?: boolean
  isDisabled?: boolean
  onChange?(newValue: unknown, meta?: any): void
  onSearch(inputValue: unknown): Promise<IOption[]>
}

let timeout: any = -1

export const SearchSelect = ({
  options = [],
  isSearchable = true,
  isMulti = false,
  placeholder = 'Seçiniz',
  variant = 'primary',
  labelKey = 'label',
  valueKey = 'id',
  onSearch,
  icon,
  ...props
}: SearchSelectProps) => {
  const DropdownIndicator = props => (
    <components.DropdownIndicator {...props}>
      {icon}
    </components.DropdownIndicator>
  )

  const loadOptions = (
    inputValue: string,
    callback: (options: IOption[]) => void
  ) => {
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(async () => {
      callback(await onSearch(inputValue))
    }, 300)
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
      getOptionLabel={(o: any) => o[labelKey]}
      getOptionValue={(o: any) => o[valueKey]}
      {...props}
    />
  )
}
