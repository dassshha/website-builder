import {State} from '../types/state';
import {ElementsList} from '../types/elements-list';

export const getHeaderElements = (state: State): ElementsList => state.headerElements;

export const getFooterElements = (state: State): ElementsList => state.footerElements;
