import {Header} from '../header/header';
import {Footer} from '../footer/footer';
import {Content} from '../content/content';

export const Blog = (): JSX.Element => {
  return (
      <div className="layout layout--blog">
          <Header/>
          <Content contentType={'content-1'}/>
          <Content contentType={'content-2'}/>
          <Footer/>
      </div>
  );
}
