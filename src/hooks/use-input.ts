import { ChangeEvent, useState } from 'react'
import { useInputType } from '../types/use-input'

export const useInput = (initialValue: string): useInputType => {
  const [value, setValue] = useState(initialValue)

  const handleChange = (evt: ChangeEvent<HTMLInputElement>): void => {
    setValue(evt.target.id)
  }

  const handleReset = (): void => setValue(initialValue)

  const handleCheck = (id: string): boolean => value === id

  return {
    value,
    onReset: handleReset,
    onChange: handleChange,
    isChecked: handleCheck,
  }
}
