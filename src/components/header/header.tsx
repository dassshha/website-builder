import {ElementPanel} from '../element-panel/element-panel';

export const Header = (): JSX.Element => {
  return (
      <header className="header header--empty">
          <p className="placeholder">Header</p>
          <ElementPanel/>
      </header>
  );
}
