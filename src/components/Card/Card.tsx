import React from 'react';

import { BsHandThumbsUpFill } from 'react-icons/bs';
import { VscRefresh } from 'react-icons/vsc';

import { image } from '../../interfaces/imagesListInterface';

import './Card.scss';

const Card = (props: { image: image; handleLike: () => void }): JSX.Element => {
    const { title, author, main_attachment, likes_count, liked, price, id } = props.image;
    const bigImage = main_attachment.big;
    const handleClick = () => {
        props.handleLike();
    };
    return (
        <div className="card" style={{ backgroundImage: `url(${bigImage})` }}>
            <div className="card__top">
                <div className="card__price">{price}.00</div>
                <div>
                    <div
                        className="card__likes"
                        style={{ backgroundColor: liked ? 'green' : 'red' }}
                        onClick={handleClick}
                    >
                        <BsHandThumbsUpFill style={{ color: '#393939', width: '20px' }} />
                        <p className="card__likesCount">{likes_count}</p>
                    </div>
                    <div className="card__refresh">
                        <VscRefresh style={{ color: '#393939', width: '20px' }} />
                    </div>
                </div>
            </div>
            <div className="card__bottom">
                <h3 className="card__title">{title}</h3>
                <h3 className="card__title">{title}</h3>
            </div>
        </div>
    );
};

export default Card;
