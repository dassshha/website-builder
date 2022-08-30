import { ChangeEvent } from 'react'

export interface useInputType {
  value: string
  onReset: () => void
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void
  isChecked: (id: string) => boolean
}
