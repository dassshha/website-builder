import { ElementPanel } from '../element-panel/element-panel'
import { Element } from '../element/element'
import { useSelector } from 'react-redux'
import {
  getContent1Elements,
  getContent2Elements,
  getContent3Elements,
} from '../../store/selectors'
import { State } from '../../types/state'
import { ContainerContext } from '../../contexts/container'

type ContentProps = {
  contentType: string
}

export const Content = ({ contentType }: ContentProps): JSX.Element => {
  const getElementsByContentType = (state: State) => {
    switch (contentType) {
      case 'content-1':
        return getContent1Elements(state)
      case 'content-2':
        return getContent2Elements(state)
      case 'content-3':
        return getContent3Elements(state)
      default:
        return []
    }
  }

  const elements = useSelector(getElementsByContentType)

  return (
    <ContainerContext.Provider value={contentType}>
      <div className={`content ${contentType} ${!elements.length && 'content--empty'}`}>
        <p className='placeholder'>Content</p>
        <ElementPanel />
        <div className='content__elements-wrapper'>
          {elements.map((el) => (
            <Element key={el.id} {...el} />
          ))}
        </div>
      </div>
    </ContainerContext.Provider>
  )
}
