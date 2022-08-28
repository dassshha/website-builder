import {ChangeEvent, createRef, FormEvent, MouseEventHandler, useRef, useState} from 'react';
import {useInput} from '../../hooks/use-input';
import useImage from 'use-image';
import {Image} from '../image/image';

export const ImgUpload = (): JSX.Element => {
    const urlRef = useRef('');
    const [url, setUrl] = useState('');
    const upload = (evt: FormEvent) => {
        evt.preventDefault();
        setUrl(urlRef.current);
    };
  return (
      <>
          <div className="img-upload">
          <p>Загрузите изображение</p>
          <input type="url" placeholder="Вставьте ссылку на изображение" onChange={(evt: ChangeEvent<HTMLInputElement>) => urlRef.current = evt.target.value}/>
          <label className="img-upload__label" >Загрузить
              <input className="visually-hidden" type="file" accept="image/png, image/jpeg" onClick={upload}/>
          </label>
        </div>
          <Image url={url}></Image>
          </>
  );
}
