import {ElementsList} from '../types/elements-list';

export const getElementById = (list: ElementsList, id: string): number => {
  return list.findIndex((el) => el.id === id);
}
