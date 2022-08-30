import {ElementPanel} from '../element-panel/element-panel';
import {ContainerContext} from '../header/header';
import {useSelector} from 'react-redux';
import {getFooterElements, getHeaderElements} from '../../store/selectors';
import {Element} from '../element/element';

export const Footer = (): JSX.Element => {
    const elements = useSelector(getFooterElements);
  return (
      <ContainerContext.Provider value={'FOOTER'}>
          <footer className={`footer ${!elements.length && 'footer--empty'}`}>
              <p className="placeholder">Footer</p>
              <ElementPanel/>
              <div className="footer__elements-wrapper">
                  {elements.map(el => <Element key={el.id} {...el}/>)}
              </div>
          </footer>
      </ContainerContext.Provider>
  );
}
