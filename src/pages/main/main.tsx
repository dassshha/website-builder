import {SiteGrid} from '../../components/site-grid/site-grid';
import {useInput} from '../../hooks/use-input';
import {Landing} from '../../components/landing/landing';
import {GRID_TYPE} from '../../const';
import {Shop} from '../../components/shop/shop';
import {Blog} from '../../components/blog/blog';

export const Main = (): JSX.Element => {
    const siteGrid = useInput('grid-landing');

    const getGridByType = () => {
        switch (siteGrid.value) {
            case 'grid-shop':
                return <Shop/>
            case 'grid-blog':
                return <Blog/>
            default:
                return <Landing/>
        }
    };
  return (
      <div className="container">
        <h1 className="visually-hidden">Конструктор сайтов</h1>
        <SiteGrid grid={siteGrid} />
          {getGridByType()}
      </div>
  );
}
