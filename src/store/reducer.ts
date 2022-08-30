import { createReducer, nanoid } from '@reduxjs/toolkit'
import { State } from '../types/state'
import { addElement, changeGrid, deleteElement } from './actions'
import { getElementById } from '../components/get-element-by-id'
import { CONTAINER_TYPE } from '../const'

const initialState: State = {
  headerElements: [],
  footerElements: [],
  content1Elements: [],
  content2Elements: [],
  content3Elements: [],
}

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(addElement, (state, action) => {
    if (action.payload.listType === CONTAINER_TYPE.HEADER) {
      state.headerElements.push({ id: nanoid(), tag: action.payload.tag })
    }
    if (action.payload.listType === CONTAINER_TYPE.FOOTER) {
      state.footerElements.push({ id: nanoid(), tag: action.payload.tag })
    }
    if (action.payload.listType === CONTAINER_TYPE.CONTENT1) {
      state.content1Elements.push({ id: nanoid(), tag: action.payload.tag })
    }
    if (action.payload.listType === CONTAINER_TYPE.CONTENT2) {
      state.content2Elements.push({ id: nanoid(), tag: action.payload.tag })
    }
    if (action.payload.listType === CONTAINER_TYPE.CONTENT3) {
      state.content3Elements.push({ id: nanoid(), tag: action.payload.tag })
    }
  })
  builder.addCase(deleteElement, (state, action) => {
    if (action.payload.listType === CONTAINER_TYPE.HEADER) {
      const id = getElementById(state.headerElements, action.payload.id)
      state.headerElements.splice(id, 1)
    }
    if (action.payload.listType === CONTAINER_TYPE.FOOTER) {
      const id = getElementById(state.footerElements, action.payload.id)
      state.footerElements.splice(id, 1)
    }
    if (action.payload.listType === CONTAINER_TYPE.CONTENT1) {
      const id = getElementById(state.content1Elements, action.payload.id)
      state.content1Elements.splice(id, 1)
    }
    if (action.payload.listType === CONTAINER_TYPE.CONTENT2) {
      const id = getElementById(state.content2Elements, action.payload.id)
      state.content2Elements.splice(id, 1)
    }
    if (action.payload.listType === CONTAINER_TYPE.CONTENT3) {
      const id = getElementById(state.content3Elements, action.payload.id)
      state.content3Elements.splice(id, 1)
    }
  })
  builder.addCase(changeGrid, (state) => {
    state.headerElements = initialState.headerElements
    state.footerElements = initialState.footerElements
    state.content1Elements = initialState.content1Elements
    state.content2Elements = initialState.content2Elements
    state.content3Elements = initialState.content3Elements
  })
})
