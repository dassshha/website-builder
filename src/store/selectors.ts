import {State} from '../types/state';
import {ElementsList} from '../types/elements-list';

export const getHeaderElements = (state: State): ElementsList => state.headerElements;

export const getFooterElements = (state: State): ElementsList => state.footerElements;

export const getContent1Elements = (state: State): ElementsList => state.content1Elements;

export const getContent2Elements = (state: State): ElementsList => state.content2Elements;

export const getContent3Elements = (state: State): ElementsList => state.content3Elements;
