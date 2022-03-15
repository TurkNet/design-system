import React, { SelectHTMLAttributes, ReactNode } from 'react'
import { components, Props as ReactSelectProps } from 'react-select'
import { SelectStyled } from './styled'

type IOption = Record<string, any>

export type SelectProps = ReactSelectProps &
  SelectHTMLAttributes<HTMLSelectElement> & {
    name?: string
    value?: any
    labelKey?: string
    valueKey?: string
    options?: IOption[]
    isSearchable?: boolean
    isMulti?: boolean
    placeholder?: string
    variant?: 'success' | 'info' | 'danger' | 'warning' | 'primary' | undefined
    icon?: ReactNode
    locale?: string
    isLoading?: boolean
    isDisabled?: boolean
    onChange?(newValue: unknown, meta?: any): void
  }

export const Select = React.forwardRef<any, SelectProps>(
  (
    {
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
    },
    ref
  ) => {
    const DropdownIndicator = props => (
      <components.DropdownIndicator {...props}>
        {icon}
      </components.DropdownIndicator>
    )

    const trToEng = (text: string) =>
      text
        .toLocaleLowerCase(locale)
        .replace(/ğ/g, 'g')
        .replace(/ü/g, 'u')
        .replace(/ş/g, 's')
        .replace(/ı/g, 'i')
        .replace(/ö/g, 'o')
        .replace(/ç/g, 'c')

    return (
      <>
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
          filterOption={(opt, inputValue) =>
            trToEng(String(opt.label)).includes(trToEng(String(inputValue)))
          }
          {...props}
          ref={ref}
        />
      </>
    )
  }
)
