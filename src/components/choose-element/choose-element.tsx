import {useDispatch} from 'react-redux';
import {addElementToHeader} from '../../store/actions';

export const Elements = (): JSX.Element => {
    const dispatch = useDispatch();

  return (
      <div className="choose-elem ">
          <button type="button" className="choose-elem__btn" onClick={() => dispatch(addElementToHeader('h1'))}>Заголовок H1</button>
          <button type="button" className="choose-elem__btn" onClick={() => dispatch(addElementToHeader('h2'))}>Заголовок H2</button>
          <button type="button" className="choose-elem__btn" onClick={() => dispatch(addElementToHeader('h3'))}>Заголовок H3</button>
          <button type="button" className="choose-elem__btn" onClick={() => dispatch(addElementToHeader('p'))}>Абзац текста</button>
          <button type="button" className="choose-elem__btn" onClick={() => dispatch(addElementToHeader('img'))}>Изображение</button>
      </div>
  );
}
