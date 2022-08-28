import {ElementPanel} from '../element-panel/element-panel';
import {useSelector} from 'react-redux';
import {getHeaderElements} from '../../store/selectors';
import {Element} from '../element/element';

export const Header = (): JSX.Element => {
    const elements = useSelector(getHeaderElements);
  return (
      <header className={`header ${!elements.length && 'header--empty'}`}>
          <p className="placeholder">Header</p>
          <ElementPanel listType={'HEADER'}/>
          <div className="header__elements-wrapper">
              {elements.map(el => <Element key={el.id} {...el} listType={'HEADER'}/>)}
          </div>
      </header>
  );
}
