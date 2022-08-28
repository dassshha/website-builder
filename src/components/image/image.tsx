import useImage from 'use-image';

type ImageProps = {
    url: string
};

export const Image = ({url}: ImageProps): any => {
    const [image, status] = useImage(url);
    return <img src={image?.src}></img>
}
