import React, { useEffect, useState } from 'react'
import DatePicker, { ReactDatePickerProps } from 'react-datepicker'
import { format } from 'date-fns'
import { Input, InputProps } from '../Input'
import { Icon } from '../Icon'
import { Flex } from '../Flex'
import { Button } from '../Button'
import { ContainerStyled } from './styled'
import { Modal } from '../Modal'
import { Box } from '../Box'

export type DateInputProps = ReactDatePickerProps &
  InputProps & {
    selected: DateType
    dateFormat: string
    minYear?: number
    maxYear?: number
  }

const CURRENT_YEAR = new Date().getFullYear()
const months = [
  'OCAK',
  'ŞUBAT',
  'MART',
  'NİSAN',
  'MAYIS',
  'HAZİRAN',
  'TEMMUZ',
  'AĞUSTOS',
  'EYLÜL',
  'EKİM',
  'KASIM',
  'ARALIK',
]

type DateType = Date | [Date | null, Date | null] | null | undefined

const formatDate = (date: Date | null, dateFormat: string) => {
  if (!date) {
    return ''
  }
  return format(date, dateFormat)
}

export const DateInput = React.forwardRef<HTMLInputElement, DateInputProps>(
  (
    {
      dateFormat = 'dd/MM/yyyy',
      selected = null,
      name,
      variant,
      onChange,
      selectsRange,
      placeholderText,
      maxYear = 2050,
      minYear = 1950,
      ...props
    },
    ref
  ) => {
    const topYear =
      maxYear > CURRENT_YEAR ? maxYear - minYear : CURRENT_YEAR - minYear
    const years = [...Array(topYear + 1).keys()].map(i => i + minYear).reverse()
    const [value, setValue] = useState<DateType>(selected)
    const [show, setShow] = useState(false)

    const onHandleChange = (dates: DateType) => {
      setValue(dates)
    }

    const onToggle = () => {
      setShow(!show)
    }

    const onSelect = () => {
      onToggle()
      onChange(value || null, undefined)
      setValue(null)
    }

    const onCancel = () => {
      setShow(false)
      setValue(null)
    }

    useEffect(() => {
      if (!value) {
        setValue(selected)
      }
    })

    const formatDates = () => {
      if (Array.isArray(selected)) {
        return selected
          ?.map(date => formatDate(date, dateFormat))
          .filter(i => i)
          .join(' - ')
      }
      return formatDate(selected, dateFormat)
    }

    let opts: Record<string, any> = { selected: value }
    if (selectsRange) {
      opts = {
        selectsRange,
        startDate: value?.[0],
        endDate: value?.[1],
      }
    }

    return (
      <>
        <Input
          onClick={onToggle}
          value={formatDates()}
          onChange={() => {}}
          icon={<Icon name="date_range" color="grey.600" />}
          autoComplete="off"
          placeholder={placeholderText}
          name={name}
          variant={variant}
          ref={ref}
        />

        <Modal show={show} showCloseIcon={false} onClosed={onCancel}>
          <ContainerStyled>
            <DatePicker
              inline
              fixedHeight
              dateFormat={dateFormat}
              showDisabledMonthNavigation
              {...props}
              {...opts}
              onChange={onHandleChange}
              renderCustomHeader={({
                date,
                changeYear,
                changeMonth,
                decreaseMonth,
                increaseMonth,
                prevMonthButtonDisabled,
                nextMonthButtonDisabled,
              }) => (
                <Flex justifyContent="space-between" p={10}>
                  <select
                    value={months[new Date(date).getMonth()]}
                    onChange={({ target: { value } }) =>
                      changeMonth(months.indexOf(value))
                    }
                  >
                    {months.map(option => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>

                  <select
                    value={new Date(date).getFullYear()}
                    onChange={({ target: { value } }) => changeYear(+value)}
                  >
                    {years.map(option => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>

                  <Flex>
                    <Button
                      variant="ghost"
                      size="small"
                      icon={<Icon name="chevron_left" />}
                      onClick={decreaseMonth}
                      disabled={prevMonthButtonDisabled}
                      p={8}
                      type="button"
                    />
                    <Button
                      variant="ghost"
                      size="small"
                      icon={<Icon name="chevron_right" />}
                      onClick={increaseMonth}
                      disabled={nextMonthButtonDisabled}
                      p={8}
                      type="button"
                    />
                  </Flex>
                </Flex>
              )}
            />
          </ContainerStyled>
          <Box height={1} bg="grey.300" />
          <Flex px={16} py={8} justifyContent="flex-end">
            <Button
              type="button"
              size="medium"
              variant="ghost"
              mr={8}
              onClick={onCancel}
            >
              Vazgeç
            </Button>
            <Button type="button" size="medium" onClick={onSelect}>
              Tamam
            </Button>
          </Flex>
        </Modal>
      </>
    )
  }
)
