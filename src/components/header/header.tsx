import {ElementPanel} from '../element-panel/element-panel';
import {useSelector} from 'react-redux';
import {getHeaderElements} from '../../store/selectors';
import {Element} from '../element/element';
import {createContext} from 'react';
import {CONTAINER_TYPE} from '../../const';
import {ContainerContext} from '../../contexts/container';

export const Header = (): JSX.Element => {
    const elements = useSelector(getHeaderElements);
  return (
      <ContainerContext.Provider value={CONTAINER_TYPE.HEADER}>
          <header className={`header ${!elements.length && 'header--empty'}`}>
              <p className="placeholder">Header</p>
              <ElementPanel/>
              <div className="header__elements-wrapper">
                  {elements.map(el => <Element key={el.id} {...el}/>)}
              </div>
          </header>
      </ContainerContext.Provider>
  );
}
