import { ChangeEvent, FormEvent, useRef } from 'react'

type ImgUploadProps = {
  changeUrl: (_: string) => void
}

export const ImgUpload = ({ changeUrl }: ImgUploadProps): JSX.Element => {
  const urlRef = useRef('')

  const upload = (evt: FormEvent) => {
    evt.preventDefault()
    changeUrl(urlRef.current)
  }

  return (
    <div className='img-upload'>
      <p>Загрузите изображение</p>
      <input
        type='url'
        placeholder='Вставьте ссылку на изображение'
        onChange={(evt: ChangeEvent<HTMLInputElement>) => (urlRef.current = evt.target.value)}
      />
      <label className='img-upload__label'>
        Загрузить
        <input
          className='visually-hidden'
          type='file'
          accept='image/png, image/jpeg'
          onClick={upload}
        />
      </label>
    </div>
  )
}
