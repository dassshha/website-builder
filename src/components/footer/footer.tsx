import { ElementPanel } from '../element-panel/element-panel'
import { ContainerContext } from '../../contexts/container'
import { useSelector } from 'react-redux'
import { getFooterElements } from '../../store/selectors'
import { Element } from '../element/element'
import { CONTAINER_TYPE } from '../../const'

export const Footer = (): JSX.Element => {
  const elements = useSelector(getFooterElements)
  return (
    <ContainerContext.Provider value={CONTAINER_TYPE.FOOTER}>
      <footer className={`footer ${!elements.length && 'footer--empty'}`}>
        <p className='placeholder'>Footer</p>
        <ElementPanel />
        <div className='footer__elements-wrapper'>
          {elements.map((el) => (
            <Element key={el.id} {...el} />
          ))}
        </div>
      </footer>
    </ContainerContext.Provider>
  )
}
