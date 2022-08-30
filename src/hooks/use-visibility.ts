import { useState } from 'react'

export const useVisibility = (initialState = false) => {
  const [value, setValue] = useState(initialState)

  const change = () => setValue(!value)

  return {
    value,
    change,
  }
}
