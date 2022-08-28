import {useDispatch} from 'react-redux';
import {addElement} from '../../store/actions';

type ChooseElementProps = {
    listType: string,
};


export const ChooseElement = ({listType}:ChooseElementProps): JSX.Element => {
    const dispatch = useDispatch();

  return (
      <div className="choose-elem ">
          <button type="button" className="choose-elem__btn" onClick={() => dispatch(addElement({listType, tag: 'h1'}))}>Заголовок H1</button>
          <button type="button" className="choose-elem__btn" onClick={() => dispatch(addElement({listType, tag: 'h2'}))}>Заголовок H2</button>
          <button type="button" className="choose-elem__btn" onClick={() => dispatch(addElement({listType, tag: 'h3'}))}>Заголовок H3</button>
          <button type="button" className="choose-elem__btn" onClick={() => dispatch(addElement({listType, tag: 'p'}))}>Абзац текста</button>
          <button type="button" className="choose-elem__btn" onClick={() => dispatch(addElement({listType, tag: 'img'}))}>Изображение</button>
      </div>
  );
}

// дейсствие по типу : список в который добавляем и элемент который добавляем
