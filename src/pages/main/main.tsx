import {SiteGrid} from '../../components/site-grid/site-grid';
import {useInput} from '../../hooks/use-input';
import {Landing} from '../../components/landing/landing';

export const Main = (): JSX.Element => {
    const siteGrid = useInput('grid-landing');
  return (
      <div className="container">
        <h1 className="visually-hidden">Конструктор сайтов</h1>
        <SiteGrid grid={siteGrid} />
        <Landing />
      </div>
  );
}
