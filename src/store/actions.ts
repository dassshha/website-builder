import { createAction } from '@reduxjs/toolkit'
import { ActionType } from '../types/action'

export const changeGrid = createAction(ActionType.ChangeGrid)

export const addElement = createAction<{ listType: string; tag: string }>(ActionType.AddElement)

export const deleteElement = createAction<{ listType: string; id: string }>(
  ActionType.DeleteElement,
)
