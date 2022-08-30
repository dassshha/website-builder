import {Header} from '../header/header';
import {Footer} from '../footer/footer';
import {Content} from '../content/content';

export const Shop = (): JSX.Element => {
  return (
      <div className="layout layout--shop">
          <Header/>
          <Content contentType={'content-1'}/>
          <Content contentType={'content-2'}/>
          <Content contentType={'content-3'}/>
          <Footer/>
      </div>
  );
}
