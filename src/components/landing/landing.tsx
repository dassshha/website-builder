import { Header } from '../header/header'
import { Footer } from '../footer/footer'
import { Content } from '../content/content'
import { CONTAINER_TYPE } from '../../const'

export const Landing = (): JSX.Element => {
  return (
    <div className='layout layout--landing'>
      <Header />
      <Content contentType={CONTAINER_TYPE.CONTENT1} />
      <Footer />
    </div>
  )
}
