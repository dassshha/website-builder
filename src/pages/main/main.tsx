import {SiteGrid} from '../../components/site-grid/site-grid';
import {useInput} from '../../hooks/use-input';
import {Landing} from '../../components/landing/landing';
import {GRID_TYPE} from '../../const';
import {Blog} from '../../components/blog/blog';
import {Shop} from '../../components/shop/shop';

export const Main = (): JSX.Element => {
    const siteGrid = useInput('grid-landing');

    const getGridByType = () => {
        switch (siteGrid.value) {
            case GRID_TYPE.BLOG:
                return <Blog/>
            case GRID_TYPE.SHOP:
                return <Shop/>
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
