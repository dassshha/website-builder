import {createReducer, nanoid} from '@reduxjs/toolkit';
import { State } from '../types/state';
import {addElement, changeGrid, deleteElement} from './actions';
import {ElementItem} from '../types/element-item';
import {getElementById} from '../components/get-element-by-id';
import {GRID_TYPE} from '../const';
import {ElementsList} from '../types/elements-list';

const initialState: State = {
  headerElements: [],
  footerElements: [],
  content1Elements: [],
  content2Elements: [],
  content3Elements: []
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(addElement, (state, action) => {
    if (action.payload.listType === 'HEADER') {
      state.headerElements.push({id: nanoid(), tag: action.payload.tag});
    }
    if (action.payload.listType === 'FOOTER') {
      state.footerElements.push({id: nanoid(), tag: action.payload.tag});
    }
    if (action.payload.listType === 'content-1') {
      state.content1Elements.push({id: nanoid(), tag: action.payload.tag});
    }
    if (action.payload.listType === 'content-2') {
      state.content2Elements.push({id: nanoid(), tag: action.payload.tag});
    }
    if (action.payload.listType === 'content-3') {
      state.content3Elements.push({id: nanoid(), tag: action.payload.tag});
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
    if (action.payload.listType === 'content-1') {
      const id = getElementById(state.content1Elements, action.payload.id);
      state.content1Elements.splice(id , 1);
    }
    if (action.payload.listType === 'content-2') {
      const id = getElementById(state.content2Elements, action.payload.id);
      state.content2Elements.splice(id , 1);
    }
    if (action.payload.listType === 'content-3') {
      const id = getElementById(state.content3Elements, action.payload.id);
      state.content3Elements.splice(id , 1);
    }
  });
  builder.addCase(changeGrid, (state, action) => {
    state.headerElements = initialState.headerElements;
    state.footerElements = initialState.footerElements;
    state.content1Elements = initialState.content1Elements;
    state.content2Elements = initialState.content2Elements;
    state.content3Elements = initialState.content3Elements;
  });
});
