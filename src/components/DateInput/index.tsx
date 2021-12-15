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
  }

const years = [...Array(100).keys()].map(i => i + 1950).reverse()
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

type DateType = Date | [Date | null, Date | null] | null

export const DateInput = React.forwardRef<HTMLInputElement, DateInputProps>(
  (
    {
      dateFormat = 'dd/MM/yyyy',
      selected = null,
      name,
      variant,

      onChange,
      ...props
    },
    ref
  ) => {
    const [value, setValue] = useState<DateType>(selected)
    const [show, setShow] = useState(false)

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

    return (
      <>
        <Input
          onClick={onToggle}
          value={selected ? format(selected, dateFormat as string) : ''}
          onChange={() => {}}
          icon={<Icon name="date_range" color="grey.600" />}
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
              selected={value as any}
              showDisabledMonthNavigation
              {...props}
              onChange={date => {
                setValue(date)
              }}
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
