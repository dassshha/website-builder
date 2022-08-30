import { Header } from '../header/header'
import { Footer } from '../footer/footer'
import { Content } from '../content/content'
import { CONTAINER_TYPE } from '../../const'

export const Blog = (): JSX.Element => {
  return (
    <div className='layout layout--blog'>
      <Header />
      <Content contentType={CONTAINER_TYPE.CONTENT1} />
      <Content contentType={CONTAINER_TYPE.CONTENT2} />
      <Footer />
    </div>
  )
}
