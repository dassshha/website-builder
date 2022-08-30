import {State} from '../types/state';
import {ElementsList} from '../types/elements-list';

export const getHeaderElements = (state: State): ElementsList => state.headerElements;

export const getGridType = (state: State): string => state.gridType;
