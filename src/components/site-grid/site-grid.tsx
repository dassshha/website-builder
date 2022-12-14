import { useInputType } from '../../types/use-input'
import { GRID_TYPE } from '../../const'
import { useDispatch } from 'react-redux'
import { ChangeEvent } from 'react'
import { changeGrid } from '../../store/actions'

type SiteGridProps = {
  grid: useInputType
}

export const SiteGrid = ({ grid }: SiteGridProps): JSX.Element => {
  const dispatch = useDispatch()
  const changeGridHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    grid.onChange(evt)
    dispatch(changeGrid())
  }
  return (
    <form className='grid-select'>
      <h2 className='grid-select__header'>Выберите сетку сайта</h2>
      <input
        className='grid-select__radio visually-hidden'
        type='radio'
        name='grid'
        id='grid-landing'
        checked={grid.isChecked(GRID_TYPE.LANDING)}
        onChange={changeGridHandler}
      />
      <label htmlFor='grid-landing' className='grid-select__btn'>
        <span className='grid-select__text'>Лендинг</span>
        <svg
          className='grid-select__img'
          width={240}
          height={132}
          viewBox='0 0 240 132'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect
            x='0.3'
            y='0.3'
            width='239.4'
            height='15.4'
            strokeWidth='0.6'
            strokeDasharray='5 5'
          />
          <rect
            x='0.3'
            y='116.3'
            width='239.4'
            height='15.4'
            strokeWidth='0.6'
            strokeDasharray='5 5'
          />
          <rect
            x='0.3'
            y='26.3'
            width='239.4'
            height='79.4'
            strokeWidth='0.6'
            strokeDasharray='5 5'
          />
        </svg>
      </label>
      <input
        className='grid-select__radio visually-hidden'
        type='radio'
        name='grid'
        id='grid-blog'
        checked={grid.isChecked(GRID_TYPE.BLOG)}
        onChange={changeGridHandler}
      />
      <label htmlFor='grid-blog' className='grid-select__btn'>
        <span className='grid-select__text'>Блог</span>
        <svg
          className='grid-select__img'
          width={240}
          height={132}
          viewBox='0 0 240 132'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect
            x='0.3'
            y='0.3'
            width='239.4'
            height='15.4'
            strokeWidth='0.6'
            strokeDasharray='5 5'
          />
          <rect
            x='0.3'
            y='116.3'
            width='239.4'
            height='15.4'
            strokeWidth='0.6'
            strokeDasharray='5 5'
          />
          <rect
            x='0.3'
            y='26.394'
            width='89.4'
            height='79.4'
            strokeWidth='0.6'
            strokeDasharray='5 5'
          />
          <rect
            x='100.3'
            y='26.3'
            width='139.4'
            height='79.4'
            strokeWidth='0.6'
            strokeDasharray='5 5'
          />
        </svg>
      </label>
      <input
        className='grid-select__radio visually-hidden'
        type='radio'
        name='grid'
        id='grid-shop'
        checked={grid.isChecked(GRID_TYPE.SHOP)}
        onChange={changeGridHandler}
      />
      <label htmlFor='grid-shop' className='grid-select__btn'>
        <span className='grid-select__text'>Магазин</span>
        <svg
          className='grid-select__img'
          width={240}
          height={132}
          viewBox='0 0 240 132'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect
            x='0.3'
            y='0.3'
            width='239.4'
            height='15.4'
            strokeWidth='0.6'
            strokeDasharray='5 5'
          />
          <rect
            x='0.3'
            y='116.3'
            width='239.4'
            height='15.4'
            strokeWidth='0.6'
            strokeDasharray='5 5'
          />
          <rect
            x='0.3'
            y='26.3'
            width='73.4'
            height='79.4'
            strokeWidth='0.6'
            strokeDasharray='5 5'
          />
          <rect
            x='83.3'
            y='26.3'
            width='73.4'
            height='79.4'
            strokeWidth='0.6'
            strokeDasharray='5 5'
          />
          <rect
            x='166.3'
            y='26.3'
            width='73.4'
            height='79.4'
            strokeWidth='0.6'
            strokeDasharray='5 5'
          />
        </svg>
      </label>
    </form>
  )
}
