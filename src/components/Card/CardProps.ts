import { image } from '../../interfaces/imagesListInterface';

export interface CardProps {
    image: image;
    handleLike: () => void;
}
