import {ElementItem} from '../../types/element-item';
import {ElementText} from '../element-text/element-text';
import {ELEMENT_PAYLOAD} from '../../const';

type ElementProps = {
  listType: string
} & ElementItem;

export const Element = ({listType, tag, id}: ElementProps): JSX.Element => {
  switch (tag) {
    case ELEMENT_PAYLOAD.H1.TAG:
      return <ElementText tag={ELEMENT_PAYLOAD.H1.TAG} placeholder={ELEMENT_PAYLOAD.H1.PLACEHOLDER}  id={id} listType={listType} className={'title'}/>
    case ELEMENT_PAYLOAD.H2.TAG:
      return <ElementText tag={ELEMENT_PAYLOAD.H2.TAG} placeholder={ELEMENT_PAYLOAD.H2.PLACEHOLDER} id={id} listType={listType} className={'title'}/>
    case ELEMENT_PAYLOAD.H3.TAG:
      return <ElementText tag={ELEMENT_PAYLOAD.H3.TAG} placeholder={ELEMENT_PAYLOAD.H3.PLACEHOLDER} id={id} listType={listType} className={'title'}/>
    default:
      return <ElementText tag={ELEMENT_PAYLOAD.P.TAG} placeholder={ELEMENT_PAYLOAD.P.PLACEHOLDER} id={id} listType={listType} className={'text'}/>
  }
}

