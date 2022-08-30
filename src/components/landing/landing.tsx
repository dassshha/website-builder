import {Header} from '../header/header';
import {Footer} from '../footer/footer';
import {Content} from '../content/content';

export const Landing = (): JSX.Element => {
  return (
      <div className="layout layout--landing">
          <Header />
          <Content contentType={'content-1'}/>
          <Footer/>
      </div>
  );
}
