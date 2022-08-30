import { useContext, useRef } from 'react'
import ContentEditable from 'react-contenteditable'
import { useDispatch } from 'react-redux'
import { deleteElement } from '../../store/actions'
import { ElementItem } from '../../types/element-item'
import { ContainerContext } from '../../contexts/container'

type ElementTextProps = {
  className: string
  placeholder: string
} & ElementItem

export const ElementText = ({ className, tag, id, placeholder }: ElementTextProps): JSX.Element => {
  const text = useRef('')
  const dispatch = useDispatch()
  const listType = useContext(ContainerContext)

  const handleChange = (evt: { target: { value: string } }) => {
    text.current = evt.target.value
  }

  const handleDelete = () => dispatch(deleteElement({ listType, id }))

  return (
    <div className={`element ${className}`} tabIndex={0}>
      <ContentEditable
        html={text.current}
        onChange={handleChange}
        tagName={tag}
        disabled={false}
        data-placeholder={placeholder}
      />
      <button type='button' className='delete-btn' onClick={handleDelete}>
        <span className='visually-hidden'>Удалить элемент</span>
      </button>
    </div>
  )
}
