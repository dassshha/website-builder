import {createReducer, nanoid} from '@reduxjs/toolkit';
import { State } from '../types/state';
import {addElement, changeGrid, deleteElement} from './actions';
import {ElementItem} from '../types/element-item';
import {getElementById} from '../components/get-element-by-id';
import {GRID_TYPE} from '../const';

const initialState: State = {
  headerElements: [],
  footerElements: []
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(addElement, (state, action) => {
    if (action.payload.listType === 'HEADER') {
      state.headerElements.push({id: nanoid(), tag: action.payload.tag});
    }
    if (action.payload.listType === 'FOOTER') {
      state.footerElements.push({id: nanoid(), tag: action.payload.tag});
    }
  });
  builder.addCase(deleteElement, (state, action) => {
    if (action.payload.listType === 'HEADER') {
      const id = getElementById(state.headerElements, action.payload.id);
      state.headerElements.splice(id , 1);
    }
    if (action.payload.listType === 'FOOTER') {
      const id = getElementById(state.footerElements, action.payload.id);
      state.footerElements.splice(id , 1);
    }
  });
  builder.addCase(changeGrid, (state, action) => {
    state.headerElements = initialState.headerElements;
    state.footerElements = initialState.footerElements;
  });
});
