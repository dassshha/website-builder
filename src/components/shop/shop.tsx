import {Header} from '../header/header';
import {Footer} from '../footer/footer';
import {Content} from '../content/content';
import {CONTAINER_TYPE} from '../../const';

export const Shop = (): JSX.Element => {
  return (
      <div className="layout layout--shop">
          <Header/>
          <Content contentType={CONTAINER_TYPE.CONTENT1}/>
          <Content contentType={CONTAINER_TYPE.CONTENT2}/>
          <Content contentType={CONTAINER_TYPE.CONTENT3}/>
          <Footer/>
      </div>
  );
}
