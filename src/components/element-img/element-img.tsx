import {useVisibility} from '../../hooks/use-visibility';
import {ImgUpload} from '../img-upload/img-upload';
import {useContext, useState} from 'react';
import useImage from 'use-image';
import {toast} from 'react-toastify';
import {useDispatch} from 'react-redux';
import {ContainerContext} from '../header/header';
import {deleteElement} from '../../store/actions';

type ElementImgProps = {
    id: string
};

export const ElementImg = ({id}: ElementImgProps): JSX.Element => {
    const imgUploadPopupVisibility = useVisibility();

    const [url, setUrl] = useState('');
    const [image, status] = useImage(url);

    const dispatch = useDispatch();
    const listType = useContext(ContainerContext);

    const getImgStatusClassName = () => {
        switch (status) {
            case 'loading':
                return 'element--image  element--uploading';
            case 'loaded':
                return 'element--uploaded';
            default:
                toast.error('Ошибка при загрузки изображения!', {toastId: "custom-id-error"});
                return 'element--image element--uploading'
        }
    };

    const handleDelete = () => dispatch(deleteElement({listType, id}));

  return (
      <div className={`element ${getImgStatusClassName()}  image`} tabIndex={0}>
          <button type="button" className="delete-btn" onClick={handleDelete}>
              <span className="visually-hidden">Удалить элемент</span>
          </button>
          <button type="button" className="add-img-btn" onClick={imgUploadPopupVisibility.change}>
              <svg width={32} height={32} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd"
                        d="M6 2V8H0V12H6V18H10V12H16V8H10V2H6ZM12 14V20H6V40C6 42.2 7.8 44 10 44H42C44.2 44 46 42.2 46 40V16C46 13.8 44.2 12 42 12H35.66L32 8H18V14H12ZM26 38C31.52 38 36 33.52 36 28C36 22.48 31.52 18 26 18C20.48 18 16 22.48 16 28C16 33.52 20.48 38 26 38ZM26 34C22.68 34 20 31.32 20 28C20 24.68 22.68 22 26 22C29.32 22 32 24.68 32 28C32 31.32 29.32 34 26 34Z"/>
              </svg>
          </button>
          {imgUploadPopupVisibility.value && <ImgUpload changeUrl={(url: string) => setUrl(url)}/>}
          {status === 'loaded' && <img src={image?.src}/>}
      </div>
  );
}
